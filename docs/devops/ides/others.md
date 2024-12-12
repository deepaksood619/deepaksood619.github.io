# Others

## Google Meet

CMD + D - microphone mute/unmute (MAC)

6 - Phone Dial-in mute/unmute (Phone)

## Google Sheets / Docs

CMD + / - Shortcuts panel

CMD +  - Clear formatting

Codenvy - cloud workspaces for Dev teams

Eclipse Che

## Google Chrome

- Shift + / = show keyboard shortcuts on youtube
- Momentum (extension)
- CMD + Shift + F - Full Screen
- CMD + Shift + A - Search tabs

doc.new

sheet.new

## Chrome Devtools

## Speed up facebook videos

```js
videos = document.getElementsByTagName("video");
for(var i = 0; i < videos.length; i++){
 videos [i].playbackRate = 2;
}
```

## Other browsers

https://sigmaos.com

## Google Search

- Use the site:search operator, Google will only show you the results from a specific website
- a country-specific search using the site:search operator plus the TLD for that country. For example, if you want to look for naan recipes and get the information only from sites in India, the search would benaan recipes site:.in
- Following a hyphen-directly with a word is another Google Search operator, and this one tells Google to **exclude** whatever follows that hyphen from the search results.
- If you want to find results that use a very specific phrase, surround your search term in quotation marks to tell Google you only want to see results that use that exact phrase.
- **search for anything after:2020**
- **search for anything before:2020**
- **search for anything 2018..2020**
- **search for anything (A|B)C**
- **related:url**
- **cache:url**

| **Operator** | **How to Use It** | **Examples** |
|---|---|---|
| * (Asterisk) | Add the asterisk as a placeholder for an unknown word or fact | Find quotes that start with "Life is like a":Life is like a * |
| " (Quotation marks) | Look for an exact word or phrase by putting it in quotes | Find pages that talk about the bookOne Hundred Years of Solitude: "One Hundred Years of Solitude" |
| - (Hyphen) | Use a hyphen before a word or site to exclude it from your search results | Omit Wikipedia pages from search results:-site:wikipedia.org. Narrow results to the band R.E.M., not rapid eye movement:R.E.M. -sleep |
| .. (Two Periods) | Separate numbers with two periods without spaces to search for numbers within that range | Find phones that cost between $200 and $400:Android phone $200..$400. Find computer milestones that took place between 1950 and 2000:"computer milestones" 1950..2000 |
| allintitle: | Use allintext:[search phrase] to find pages with all of those words in the title of the page | Show pages that have both "Apple" and "notebook" in the title:allintitle:Apple notebook |
| allintext: | Use allintext:[search phrase] to find pages with all of those words in the body of the page | Show pages that mention Roth, IRA, and investments in the body:allintext:Roth IRA investments |
| allinurl: | Use allinurl:[search phrase] to find pages with all of those words in the URL | Show pages that have both "Microsoft" and "Surface" in the URL:allinurl:Microsoft Surface |
| AROUND(n) | Add AROUND(n) between two search terms to find pages where those terms are written on the page in close proximity. The number you choose in place ofnsets the maximum distance between the terms. This is useful for finding relationships between two search terms. | Find pages that mention Facebook and Microsoft in the same sentence or paragraph:Facebook AROUND(7) Microsoft |
| site: | Use site:[URL] to limit search results to a specific website | Find pages on Zapier that mention Trello:site:zapier.com trello |
| related: | Use related:[URL] to find sites similar to a specific website | Find websites similar to Zapier:related:zapier.com |
| **filetype:** | Use filetype:[suffix] to limit results to a certain file format, such as PDF or DOC. | Find keyboard shortcuts for Microsoft Office that are shared as PDF:filetype:pdf office keyboard shortcuts |
| intitle: | Use intitle:[search phrase] to search for pages that have at least one of your search words in the title | Show pages that have "Apple" or "notebook" or both in the title:intitle:Apple notebook |
| intext: | Use intext:[search phrase] to search for pages that have at least one of your search words in the body of the page | Show pages that mention Roth, IRA, and/or investments in the body:intext:Roth IRA investments |
| inurl: | Use inurl:[search phrase] to search for pages that have at least one of your search words in the URL | Show pages that mention Roth, IRA, and/or investments in the body:intext:Roth IRA investments |
| OR | Perform two search queries at the same time by separating your search terms with OR. This will find pages that have one of several words. | Search for pages that reference "Google Drive," "Dropbox," or "OneDrive":"Google Drive" OR Dropbox OR OneDrive |

## github

### t - Fuzzy file finder

Press `t` in any repository to access it and start typing the name of the file you want to find.

https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly

## Gmail

