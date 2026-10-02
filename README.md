# Portfolio (Next.js)

Single-page portfolio matching the static HTML design. Section copy lives in JSON under `content/`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

| File | Section |
|------|---------|
| `content/site.json` | Header nav, social links, resume |
| `content/hero.json` | Banner / metrics |
| `content/experience.json` | Experience |
| `content/projects.json` | Featured projects |
| `content/freelance.json` | Freelance work |
| `content/skills.json` | Skills |
| `content/about.json` | About me |
| `content/blogs.json` | Blog list |
| `content/contact.json` | Contact copy |

Edit these files to update the site. HTML snippets in experience/about bullets use `<strong>` tags.

## Remote JSON (later)

When you have a hosted URL for your JSON files, set in `.env.local`:

```env
CONTENT_BASE_URL=https://your-host.example.com/path/to/content
```

The app will load `{CONTENT_BASE_URL}/{section}.json` instead of local files (revalidated every 60s).

## Contact form email (Resend)

Submissions POST to `/api/contact` and Resend delivers mail to your inbox.

1. Create an account at [resend.com](https://resend.com) (use the same email as `CONTACT_TO_EMAIL` if you have no custom domain yet).
2. Copy [`.env.example`](.env.example) to `.env.local` and set `RESEND_API_KEY`.
3. For local dev, keep `RESEND_FROM_EMAIL=onboarding@resend.dev` until you verify your own domain in Resend.

**Vercel:** Settings → Environment Variables → add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `RESEND_FROM_EMAIL`, then redeploy.

You cannot use `*.vercel.app` as a Resend sending domain; use `onboarding@resend.dev` for testing or verify a domain you own.
