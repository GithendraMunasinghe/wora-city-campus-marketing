# Wora City Campus Marketing Website

Mobile-first React + Vite starter for the Wora City Campus marketing team. Main page background: `#FAFAFA`; brand colors: navy `#000C2C`, orange `#FF790F`, off-white `#FAFAFA`.

## Run locally

1. Install Node.js (Node 20+ recommended).
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Production build

Run `npm run build`. The static website is generated in `dist/`.

## Routes

- `/en`, `/si`, `/ta` — Home
- `/en/degrees`, `/si/degrees`, `/ta/degrees` — Degree catalogue
- `/en/admissions`, `/si/admissions`, `/ta/admissions` — Admissions and enquiry

## Before publishing

- Replace the illustrative Unsplash photos with approved Wora City Campus images.
- Confirm official university partner names, current fees, admission requirements and intake information.
- Add the official admissions WhatsApp number. The enquiry form currently opens WhatsApp with a prefilled message but does not submit data to a backend.
- Review and proofread Sinhala and Tamil translations with fluent speakers.
- Confirm cPanel SPA routing configuration for the chosen deployment path.

## Content notes

The course catalogue and fee values are seeded from the supplied Wora City Campus booklet. The fee values are displayed only in the content data for later development; the current first release intentionally directs visitors to admissions to confirm current fee schedules before enrolling.
