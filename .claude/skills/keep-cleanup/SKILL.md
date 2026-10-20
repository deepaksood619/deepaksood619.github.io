---
name: keep-cleanup
description: Monthly Google Keep cleanup - process two exported Google Docs ("Google Keep Document - Links" and "Google Keep Document - Green Links"). Plain links are appended to docs/knowledge/links.md as a viewing log; green links (important videos) are read and merged into the right notes in the knowledge base. Use when the user runs /keep-cleanup [links-file] [green-links-file].
---

# Keep Cleanup Skill - Monthly Google Keep to Knowledge Base

Once a month the user exports two Google Keep notes as docs and drops them in. This skill turns them into vault content, then the user clears the Keep notes.

| Export | Meaning | Destination |
| --- | --- | --- |
| `Google Keep Document - Links` | Log of things seen; low importance | Appended to `docs/knowledge/links.md` as bare links, no reading |
| `Google Keep Document - Green Links` | Important videos/articles the user saw | Each link is read, then merged into the right existing note (or a new one) |

## Usage

```text
/keep-cleanup
/keep-cleanup <links-file> <green-links-file>
```

## Config

```bash
VAULT="/Users/deepak/deepaksood619.github.io/docs"
LINKS_NOTE="$VAULT/knowledge/links.md"
SCRATCH=<session scratchpad dir>   # all temp files (transcripts, wavs, parsed lists) go here
```

## 0. Locate the exports

1. Use the paths given as arguments. Otherwise the user downloads the two Google Docs as `.docx` into **`~/Downloads`**:
   - `~/Downloads/Google Keep Document - Links.docx`
   - `~/Downloads/Google Keep Document - Green Links.docx`

   If a name is slightly different (e.g. `(1)` suffix), take the newest `~/Downloads/Google Keep Document*` match. Don't read other folders or the personal Drive (service account) unless the user says so.
2. Convert to text in `$SCRATCH` (never in place): `textutil -convert txt -output "$SCRATCH/links.txt" "<file>.docx"`. Other formats (`.md`, `.txt`, `.html`, `.pdf`) are also fine. If either file is missing, ask the user for the path.
   - **Export format:** each entry is a title line (YouTube titles are often truncated with `...`) followed by the URL on the next line, blank lines between entries. The exported `Links` docx is large (~1500 hyperlinks, an embedded image), so parse programmatically (pair each URL with the title line above it) instead of reading it all into context.
   - Strip tracking params (`?si=...`) from the URL when writing to the vault.
3. Never read `docs/office/` without explicit approval (CLAUDE.md rule).
4. Extract URLs and any text the user wrote next to each URL (titles, notes). Keep that text. It is context for the log entry and for the note merge.

## 1. Plain Links: append to `links.md`

Target file: `docs/knowledge/links.md`. The log lives in `## Other Links` as a numbered list, followed by a final `## End` heading.

1. `Read` the tail of the file. Find the last numbered entry and the `## End` line. New entries go **after the last entry, before `## End`**.
2. Continue the numbering from the last entry (`N+1.`).
3. Match the existing line format exactly: `N. [Title](url)`
   - Title = the title in the export if present; else fetch the title (YouTube: `yt-dlp --skip-download --print title "<url>"`; others: WebFetch / `web-crawl`). Do not invent titles.
   - Keep the user's own annotation after the link, as in `N. [Title](url) - note`.
4. **Dedupe:** skip a URL already in the file. Compare normalized keys (YouTube video id, or the URL without `?si=`/tracking params). Report the skip count.
5. Preserve the order from the export (it is a chronological log).
6. Bump `updated:` in the frontmatter to today's date.
7. Don't reword, reorder, or "clean up" existing entries. Edit with `Edit`/`Write`, not by regenerating the file. It is about 20k lines.

## 2. Green Links: read each one, merge into the right note

For every link in the Green Links export, do the following. Fetching can run in parallel with subagents (batches of ~5). **Vault edits are done serially by the main agent** so two links never race on the same file.

### 2a. Get the content

