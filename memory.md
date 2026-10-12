# Memory

Working notes for this portfolio. Update as facts change.

## Goal

Apply to UTD **Game Lab** (class that ships a game to Steam).

- **Primary track:** Tooling, pipelines & version control
- **Secondary track:** UI/UX

Thesis: a lot of applicants have built games. Ethan stands out by showing he writes **custom tools and pipelines** that make teams move faster — Blender bake, Figma plugin, one-button product/Pinterest publish, CMS/backends — plus UI/UX proof from 3SD, Org Portal, Indigo, HackLab Best Design.

Do **not** lead with “I make games.” Lead with **I make the tools other people ship with.**

## Person

- Name: Ethan Scherwitz
- GitHub: https://github.com/ehallscherwitz
- LinkedIn: https://www.linkedin.com/in/ethan-scherwitz333
- Email: ehallscherwitz@gmail.com
- School: UTD Computer Science (`exs220040@utdallas.edu`)
- LinkedIn headline: SWE @ JPMC | CS @ UTD — **ask before putting JPMC on this site**
- This repo: https://github.com/ehallscherwitz/ethanscherwitz.com
- Mark: `ES` (do not use the 3SD logo)

## Visual system

- Look: Third Space Digital (Inter, black/white, fixed header, right drawer). See `design.md`.
- Figma Site (no MCP edit access): https://www.figma.com/site/UJGGJnCkGtCeFxJlDKdmlK/Thirdspace-Website?node-id=0-1
- Live 3SD: https://3rdspacedigital.org
- 3SD repo: https://github.com/3rd-Space-Digital/3SD-Website

## Site extras (requested)

- Navbar: LinkedIn + GitHub (plus existing menu)
- Footer: **Download resume** → `public/Ethan-Scherwitz-Resume.pdf` (file not in yet)

## Project order (tools first)

### 1. Blender Lighting Bake Plugin — PRIMARY TOOL STORY

**Frame:** Custom pipeline tool. Similar add-ons exist but they are expensive and not tailored. Wrote one that matches this workflow: bake scene lighting for high-perf browser/Three.js and for a game path, with storage saved by packing onto one UV map.

**Why it exists**
- Auto-bake lighting so a scene can render fast **in a browser**
- Same baked assets intended for a **game**
- Test: perf gain from baked lighting + storage saved by baking to **one UV map**

**What it does (from plugin UI / code)**
- Sidebar panel: `Lighting Bake` in the 3D View
- Mesh checklist (include / all / none / refresh)
- Mode: **Individual** (each mesh own UV + image) or **One map** (checked meshes share one UV + one image, group name)
- Resolution: 512 / 1024 / 2048 / 4096 / 8192
- Bake margin (px)
- Unwrap: Smart UV Project (66°, 0.01 pack) / Lightmap Pack / Keep existing
- Shader: leave bake image unconnected, or preview through a new Principled BSDF
- Writes PNGs to `bakedLightingTextures` (or a chosen folder)
- New UV maps named `{name}LightingBaked` or `{groupName}LightingBaked`

**Links I already have**
- Repo: https://github.com/ehallscherwitz/blender-bake-plugin
- Three.js host: https://pulse-three-js.vercel.app — **confirmed.** Pulse loads `pulsethreeJSExportBaked.gltf` + baked PNGs (walls, floor, ceramics, window, edges) as `MeshBasicMaterial` (unlit). Pulse is the bake pipeline’s browser proof, not a separate art piece. Folded into the Lighting Bake case study; not its own Work card.

**Still need from Ethan**
- [ ] Screenshot: Blender scene **before** bake
- [ ] Screenshot: scene **after** bake (plugin result)
- [ ] Screenshot: **plugin UI** (the Lighting Bake panel)
- [x] Confirm Pulse **is** the hosted Three.js bake demo (yes — baked GLTF viewer)
- [ ] Optional: 1–2 sentences on measured perf/storage if you have numbers

---

### 2. tactile (Figma plugin) — CUSTOM CREATIVE TOOL

