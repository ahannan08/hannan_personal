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
