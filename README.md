# Audrey's personal website

Built with [Astro](https://astro.build). Pink, scrapbooky, and full of cats.

## Run it on your Mac

You need Node.js 22.13 or newer (you already have it from Mingming).

```bash
cd ~/Documents/Projects/personal-website
npm install      # first time only: downloads Astro into node_modules/
npm run dev      # starts a local preview at http://localhost:4321
```

Leave `npm run dev` running while you edit. The page in your browser updates every time you save a file.
Press `Ctrl + C` in Terminal to stop it.

## Where things live

```
personal-website/
├── src/
│   ├── data/          ← YOUR CONTENT. Start here.
│   │   ├── site.ts         name, email, links, nav, the scrolling band
│   │   ├── resume.ts       work experience + education (also feeds the journey)
│   │   ├── journey.ts      chapters + stops on the journey page
│   │   ├── projects.ts     project cards
│   │   ├── research.ts     research papers
│   │   └── credentials.ts  certificates, awards, languages
│   ├── pages/         ← one file = one page (the file path is the URL)
│   │   ├── index.astro         /            home
│   │   ├── journey.astro       /journey
│   │   ├── work.astro          /work
│   │   ├── education.astro     /education
│   │   ├── projects/index.astro      /projects
│   │   ├── projects/mingming.astro   /projects/mingming
│   │   ├── research.astro      /research
│   │   ├── credentials.astro   /credentials
│   │   └── cozy.astro          /cozy        the back room
│   ├── components/    ← reusable pieces
│   │   ├── Cat.astro       the chibi cats (add your cats' coats here)
│   │   └── Doodle.astro    all the little drawings (trophy, boat, laptop…)
│   ├── layouts/
│   │   └── Base.astro      wraps every page: nav, footer, shared animations
│   └── styles/
│       └── global.css      colors, fonts, reusable styles (.sticker, .tape, .chip…)
├── public/            ← files served as-is (favicon, and later your photos)
├── mockups/           ← the original homepage mockup, for reference
└── credentials/       ← your certificate PDFs (private: not uploaded to GitHub)
```

## Easy first edits

- **Fill a placeholder:** search the project for `[` to find every placeholder in square brackets.
- **Add your email:** `src/data/site.ts` → `email: 'you@example.com'`
- **Update a job or school:** edit it once in `src/data/resume.ts`. The Work, Education, and Journey pages all update.
- **Add a journey stop:** copy one `{ ... }` block in `src/data/journey.ts` and change the text.
- **Reorder the tabs:** change the order in `nav` in `src/data/site.ts`. The "next up" links follow the same order.
- **Change a color:** the variables at the top of `src/styles/global.css`.
- **Add one of your cats:** add a line to `COATS` in `src/components/Cat.astro`, e.g. `mochi: { fur: '#e8d9c4' }`, then use `<Cat coat="mochi" />`.

## Concepts you'll see

- **`.astro` files** have two parts. The top, between `---` lines, is JavaScript that runs when the site is built
  (importing data, looping over lists). Below it is HTML, with `{curly braces}` to drop in values.
- **Components** are like functions for HTML: `<Doodle name="trophy" />` reuses one drawing everywhere.
- **Scoped styles:** a `<style>` inside a page only affects that page.
- **Data files:** keeping content in `src/data/` means you can update the site without touching the design.
- **Line boil:** the wobbly-line effect. Three SVG noise filters in `Base.astro` are swapped about 8 times a second.

## Later: putting it online

`npm run build` creates a `dist/` folder with the finished site. Cloudflare Pages or GitHub Pages can host it for free,
and rebuild automatically every time you push to GitHub.