**Frame:** Another custom tool/plugin for a creative workflow (gesture → live Figma). UI/UX secondary, tooling primary.

**What I have (LinkedIn + Devpost)**
- 24-hour Figma Makathon with Noor Haider, Christopher Tran, Prabhas Gade
- LinkedIn: https://www.linkedin.com/posts/ethan-scherwitz333_figma-figmamakeathon-react-activity-7436546952365903872-_O-S
- Devpost: https://devpost.com/software/tactile-tyoilq
- Repo: https://github.com/ehallscherwitz/tactile
- Tracks hands in real time, translates gestures into a live Figma workflow
- Pull from Figma → editable frontend frame (type/color/structure) → Push back as a derived Figma frame
- Plugin + React frontend + Python backend (gestures, cards, websocket plugin sync)

**Still need from Ethan**
- [ ] **Tactile video file** (you said “embedded tactile video download” — send the mp4/webm)
- [ ] Your role vs teammates (what you personally built)
- [ ] Confirm I should use the LinkedIn/Devpost copy as the description (yes unless you rewrite it)

---

### 3. Third Space Digital — LEADERSHIP + BACKEND + CREATIVE SITE

**Frame:** Stood up the whole digital platform (not just a pretty homepage). Leadership + sole backend + custom editorial experiences. UI/UX secondary.

**What I have**
- Site: https://3rdspacedigital.org
- Repo: https://github.com/3rd-Space-Digital/3SD-Website
- LinkedIn title: Web Developer, founding web-dev team
- Built in ~3 months in React with Prabhas Gade and Julia Marie Bacud
- Events, photo archives, issues/articles
- LinkedIn: designed/built SQL database and content storage/delivery; launched in <3 months
- You said: leadership position, **backend single-handedly**, creative sites you built

**Still need from Ethan**
- [ ] Homepage screenshot
- [ ] Exact title to print (Web Developer? Lead? Officer?)
- [ ] Confirm “backend single-handedly” (Supabase, auth, events, issues, image pipeline — I can describe from the repo if you say yes)
- [ ] Which **creative pages/articles** to highlight (list URLs or names: e.g. specific issues)
- [ ] Optional: 1 leadership sentence you want quoted (hiring, directing other devs, owning the stack, etc.)

---

### 4. Slept On Vintage — BUSINESS SITE + PAYMENTS + PUBLISH PIPELINE

**Frame:** Built the whole shop for my own business. Not a template. Payment APIs + a **custom one-button pipeline**: upload an item once → site **and** Pinterest.

**What I have**
- Live: https://sleptonvintage.com
- Repo: https://github.com/ehallscherwitz/SleptOnVintage.com
- React + Vite + Supabase + Square checkout + Vercel
- Admin console, Pinterest catalog CSV / Rich Pins in the build
- **Confirmed live Pinterest API:** `pinterestSync.ts` upserts/deletes product rows with `PINTEREST_ACCESS_TOKEN` (fire-and-forget after admin/checkout). Plus build-time CSV. One-button claim is accurate.

**Still need from Ethan**
- [ ] Screenshot of the storefront
- [ ] Screenshot of the **admin one-button upload** (this is the tools shot)
- [x] Pinterest: live catalog upsert API + CSV (not CSV-only)
- [ ] Optional: Square vs other processors — README says Square

---

### 5. ACM Org Portal — LEADERSHIP + MEMBER/ADMIN UX

**Frame:** Officer on a member-facing + admin-facing app so students can find clubs and officers can run them.

**What I have**
- Title: Org Portal Officer (ACM UTD officers page) / ACM Development Officer (LinkedIn, May 2025–present)
- LinkedIn: students discover/join clubs; leaders manage members; DB design, image storage, QR event check-ins, design → code
- Product: https://www.org-portal.com/landing
- ACM: https://www.acmutd.co/officers

