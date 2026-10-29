# LITZ Tech Certificate Portal — starter project

This is a static website starter. One website can show different certificate records using a unique URL query parameter, for example:

- `https://YOUR-SITE/?id=LITZB2789`
- `https://YOUR-SITE/?id=LITZB2790`

## What's included

- `index.html` — certificate details page
- `styles.css` — responsive mobile-friendly design
- `data.js` — certificate records (add one entry per person)
- `app.js` — selects the record based on `?id=...`
- `qr-generator.html` — helper to create QR codes after the website is published

## Add a friend

1. Open `data.js`.
2. Copy an existing record object and paste it as a new entry.
3. Give the entry a unique ID, such as `LITZB2791`.
4. Update the friend's name, initials, institute, dates, certificate ID, student ID, and any permitted photo path.
5. Save the file and publish the updated site.

Photo instructions:
- Make a folder named `photos`.
- Add the person's photo there, e.g. `photos/friend.jpg`.
- Set `"photo": "photos/friend.jpg"` in that person's record.
- Only publish photos with the person's permission.

## Test locally

Open `index.html` through a local development server (recommended), then visit:
- `http://localhost:8000/?id=LITZB2789`
- `http://localhost:8000/?id=LITZB2790`

If Python is installed, run this from the project folder:
`python -m http.server 8000`

## Publish free with GitHub Pages

1. Create/sign in to GitHub and create a new public repository (for example `litz-certificate-portal`).
2. Upload all files and folders from this project.
3. In repository Settings → Pages, choose deployment from the `main` branch and root folder.
4. Wait for GitHub Pages to provide the public URL.
5. Open `qr-generator.html` on the published site, enter that URL and the certificate ID, and generate/download each QR code.

## Important limitations and privacy

- This starter stores records in a public JavaScript file. Anyone who can access the website can inspect the records. Do not put private information here.
- A QR code is a link, not proof that a certificate is genuine. Official verification requires the issuing organization to maintain/confirm the records.
- Do not represent these pages as officially verified by LITZ Tech unless the organization has authorized the portal and confirmed the data.
- The provided sample values were taken from the certificate image supplied in this conversation. Replace placeholders and check all IDs/dates before publishing.
- For stronger security, private records, controlled editing, and official verification, use a backend/database with access controls rather than a public static data file.
