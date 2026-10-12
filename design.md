# Design system — ethanscherwitz.com

Visual language is taken from the [Third Space Digital](https://3rdspacedigital.org) site ([3SD-Website](https://github.com/3rd-Space-Digital/3SD-Website)). Black and white only. No accent colors.

The Figma file is a Figma Site (`/site/UJGGJnCkGtCeFxJlDKdmlK`), not a Design file, so tokens below come from the live CSS rather than MCP.

## Color

| Token | Value | Use |
|---|---|---|
| `--color-black` | `#000000` | Text, borders, menu background, icons |
| `--color-white` | `#ffffff` | Page background, inverted text |
| `--color-ink` | `#000000` | Default body / titles |
| `--color-muted` | `#333333` | Secondary body (About) |
| `--color-subtle` | `#666666` | Card descriptions |
| `--color-glass` | `rgba(255, 255, 255, 0.65)` | Header after scroll |
| `--color-overlay` | `rgba(0, 0, 0, 0.5)` | Menu backdrop |

Hover on interactive text/icons: **opacity 0.7**, not a color change.

Borders: `1px solid #000`. Section rules: `3px` black bar. No border radius on cards or images.

## Typeface

**Inter** only. Fallback: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif`.

Weights in use: **400, 500, 600, 700, 900**. Italic is reserved for named sections / captions.

Load:

```
https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,700;1,900&display=swap
```

## Type scale

| Role | Size | Weight | Line-height | Tracking | Notes |
|---|---|---|---|---|---|
| Display / page title (`h1`) | `96px` desktop; `48px` ≤768px; `clamp(28px, 9vw, 96px)` on home | 900 | 1.0–1.1 | `-0.03em` to `-0.04em` | “Who I Am”, “Work”, article titles |
| Section title (`h2`) | `40px` desktop; `28px` ≤768px | 400 (dividers) or 700 (article subheads) | 1.1 | `-1.2px` on subheads | Sits on a 3px black rule |
| Menu section | `clamp(24px, 4vw, 36px)` | 600 | 1 | `0.5px` | White on black panel |
| Card title | `24px`; `22px` ≤768px | 900 | 1.2 | 0 | 2-line clamp |
| Header brand | `24px` | 900 | 1 | `-0.02em` | Centered in header |
| Body large (home) | `clamp(20px, 1.35vw, 24px)`; `16px` ≤320px | 500, **700** on lead grafs | 1.6 | 0 | Last graf can be italic |
| Body (article / about) | `18px` article; `clamp(16px, 2.5vw, 20px)` about | 500 article / 400 about | 1.6 | 0 | About uses `--color-muted` |
| Meta / caption | `24px` | 600 meta; 500 italic caption | 1.1 / 1.6 | `-0.72px` meta | Dates, authors, photo captions |
| Card description | `14px` | 400 | 1.4 | 0 | `--color-subtle`, 2-line clamp |
| Nav / back link | `14px` | 500 | 1 | 0 | Underline current page only |
| Header uppercase label | `13px` | 500 | 1 | `0.12em` | Uppercase |
| Menu child link | `clamp(14px, 2vw, 18px)` | 400 | 1 | 0 | White on black |

Default body: weight **400**, line-height **1.5**.

## Header

Fixed, full width, **65px** tall (`60px` ≤480px). Horizontal padding **31px** (16px tablet, 10px mobile). `z-index: 100`.

Three columns:

1. **Left** — `ES` mark, Inter 900 / 20px, links home
2. **Center** — brand name, Inter 900 / 24px, “Ethan Scherwitz”
3. **Right** — hamburger (23px), opens the menu

States:

- **At top:** transparent background, black mark + name
- **Scrolled:** frosted glass (`--color-glass`, `blur(12px)`), `box-shadow: 0 1px 0 0 #000`
- **Scroll down:** translateY(-100%)
- **Scroll up:** show again
- Top threshold: **24px**

No logo invert on this site (white pages only). Hover: opacity 0.7.

## Menu

Right drawer, **375px**, black panel, white type. Overlay `rgba(0,0,0,0.5)`. Slide in/out 0.3s. Close on overlay click and Escape.

Rows: 20px vertical padding, **1px solid white** dividers. Close X top-right, 28px.

Links: Work, About, Contact, GitHub. Footer can hold the mark repeated, inverted white.

## Layout

- Header offset for inner pages: **120px** top padding (60px / 50px on small screens)
- Page horizontal padding: **4%** on index pages; home intro **40px 200px** desktop, **30px** tablet, **20px** phone
- Home intro: two columns `minmax(260px, 0.95fr) minmax(360px, 1.05fr)`, stacked at 768px
- Cards: CSS grid `repeat(auto-fill, minmax(380px, 1fr))`, gap 20px; `minmax(320px, 1fr)` tablet
- Card image: **4 / 5** aspect, black 1px border, no radius
- Card hover: `translateY(-5px)` + `box-shadow: 0 10px 30px rgba(0,0,0,0.15)`
- Max content width on about/contact: **640px**
- Min viewport: **320px**

## Motion

- Header show/hide: `transform 0.3s ease-out`
- Glass fade: `0.35s ease-out`
- Menu: `0.3s ease`
- Opacity hovers: `0.2s`
- Home text fade-in: `0.4s ease`, staggered (0.1s / 0.6s / 1.2s)

## Images

Drop files into `public/images/` and point `src/data/projects.js` (and the home portrait) at them. Until then, every slot is a black-bordered placeholder with the label **IMAGE**.

Suggested slots:

- `public/images/portrait.jpg` — home / about
- `public/images/work/{slug}.jpg` — one 4:5 still per project