- **YouTube:** transcript only, never the full video. **Preferred: drive the user's own Chrome over remote debugging** with [scripts/yt_transcripts_cdp.js](scripts/yt_transcripts_cdp.js). It opens each watch page, clicks "Show transcript" and saves YouTube's own transcript, with no rate limit and no Whisper. Tried and rejected (all fail on many videos): yt-dlp captions (HTTP 429 after ~10 videos), a raw `timedtext` URL (empty body), the Playwright MCP browser (YouTube's `get_transcript` call returns 400 to that automated browser, even in a fresh context), and Whisper (slow; loops on long or non-English audio; only the `.en` model is installed).

  1. Ask the user to quit Chrome (Cmd+Q), then run in the prompt (`!` prefix): `open -na "Google Chrome" --args --remote-debugging-port=9222 --user-data-dir=$HOME/.chrome-debug-profile`, and open `youtube.com` once in that window (signing in is not needed). Check it is up: `curl -s localhost:9222/json/version`.
  2. Run it in the background (it takes ~10-15 s per video):

     ```bash
     PW_CORE=$(ls -d ~/.npm/_npx/*/node_modules/playwright-core | head -1) \
       node .claude/skills/keep-cleanup/scripts/yt_transcripts_cdp.js "$SCRATCH/tr" <id1> <id2> ...
     ```

     Output: `$SCRATCH/tr/<id>.pw.txt` (first line `title | channel`, blank line, then the plain transcript). It prints `ok <chars>` or `FAIL <reason>` per id. If `playwright-core` is not in the npx cache, run `npx -y playwright@latest --version` once to populate it.
  3. The script uses DOM clicks, because the "...more" expander and the "Show transcript" button fail Playwright's visibility checks in the current YouTube layout. It handles both the legacy (`ytd-transcript-segment-renderer`) and new (`transcript-segment-view-model`) transcript elements. A FAIL with "no Show transcript button" means captions are disabled; retry once, then use the whisper path below.
  4. Transcripts of Hindi/Hinglish videos come back in the original language; summarize them in English. When the batch is done, the user can close the debug Chrome window.

  Summarizing 30+ transcripts in the main context is too expensive: hand batches of 4-6 `.pw.txt` files to parallel subagents that write `$SCRATCH/sum/<id>.md` (title, topic, 8-15 key points, suggested home from `obsidian-hybrid-search`, mode) and do **not** edit the vault, then make the vault edits yourself serially.

  Fallbacks (only if the browser route fails for a video), yt-dlp:
  1. Captions: `yt-dlp --skip-download --write-auto-sub --sub-lang en --sub-format vtt -o "$SCRATCH/<id>.%(ext)s" "<url>"`. Strip timestamps/tags and dedupe repeated cue lines.
  2. On 429: audio only to wav, `ffmpeg` to 16 kHz mono, then `whisper-cli -m ~/.cache/whisper/ggml-base.en.bin ...`. **Never delete or re-download the Whisper model.**
  3. Also grab title, channel and description: `yt-dlp --skip-download --print "%(title)s | %(channel)s | %(upload_date)s" "<url>"`.
- **Other URLs:** the `web-crawl` skill (`crwl`), else WebFetch.
- If a link can't be fetched (private, removed, paywalled), don't fabricate content. Record it under "Unprocessed" in the final report and add it to `links.md` as a plain entry so it isn't lost.

### 2b. Understand it, then find the right note

1. Summarize what the video/article is about (topic, key claims, concrete facts, numbers, names). Prefer the source's own wording for facts. Don't pad.
2. Search the vault for the home of this topic:

   ```bash
   obsidian-hybrid-search --db docs/.obsidian-hybrid-search.db search "<topic keywords>"
   grep -ril "<topic>" docs/ --include=*.md | head
   ```

3. Choose per the `/note` skill's rules ([note/SKILL.md](../note/SKILL.md)):
   - **Dedicated note exists:** `Read` it, then `Edit` in a new section or bullets. Bump `updated:`.
   - **Small content (under 10 lines):** add a condensed bold paragraph to the most relevant existing file, with `[Source](url)`.
   - **Substantial and no home (50+ lines worth):** create a new note following the 5-field frontmatter, root-relative slug with no path segments, no H1, and fenced code blocks. Use the Obsidian CLI as `/note` does.
   - **No good fit:** ask the user before creating a new category folder.
4. Always include the source link in the note (`## Links` section or inline `[Source](url)`), using the standard markdown link form with paths from `docs/`. No `[[wikilinks]]`.
5. Evergreen only: record what the video taught (facts, frameworks, arguments), not "I watched this on <date>".
6. If the user wrote a note next to the link in Keep, work it in (it is often why the link mattered).
7. Green links are not added to `links.md`. They live in the notes only, unless unfetchable (see 2a).

### 2c. Link-hygiene

- Verify every internal link target exists before adding it (`ls docs/<path>`).
- Escape MDX-unsafe characters in prose (`<`, `>`, `{...}`).
- If a topic came up repeatedly across several green links in the same month, consider one consolidated note instead of several scattered paragraphs.

## 3. Validate

```bash
node check-markdown-links.js          # custom internal-link validator
pre-commit run --files <changed files>  # markdownlint, mdx checker, etc.
```

Fix anything the validators flag. Don't run a full `npm run build` unless a link or MDX error needs it.

## 4. Clean up

- Delete everything under `$SCRATCH` that was created (transcripts, audio, parsed lists). **Keep `~/.cache/whisper/ggml-base.en.bin`.**
- Do **not** delete the user's export files. Tell them they can delete them, and that the Keep notes are safe to clear once they've reviewed the report. If an export sits inside `docs/`, remind the user to move it out so it isn't committed or built.
- **Never auto-commit.** Leave the changes in the working tree for the user to review.

## 5. Report

```markdown
**Links log:** appended N links to docs/knowledge/links.md (#X-#Y), skipped D duplicates
**Green links:** M processed
| Link | Added to | Mode (added/updated/created) |
| --- | --- | --- |
**Unprocessed:** <links that couldn't be fetched, and what was done with them>
**New files / new folders:** <list or none>
**Validation:** <check-markdown-links + pre-commit result>
```

## Learnings and Techniques (first run, Oct 2026: about 1,500 links and 39 green links)

### Export format and the links log

- The Keep exports are newest-first, but `links.md` is oldest-first, so **reverse the appended block**. Check by comparing a dated title (e.g. "Weekly Market Metrics | Week N") in the export against the tail of the log before writing.
- Parse with a small script (title line, then URL line), not by reading the file. Keep the parse script idempotent: restore `links.md` with `git checkout docs/knowledge/links.md` and re-run if you need to redo the append (check first that it has no uncommitted user edits).
- Dedupe on the video id (the 11 characters after `youtu.be/`, `v=` or `shorts/`) against the existing log, within the export itself (first run: 6 against the log, 10 inside the export), and against the green-links set. The first run's second tracking param was `?is=`, so strip both `si` and `is`.
- Escape `[` and `]` inside titles as `\[` and `\]`, or the link breaks. Don't touch the ~1,900 existing entries that still have `?si=` params.

### Getting transcripts (summary of what worked and what didn't)

| Method | Result |
| --- | --- |
| yt-dlp captions | 429 rate limit after about 10 videos; fine for a handful. With `--print`, add `--no-simulate` or no subtitle file is written |
| raw `timedtext` URL (from the browser or curl) | empty body (needs a PO token) |
| Playwright MCP browser | YouTube's `get_transcript` call returns 400 to it, even in a fresh context; only worked for 3 videos |
| Whisper `ggml-base.en` | slow and heavy, hallucinated repetition loops on long (58 min) or Hindi/Hinglish audio; yt-dlp audio download also hit 403 on some. Last resort only |
| **Own Chrome over CDP (`scripts/yt_transcripts_cdp.js`)** | in the final run 16 of 17 videos worked first time and the one failure worked on a plain retry; about 10-15 s per video, no rate limit |

- In the real Chrome the "...more" expander and the "Show transcript" button fail Playwright's visibility checks, so the script uses DOM `click()` via `page.evaluate`. YouTube serves two transcript DOMs (`ytd-transcript-segment-renderer .segment-text` and `transcript-segment-view-model`); the script handles both. Use `waitForSelector(..., {state: 'attached'})`.
- Transcripts of Hindi/Hinglish videos come back in the original language; summarize them in English. One video failed once with a selector timeout and succeeded on a plain retry, so retry a FAIL once before giving up.
- Run the script in the background (`run_in_background`), as 16 videos take 3-4 minutes. A single bad video only prints `FAIL` and the batch continues.
- Never write transcripts or summaries into the repo; keep them in `$SCRATCH`.

### Pipeline for the green links (this split kept the main context small)

1. Fetch all transcripts into `$SCRATCH/tr/<id>.pw.txt`.
2. Hand batches of 4-6 transcripts, grouped by topic (food/health, tech, finance/law/property, politics), to parallel subagents. Each one writes `$SCRATCH/sum/<id>.md` (title, topic, 8-15 evergreen bullets, suggested home from `obsidian-hybrid-search --db docs/.obsidian-hybrid-search.db search ...`, what the target note already covers, and mode ADD-PARAGRAPH / UPDATE-SECTION / NEW-NOTE) and **does not edit the vault**. Tell them which notes you have already changed today so they check for overlap.
3. The main agent reads each summary and files it, serially. Agents can flag unusable transcripts (e.g. a Whisper loop), so re-fetch rather than guess.
4. Group videos that point at the same note (e.g. three kitchen videos into `pressure-cooker.md`) into one edit.

### Filing rules that came up

- Check what the target already covers and add only the new facts (several summaries had to be trimmed this way, e.g. the cities report and the KCP note).
- Bump `updated:` to today's date in every file you touch, new or old, and keep the rest of the frontmatter. New notes get the 5 frontmatter fields, a slug with zero path segments, no H1, and one list item per line (no hard wraps).
- Editing under `economics/` or `education/` loads that folder's `CLAUDE.md`; follow the existing note's style (the notes there were already in the lighter house style, not the full templates).
- Time-sensitive material (rates, flows, prices, news) goes in a dated section in the research notes (`economics/sector-analysis/`), with figures stated and "as of <month year>". Videos with an unclear date: give the likely date and say it was inferred.
- Opinion, partisan or allegation-heavy videos (politics, a protest commentary): keep only neutral verifiable facts (articles, dates, votes), label the rest as the creator's claims with the creator's name and date, and use a link-only line when the content is unverified claims about named people.
- Garbled numbers from auto-captions: say "verify" in the note rather than silently correcting (income-tax slabs, the 87A limit and several prices were inferred this way).
- Small material (a link plus a few lines) goes into an existing note; create a new note only when there is a coherent 30-60 lines and no home. Add the new note to its folder's `readme.md` and link it from 1-2 related notes. Read the target's section headings first and insert before `## Links`, not at the very end.
- Do not leave the user's export files, the debug-Chrome profile or `.playwright-mcp/` around: delete `.playwright-mcp/` (the Playwright MCP creates it at the repo root, and it must never be committed).

### Tool gotchas hit during the run

- The shell is zsh: a variable holding a space-separated file list is **not word-split**, so `pre-commit run --files $LIST` fails with "no files to check". Use `bash -c '...'` with the paths inline, or an array.
- `echo "====="` (a bare run of `=`) errors in zsh; use `---`.
- macOS: no `timeout` command, and `sed '0,/re/'` is unsupported. Use Edit/python for single-occurrence replacements.
- Foreground `sleep N; cat file` is blocked; to wait for a background job, use a background `until ! pgrep -f <name>; do sleep 3; done` and read the log when it notifies you. Bash calls over 120 s are moved to the background automatically.
- `node check-markdown-links.js` reported 16 broken links, all pre-existing Obsidian image links (`media/...`) that the build's remark plugin resolves; none came from new content. The `docusaurus-mdx-checker` hook scans the whole vault, and its 22 errors are all in `docs/office/` (do not open them). Judge the run by whether any error names a file you touched.
- `pre-commit` installs its hook environments on first use (a few minutes). `markdownlint`, trailing whitespace and end-of-file checks all passed on the touched files.
- Reading a Google Doc from the personal Drive through the service account only works if the doc is shared with the account's `client_email` (see the root `CLAUDE.md`), and the first use of the key was blocked by the auto-mode classifier. The Downloads `.docx` route was simpler and is now the default.

## Critical Rules

✅ Locate the exports before anything else · Plain links go at the end of `links.md` before `## End` · Match the existing line format · Dedupe · Read every green link before filing it · Transcript only, never the full video · Search before deciding where a note goes · Source link in every note change · Never auto-commit

❌ Reading `docs/office/` · Reading unrelated Drive/Downloads files to find the exports · Inventing titles or content for links that couldn't be fetched · Rewriting or reordering existing `links.md` entries · Adding an H1 or a folder-based slug · Deleting the Whisper model · Deleting the user's export files

## Related skills

- [/note](../note/SKILL.md) - rules for adding or merging content into a note
- [/study](../study/SKILL.md) - go deeper on a topic from a green link
