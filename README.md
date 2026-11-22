# Relais: retiree landing page

The landing page for the **Relais** retiree test (HEC Paris, Design & Product Development, Group A1).
It's plain HTML, CSS and JavaScript, with no build step.

- `index.html`: the page, with the English copy
- `styles.css`: the styling (large type, high contrast, big buttons for older readers)
- `script.js`: the EN/FR toggle, the French copy and the sign-up form
- `favicon.svg`: the tab icon

## Deploy on Vercel
1. On vercel.com, go to **Add New → Project** and import this GitHub repo.
2. Framework preset: **Other**. Leave the build command empty. The output directory is the root.
3. Click Deploy. Every later push to `main` redeploys automatically.

## Language
The page opens in English by default. The **Français** button in the header switches to French and remembers the choice.
To send a participant a link that opens directly in French, add `?lang=fr` to the URL, e.g. `https://your-site.vercel.app/?lang=fr`.

To change any English wording, edit `index.html`. To change French wording, edit the `FR` block in `script.js`.

## Sign-ups (optional)
By default the form runs in demo mode: it checks the fields and shows a thank-you screen, but stores nothing.
To receive the entries by email:
1. Create a free form at formspree.io and copy its URL (`https://formspree.io/f/...`).
2. Paste it into `FORM_ENDPOINT` at the top of `script.js`, then commit.

## Click counts (optional)
In Vercel, open **Analytics** and enable Web Analytics. Then add this line before `</body>` in `index.html`:
`<script defer src="/_vercel/insights/script.js"></script>`
Page views are free. On a paid Vercel plan, the buttons also send custom events (`cta_hero`, `cta_header`, `cta_faq`, `signup_en`, `signup_fr`, `language_fr`).
