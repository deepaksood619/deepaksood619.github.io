// Usage: node yt_transcripts_cdp.js <outDir> <id> [<id> ...]
// Connects to a Chrome started with --remote-debugging-port=9222, opens each video, clicks "Show transcript",
// and writes <outDir>/<id>.pw.txt (first line "title | channel", blank line, plain transcript).
const { chromium } = require(process.env.PW_CORE || 'playwright-core');
const fs = require('fs');

(async () => {
  const [outDir, ...ids] = process.argv.slice(2);
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const ctx = browser.contexts()[0];
  for (const id of ids) {
    const page = await ctx.newPage();
    try {
      await page.goto('https://www.youtube.com/watch?v=' + id, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#above-the-fold', { timeout: 20000 });
      await page.waitForTimeout(2000);
      // DOM clicks: the "...more" expander and the "Show transcript" button fail Playwright's visibility checks in the current layout
      await page.evaluate(() => document.querySelector('#description-inline-expander #expand, #expand')?.click());
      await page.waitForTimeout(1500);
      const clicked = await page.evaluate(() => {
        const btn = [...document.querySelectorAll('button')].find((e) => /show transcript/i.test(e.innerText + (e.getAttribute('aria-label') || '')));
        if (btn) btn.click();
        return !!btn;
      });
      if (!clicked) throw new Error('no Show transcript button (captions disabled?)');
      await page.waitForSelector('transcript-segment-view-model, ytd-transcript-segment-renderer', { state: 'attached', timeout: 20000 });
      await page.waitForTimeout(1000);
      const out = await page.evaluate(() => {
        const modern = [...document.querySelectorAll('transcript-segment-view-model')];
        const legacy = [...document.querySelectorAll('ytd-transcript-segment-renderer .segment-text')];
        const clean = (s) => s.split('\n').map((x) => x.trim()).filter((l) => l && !/^\d+(:\d+)+$/.test(l) && !/^\d+ (second|minute|hour)s?(, \d+ (second|minute)s?)*$/.test(l)).join(' ');
        const text = (modern.length ? modern.map((s) => clean(s.innerText)) : legacy.map((s) => s.textContent.trim())).join(' ');
        return { text, title: document.title.replace(/ - YouTube$/, ''), channel: document.querySelector('ytd-channel-name a')?.textContent?.trim() };
      });
      fs.writeFileSync(`${outDir}/${id}.pw.txt`, `${out.title} | ${out.channel}\n\n${out.text}`);
      console.log(id, 'ok', out.text.length);
    } catch (e) {
      console.log(id, 'FAIL', e.message.split('\n')[0].slice(0, 100));
    }
    await page.close();
    await new Promise((r) => setTimeout(r, 1500));
  }
  await browser.close(); // only drops the CDP connection; the user's Chrome stays open
})();
