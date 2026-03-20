## Meléndez López & Robles LLC – Website

Next.js App Router + Tailwind CSS website for the law firm **Meléndez López & Robles LLC**.

### Tech stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Email**: Nodemailer via `/api/contact` route

### Getting started

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

Copy `.env.example` to `.env.local` and fill in your SMTP provider details:

```bash
cp .env.example .env.local
```

You will need:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `CONTACT_RECIPIENT` – where contact form emails should be delivered

3. Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Pages

- `/` – Home (hero, overview, key practice areas)
- `/about` – Firm and attorney overview
- `/practice-areas` – Practice areas in more detail
- `/contact` – Contact details, map, and contact form (emails via `/api/contact`)

### Customization

- Global styles and theme colors are in `app/globals.css` and `tailwind.config.ts`.
- Navigation and layout components live under `components/`.