**Still need from Ethan**
- [ ] 2–3 screenshots (member find-clubs + admin manage)
- [ ] Confirm live URL to link (landing vs app)
- [ ] One sentence on what **you** owned vs the rest of the officer team
- [ ] Title to print: “Org Portal Officer” vs “ACM Development Officer”

---

### 6. Indigo Magazine — WEB DEV + AUDIOVISUAL GAMEPLAY ON EDITORIAL

**Frame:** Web developer. Took lore from the writer and added an audiovisual **gameplay** layer. Secondary UI/UX + interactive systems (relevant to games).

**What I have**
- Web Developer, Indigo Magazine, Sep 2025–present
- Interactive React experience; architecture contributions
- LinkedIn post on Issue 11 “Keyboards” / Serial (Cereal) — AI + human creativity
- Article teaser: https://www.linkedin.com/posts/ethan-scherwitz333_it-was-such-a-great-and-unique-experience-activity-7428118764115841024-TfUZ

**Still need from Ethan**
- [ ] **Demo video** (mp4/webm)
- [ ] Direct URL to the interactive piece (not the LinkedIn shortlink)
- [ ] 3–5 sentences on the **gameplay** (what the player does, how it extends the writer’s lore). LinkedIn reads as interactive article; you asked to talk about audiovisual gameplay — I need your words so I don’t undersell it
- [ ] Your exact credit (web dev / interactive / both)

---

### 7. HackLab — TEAM + RESUME PIPELINE FROM LINKEDIN

**Frame:** Team member, backend. Built a **resume generation feature** wired to LinkedIn (and GitHub). Tooling/pipeline, not “we made a social app.”

**What I have**
- ACM Projects Spring 2025; team won **1st place + Best Design**
- Teammates: Owen Isenhart, Luke Sultzer, Aastha Sheth; PM Ethan Varghese; industry mentor Samuel Stegall
- Ethan: backend — GitHub + LinkedIn integration, CRUD API, PostgreSQL, Gemini AI, AWS deploy
- Auto Resume Builder: LinkedIn + GitHub → professional resume (PDF/LaTeX per teammate post)
- Also: GitHub OAuth, auto repo create, commit history → resume insights
- Repo I see: https://github.com/ehallscherwitz/hacklab-swagger (Swagger/docs, not the full app)

**Still need from Ethan**
- [ ] Live demo or GitHub of the **actual app** (if public)
- [ ] Screenshot of the resume builder output
- [ ] Confirm you want “1st place / Best Design” on the card
- [ ] Any extra sentence on the LinkedIn → resume pipeline you want quoted

---

## Homepage copy direction (until you rewrite)

Lead: CS student who builds **tools and pipelines** for 3D, design, and production — applying to Game Lab tooling first, UI/UX second.

## Asset drop convention

Put files here (any of png/jpg/webp/mp4/webm/pdf):

```
public/Ethan-Scherwitz-Resume.pdf
public/images/portrait.jpg
public/images/work/bake-before.jpg
public/images/work/bake-after.jpg
public/images/work/bake-ui.jpg
public/images/work/tactile.jpg          (poster still)
public/videos/tactile.mp4
public/images/work/thirdspace.jpg       (homepage SS)
public/images/work/slepton.jpg
public/images/work/slepton-admin.jpg
public/images/work/orgportal-member.jpg
public/images/work/orgportal-admin.jpg
public/images/work/indigo.jpg
public/videos/indigo.mp4
public/images/work/hacklab-resume.jpg
```

You can also drop files in chat. I will place them.

## Feed me next (highest leverage first)

1. Resume PDF
2. Blender: before / after / UI screenshots + confirm Three.js URL
3. Tactile video + your role
4. 3SD homepage SS + title/leadership sentence + which creative pages
5. SleptOn admin one-button shot + Pinterest: API vs CSV
6. Org Portal screenshots + what you owned
7. Indigo video + live URL + gameplay paragraph
8. HackLab resume-builder screenshot + app link
9. Yes/no: mention JPMC on the site

## Stack for this site

Vite + React 18 + React Router. `npm run dev` → http://localhost:5173/
