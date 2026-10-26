# AZKIS Cosmopolitan — Next.js website

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

- **All text/data:** `lib/data.js` (contacts, nav, services, process, projects, industries, products, social links).
- **Styling:** `app/globals.css` (colour tokens at the top: navy + gold).
- **Font:** Plus Jakarta Sans via `next/font/google` (needs internet on first build).

## Photos (drop into `public/images/`; a navy placeholder shows until they exist)

- `hero.jpg` — home hero background (right side, wide, about 1600x600)
- `approach.jpg` — "One-Window Project Solution" photo
- `why.jpg` — faint background of the "Why AZKIS" band
- `about-card.jpg` — "About AZKIS" photo
- `services/` — `power, data, voice, security, civil, interior, energy, turnkey` (.jpg)
- `projects/` — `bank, office, commercial, industrial` (.jpg) — placeholder project types, edit in `lib/data.js`
- `about.jpg, products.jpg, services.jpg, contact.jpg` — optional inner-page hero backgrounds

Other: add social URLs to `social` in `lib/data.js` (empty ones are hidden); set `company.whatsapp` for the WhatsApp button;
the contact form opens the visitor's email app (swap in an API route for server-side sending).
# azkiscosmopolitan
