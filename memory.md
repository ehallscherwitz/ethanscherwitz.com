# Memory

Working notes for this portfolio. Update as facts change.

## Goal

Ship a personal site in about two hours, in the Third Space Digital look, then drop in photos later.

## Sources

- Code: https://github.com/3rd-Space-Digital/3SD-Website (React + Vite, Inter, B/W)
- Live: https://3rdspacedigital.org and https://3sd-website.vercel.app
- Figma: https://www.figma.com/site/UJGGJnCkGtCeFxJlDKdmlK/Thirdspace-Website?node-id=0-1
  - This is a **Figma Site** (`/site/`), not `/design/`.
  - MCP `create_session` / `get_metadata` failed: no edit access on that file.
  - Tokens were pulled from 3SD CSS instead. If Ethan gets editor access or a Design-file URL, re-read Figma.

## Person

- Name: Ethan Scherwitz
- GitHub: ehallscherwitz — https://github.com/ehallscherwitz
- Email (git): ehallscherwitz@gmail.com
- School email (Figma): exs220040@utdallas.edu
- Bio on GitHub: UTD Computer Science Student
- This repo: https://github.com/ehallscherwitz/ethanscherwitz.com
- Do **not** reuse the 3SD logo. Mark here is a simple E monogram.

## Figma / MCP

- User Cursor MCP `Figma Desktop` (`http://127.0.0.1:3845/mcp`) is configured but was disconnected (desktop server not running).
- Official plugin `plugin-figma-figma` **is** connected as Ethan Scherwitz.
- Figma teams on the account: Third Space Website, tactile, Practice / Personal, sleptonvintage, plus a student team.

## Projects to feature (placeholders until assets arrive)

| Slug | Title | Notes |
|---|---|---|
| thirdspace | Third Space Digital | Site + Figma. https://3rdspacedigital.org |
| pulse | Pulse | Three.js. https://pulse-three-js.vercel.app |
| bake | Blender Bake Plugin | https://github.com/ehallscherwitz/blender-bake-plugin |
| slepton | Slept On Vintage | https://slept-on-vintage.vercel.app |
| tactile | tactile | Figma plugin |

## Stack for this site

Vite + React 18 + React Router. Same as 3SD so it can go to Vercel quickly. `vercel.json` rewrites all routes to `index.html`.

Scaffold is in place (Home / Work / About / Contact, 3SD header + drawer, placeholder image slots). Dev server: `npm run dev` → http://localhost:5173/

## Still needed from Ethan

- Portrait and project stills (4:5)
- LinkedIn / Instagram if they should be in the menu
- Exact one-line roles (designer vs engineer vs both)
- Custom domain DNS if not already on Vercel
- Whether the Figma Site should be the visual source of truth later
