---
slug: /privacy-policy
title: Privacy Policy
description: Privacy policy for Deepak Sood's personal portfolio alerts Google Apps Script app, which reads one private Google Sheet and emails the owner.
created: 2026-11-05
updated: 2026-11-05
---

This policy covers **Portfolio Alerts**, a personal Google Apps Script project written and used by Deepak Sood (the "owner"). It is not a public product. The owner is its only user.

## What the app does

- Reads one private Google Sheet owned by the owner (portfolio holdings, prices and net worth snapshots).
- Checks price alert rules on a schedule and appends log rows to that same sheet.
- Sends alert and summary emails from the owner's Google account to the owner's own address.
- Calls the Google Gemini API with figures computed from the sheet to write a short daily commentary.

## Google user data

The app requests these Google permissions, all granted by the owner to their own project:

| Permission | Why |
| --- | --- |
| Google Sheets (`spreadsheets`) | Read and update the portfolio sheet |
| Send email (`script.send_mail`, `gmail.send`) | Email alerts to the owner |
| External requests (`script.external_request`) | Fetch market prices and call the Gemini API |
| Triggers (`script.scriptapp`) | Run checks on a schedule |
| Sheet UI (`script.container.ui`) | Add menu items to the sheet |

The app does not read the owner's inbox, contacts, calendar or Drive files. It does not request Gmail read access.

## Collection, sharing and storage

- **No collection from other people.** The app has no sign-up, no other users and no analytics.
- **No sale or sharing.** Data stays in the owner's Google account. The only outside transfer is the summary figures sent to the Gemini API to generate commentary, which is governed by Google's own terms for that API.
- **Storage.** Data lives in the owner's Google Sheet and Apps Script project. Nothing is copied to any other server run by the owner.
- **Limited use.** Google user data is used only to provide the features above, in line with the Google API Services User Data Policy, including its Limited Use requirements.

## Retention and deletion

The owner can delete any log rows or the whole sheet at any time. Revoking the app at [Google Account permissions](https://myaccount.google.com/permissions) removes its access immediately.

## Contact

Questions about this policy: open an issue at [github.com/deepaksood619](https://github.com/deepaksood619) or use the contact details on the [about page](about-deepak-sood/readme.md).

This policy may be updated, and the `updated` date above shows the latest change.