| What you can search by                                                                                                                                                          | Search operator & example                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Specify the sender                                                                                                                                                              | from:Example:from:amy                                                                                                                                          |
| Specify a recipient                                                                                                                                                             | to:Example:to:david                                                                                                                                            |
| Specify a recipient who received a copy                                                                                                                                         | cc:bcc:Example:cc:david                                                                                                                                        |
| Words in the subject line                                                                                                                                                       | subject:Example:subject:dinner                                                                                                                                 |
| Messages that match multiple terms                                                                                                                                              | `OR or { }` Example:from:amy OR from:david Example: `{from:amy from:david}`                                                                                    |
| Remove messages from your results                                                                                                                                               | -Example:dinner -movie                                                                                                                                         |
| Find messages with words near each other. Use the number to say how many words apart the words can be. Add quotes to find messages in which the word you put first stays first. | AROUND Example:holiday AROUND 10 vacation. Example:"secret AROUND 25 birthday"                                                                                 |
| Messages that have a certain label                                                                                                                                              | label: Example:label:friends                                                                                                                                   |
| Messages that have an attachment                                                                                                                                                | has:attachment. Example:has:attachment                                                                                                                         |
| Messages that have a Google Drive, Docs, Sheets, or Slides attachment or link                                                                                                   | has:drive, has:document, has:spreadsheet, has:presentation, Example:has:drive                                                                                  |
| Messages that have a YouTube video                                                                                                                                              | has:youtube, Example:has:youtube                                                                                                                               |
| Messages from a mailing list                                                                                                                                                    | list: Example: `list:info@example.com`                                                                                                                         |
| Attachments with a certain name or file type                                                                                                                                    | filename:Example:filename:pdf, Example:filename:homework.txt                                                                                                   |
| Search for an exact word or phrase                                                                                                                                              | " ", Example:"dinner and movie tonight"                                                                                                                        |
| Group multiple search terms together                                                                                                                                            | ( ), Example:subject:(dinner movie)                                                                                                                            |
| Messages in any folder, including Spam and Trash                                                                                                                                | in:anywhere, Example:in:anywhere movie                                                                                                                         |
| Search for messages that are marked asimportant                                                                                                                                 | is:important, label:important, Example:is:important                                                                                                            |
| Starred, snoozed, unread, or read messages                                                                                                                                      | is:starred, is:snoozed, is:unread, is:read, Example:is:read is:starred                                                                                         |
| Messages that include an icon of a certain color                                                                                                                                | has:yellow-star, has:blue-info, Example:has:purple-star                                                                                                        |
| Recipients in the cc or bcc field                                                                                                                                               | cc:, bcc:, Example:cc:david, Note:You can't find messages that you received on bcc.                                                                            |
| Search for messages sent during a certain time period                                                                                                                           | after:, before:, older:, newer:, Example:after:2004/04/16, Example:after:04/16/2004, Example:before:2004/18/04, Example:before:04/18/2004                      |
| Search for messages older or newer than a time period using d (day), m (month), and y (year)                                                                                    | older_than:, newer_than:, Example:newer_than:2d                                                                                                                |
| Chat messages                                                                                                                                                                   | is:chat, Example:is:chat movie                                                                                                                                 |
| Search by email for delivered messages                                                                                                                                          | deliveredto:, Example:deliveredto:username@gmail.com                                                                                                           |
| Messages in a certain category                                                                                                                                                  | category:primary, category:social, category:promotions, category:updates, category:forums, category:reservations, category:purchases, Example:category:updates |
| Messages larger than a certain size in bytes                                                                                                                                    | size:Example:size:1000000                                                                                                                                      |
| Messages larger or smaller than a certain size in bytes                                                                                                                         | larger: smaller:, Example:larger:10M                                                                                                                           |
| Results that match a word exactly                                                                                                                                               | +, Example:+unicorn                                                                                                                                            |
| Messages with a certain message-id header                                                                                                                                       | Rfc822msgid:, Example:rfc822msgid:200503292@example.com                                                                                                        |
| Messages that have or don't have a label                                                                                                                                        | has:userlabels, has:nouserlabels, Example:has:nouserlabels, Note:Labels are only added to a message, and not an entire conversation.                           |

Note: When using numbers as part of your query, a space or a dash (-) will separate a number while a dot (.) will be a decimal. For example,01.2047-100is considered 2 numbers: 01.2047 and 100.

https://support.google.com/mail/answer/7190?hl=en

## GSuite

- **When user is deleted**

If your school uses GSuite accounts, your IT Administrator will have the option to transfer ownership of ALL of your Google Drive files to somebody else when they delete your account.

You can manually transfer ownership of individual files by using Share, and selecting the share access for the new ownerto be Owner (rather than Edit / View / Comment).

## Windows

https://www.freecodecamp.org/news/keyboard-shortcuts-improve-productivity

## Discord

https://www.notboring.co/p/discord-imagine-a-place

https://mee6.xyz

https://idlerpg.xyz

## Intellij Shortcuts

Command + Option + L (For formatting line)

## Others

- [Zed - Code at the speed of thought](https://zed.dev/)
- [What are the Requirements for Adding a LinkedIn Company Page?](https://www.linkedin.com/pulse/what-requirements-adding-linkedin-company-page-loribeth-pierson/)
