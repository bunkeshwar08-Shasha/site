# Bunkeshwar Retreats — website

React + Vite. Four pages, three forms, all mailing to **bunkeshwar08@gmail.com**.

```
/            Home — the game, five threads, four days, pricing, how to get in
/apply       Guest application — questionnaire + video intro link
/volunteer   Crew / volunteer application
/sponsors    Sponsorship & partnership enquiry
```

---

## 1. Turning the forms on

The forms use **FormSubmit** — free, unlimited, no account, **no API key**.

There is exactly one step, and you do it once:

1. Run the site (see below) or open it once it's live
2. Fill in any form and hit submit
3. FormSubmit emails **bunkeshwar08@gmail.com** asking you to confirm — click the link

Done. Every submission from then on lands in that inbox, formatted as a tidy table,
with a subject line telling you which form it came from:

- `New guest application — Bunkeshwar`
- `New volunteer application — Bunkeshwar`
- `New sponsor enquiry — Bunkeshwar`

**Optional, recommended once you're live:** after activating, FormSubmit gives you a
random string you can use instead of your raw email address, so the address isn't sitting
in your page source for scrapers. Paste it into `FORM_ENDPOINT_ID` in `src/config.js`.

**Set up a Gmail filter** too: filter on the subject containing "Bunkeshwar" and apply a
label, so applications stay out of your main inbox.

### If you'd rather use Web3Forms

Their free plan does include an access key — 250 submissions/month. If you'd prefer it:
get a key at web3forms.com, then in `src/config.js` set `FORM_PROVIDER = "web3forms"`
and paste the key into `WEB3FORMS_KEY`. Nothing else changes.

---

## 2. Run it locally

You need Node 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

To check the production build:

```bash
npm run build
npm run preview
```

---

## 3. Put it live (free)

### Vercel — easiest

1. Push this folder to a GitHub repo
2. Go to **vercel.com** → *Add New Project* → import the repo
3. Vercel detects Vite automatically. Click **Deploy**
4. Live in about a minute at `your-project.vercel.app`

`vercel.json` is already included so `/apply`, `/volunteer` and `/sponsors` work on a
direct visit or refresh.

### Netlify — drag and drop

1. Run `npm run build`
2. Go to **app.netlify.com/drop** and drag the `dist` folder onto the page

`public/_redirects` is already included for the same routing reason.

### Your own domain

Buy the domain, then in Vercel: *Settings → Domains → Add*, and follow the DNS
instructions it gives you. Once it's live, update these three places:

- `index.html` — the `og:image` URL, to an absolute one (`https://yourdomain.com/og.png`)
- Your Instagram bio link and WhatsApp Business profile
- The social assets that currently say "Apply on the website"

---

## 4. Editing content

Almost everything lives in plain arrays and JSX text:

| What | Where |
| --- | --- |
| Phone, email, handles, price, location | `src/config.js` |
| The five threads, the four days, all home copy | `src/pages/Home.jsx` |
| Application questions | `src/pages/Apply.jsx` |
| Volunteer roles list | `src/pages/Volunteer.jsx` (`ROLES`) |
| Sponsorship options & budget bands | `src/pages/Sponsors.jsx` (`INTERESTS`) |
| Colours, type, spacing | `src/styles.css` (theme tokens at the top) |
| Light / dark palettes | `src/styles.css` — `[data-theme="light"]` and `[data-theme="dark"]` |

Changing the price, the WhatsApp number or the tagline is a one-line edit in
`src/config.js` and it updates everywhere.

---

## 5. Themes — light, dark and yellow

Three colour themes, switched from the control in the top-right of the nav.
The site **loads light (white) by default**.

| Theme | Background | Panels | Buttons | Logo |
| --- | --- | --- | --- | --- |
| **Light** | White | Cream `#F6F0DF` | Yellow on black text | `logo-light.png` |
| **Dark** | Black `#0B0A08` | `#131110` | Yellow on black text | `logo-dark.png` |
| **Yellow** | Yellow `#FFD100` | `#F2C400` | Black with yellow text | `logo-yellow.png` |

Notes:

- The logo swaps automatically with the theme — all three of your variants are in `public/`.
- A visitor's choice is saved to `localStorage` and restored on their next visit.
- A small inline script in `index.html` applies the saved theme *before* React mounts,
  so there's no flash of the wrong colours, and it updates the mobile browser bar colour too.
- The light theme has a flat white hero (no glow); dark and yellow keep a soft radial
  behind the headline. That's the `--glow` token — set it to a transparent colour to
  switch a glow off.
- In yellow mode a few surfaces deliberately invert — the buttons and the price panel go
  black with yellow text, and the DAY 0 row goes white — because yellow-on-yellow would
  disappear. Those are the `--btn-bg`, `--price-bg` and `--zero-bg` tokens.

**To add a fourth theme** or change a palette, edit the `[data-theme="..."]` blocks at the
top of `src/styles.css` and add the name to the `THEMES` array in
`src/components/ThemeToggle.jsx`. Nothing else needs to change — every component reads
these tokens rather than hard-coded colours.

**To change which theme loads first**, edit `DEFAULT` in `ThemeToggle.jsx` and the
fallback in the inline script in `index.html`.

---

## 6. Notes on how it's built

- **Fonts are self-hosted** (`public/fonts`) — Anton and Oswald, the same faces as the
  print and social assets. No Google Fonts request, so the site works offline, loads
  instantly and makes no third-party calls.
- **Icons are inline SVG** (`src/components/Icon.jsx`) — official brand marks that inherit
  the current text colour and stay sharp at any size.
- **Every form has a honeypot** field bots fill and humans never see, so spam gets
  dropped before it reaches your inbox.
- **The video is a link, not an upload.** Applicants paste a Google Drive / unlisted
  YouTube / Dropbox URL. No storage costs, no file-size limits, works on any phone, and
  the link arrives in the email ready to click.
- **No tracking, no cookies, no analytics.** Add them if you want them.

---

## 7. Adding Case File 002 later

The site is built for one format at a time, but the copy is deliberately split:
brand-level language (vision, the engine, how you get in) is separate from
format-level language (the Mole, the five threads, the four days). When 002 arrives,
duplicate the relevant sections in `Home.jsx` and add a batch selector to the
"Which dates are you after?" field in `Apply.jsx`.
