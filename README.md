# Elora's PMU — Lip Blushing Landing Page

**Live Demo:** `[your-vercel-url]`  
**GitHub Repo:** `[your-github-url]`

---

## Approach

Built a mobile-first React landing page mirroring Elora's PMU's luxury Korean aesthetic — dark rose/cream palette with Playfair Display typography. Conversion is maximised via a sticky 3-button CTA bar (WhatsApp / Call / Book), a lead form that pre-fills a WhatsApp message on submit, and a Local Business schema markup for Delhi-specific SEO. All sections (Hero, Before/After, Benefits, Procedure, Pricing, Testimonials, Lead Form) flow in a single scrollable page optimised for mobile with `clamp()` typography and CSS-in-JS.

---

## Tech Stack

- **Framework:** React (Vite) — single component, zero dependencies beyond React
- **Styling:** CSS
- **Fonts:** Playfair Display + DM Sans via Google Fonts
- **Deploy:** Vercel

---

## Setup

```bash
# 1. Create Vite React project
npm create vite@latest eloras-lip-blushing -- --template react
cd eloras-lip-blushing

# 2. Replace src/App.jsx with LipBlushingLanding.jsx content

# 3. Run locally
npm install
npm run dev

# 4. Deploy to Vercel
npx vercel --prod
```

---

## SEO Checklist

- [x] `<h1>` — "Lip Blushing in Delhi" (in Hero)
- [x] `<h2>` tags — Before/After, Benefits, Procedure, Pricing, Testimonials, Book
- [x] Meta title: `Lip Blushing in Delhi | Elora's PMU & Korean Esthetics`
- [x] Meta description: 155 chars, keyword-rich
- [x] Schema markup: `LocalBusiness` with address, priceRange, openingHours, makesOffer
- [x] Footer text: "Lip Blushing in Delhi" keyword reinforcement

---

## Conversion Features

| Feature    | Implementation                                      |
| ---------- | --------------------------------------------------- |
| Sticky CTA | Fixed bottom bar — WhatsApp / Call / Book Now       |
| WhatsApp   | Pre-filled message with name + shade from lead form |
| Lead Form  | Name + Phone + Shade → opens WhatsApp chat          |
| Pricing    | "Starting from" format, most-popular highlighted    |

---
