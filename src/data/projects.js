export const socials = {
  github: 'https://github.com/ehallscherwitz',
  linkedin: 'https://www.linkedin.com/in/ethan-scherwitz333',
  email: 'mailto:ehallscherwitz@gmail.com',
  resume: '/Ethan-Scherwitz-Resume.pdf',
}

export const projects = [
  {
    slug: 'bake',
    title: 'Lighting Bake',
    tag: 'Blender',
    section: 'tools',
    card: 'Add-on that bakes lighting onto a new UV map so a scene can run in the browser without realtime lights.',
    role: 'Blender add-on',
    image: '/images/work/bake-after.png',
    live: 'https://pulse-three-js.vercel.app',
    liveLabel: 'In the browser',
    repo: 'https://github.com/ehallscherwitz/blender-bake-plugin',
    media: [
      { src: '/images/work/bake-before.jpg', label: 'BEFORE', wide: true },
      { src: '/images/work/bake-after.png', label: 'AFTER', wide: true },
      { src: '/images/work/bake-ui.png', label: 'INDIVIDUAL', contain: true },
      { src: '/images/work/bake-ui-group.png', label: 'ONE MAP', contain: true },
    ],
    body: [
      'I was lighting a scene I wanted to put on the web, and later into a game. Realtime GI in the browser is too expensive, so I baked the lighting into the textures. Paid bake add-ons exist. They cost a lot, and they are not my workflow.',
      'You check the meshes, pick a size, and bake. Each object can get its own map, or a group can share one — which also means fewer files to store. The add-on builds the UV, bakes, and writes PNGs into a folder.',
      'The baked scene is up in Three.js. No live lights. Just the textures.',
    ],
    options: [
      'Individual bake or one shared map',
      '512 to 8192',
      'Smart UV Project, Lightmap Pack, or keep the UVs you have',
      'Margin, preview in the shader or leave the image unconnected, output folder',
      'Checklist of meshes, then bake',
    ],
  },
  {
    slug: 'tactile',
    title: 'tactile',
    tag: 'Figma',
    section: 'tools',
    card: 'Figma plugin. Hands in, frames out.',
    role: 'Figma plugin · 24 hours',
    image: '/images/work/tactile.jpg',
    repo: 'https://github.com/ehallscherwitz/tactile',
    extra: 'https://devpost.com/software/tactile-tyoilq',
    extraLabel: 'Devpost',
    video: '/videos/tactile.mp4',
    media: [
      { src: '/images/work/tactile.jpg', label: 'TACTILE', wide: true },
      { src: '/images/work/tactile-plugin.png', label: 'PLUGIN', wide: true },
    ],
    body: [
      'Noor Haider, Christopher Tran, Prabhas Gade, and I made this in 24 hours for a Figma makathon. You design with your hands. The plugin watches the gestures and writes them into Figma.',
      'There is a Figma plugin, a small frontend, and a Python backend on a websocket. Pull the page out of Figma, change size or color or glass with a gesture, push a new frame back. If nothing is selected it makes a card for you.',
    ],
  },
  {
    slug: 'slepton',
    title: 'Slept On Vintage',
    tag: 'Shop',
    section: 'tools',
    card: 'Site for my shop. I list a piece once and it goes on the store and to Pinterest.',
    role: 'My shop',
    image: '/images/work/sov_thumbnail.png',
    live: 'https://sleptonvintage.com',
    repo: 'https://github.com/ehallscherwitz/SleptOnVintage.com',
    media: [
      { src: '/images/work/sov_thumbnail.png', label: 'SHOP', wide: true, contain: true },
      { src: '/images/work/sov_sync.png', label: 'ADMIN', wide: true, contain: true },
      { src: '/images/work/sov_pinterest.png', label: 'PINTEREST', wide: true, contain: true },
    ],
    body: [
      'I built the website for my vintage shop. React, Supabase, Square, hosted on Vercel. Not a theme.',
      'Admin is the part I care about. I add an item, it hits the database and the storefront, and it gets pushed to Pinterest. One place to publish.',
      'Checkout is Square. Cart, Google sign-in, orders, a giveaway wheel if I am running one.',
    ],
  },
  {
    slug: 'thirdspace',
    title: 'Third Space Digital',
    tag: 'Site',
    section: 'platforms',
    card: 'Founding web team. I built the backend and the article pages.',
    role: 'Founding web developer',
    image: '/images/work/thirdspace.jpg',
    live: 'https://3rdspacedigital.org',
    repo: 'https://github.com/3rd-Space-Digital/3SD-Website',
    media: [
      { src: '/images/work/thirdspace.jpg', label: 'HOME', wide: true, contain: true },
      { src: '/images/work/thirdspace-events.jpg', label: 'EVENTS', wide: true, contain: true },
      { src: '/images/work/thirdspace-article.jpg', label: 'ARTICLE', wide: true, contain: true },
    ],
    body: [
      'Prabhas Gade, Julia Marie Bacud, and I built the Third Space Digital site from scratch in about three months. Events, photo archives, issues, interviews.',
      'I did the database and how content is stored and served — events, issues, images, login. I also built the custom article pages.',
    ],
  },
  {
    slug: 'orgportal',
    title: 'Org Portal',
    tag: 'ACM',
    section: 'platforms',
    card: 'Students find clubs. Officers run them.',
    role: 'Org Portal officer',
    image: '/images/work/orgportal-member.jpg',
    live: 'https://www.org-portal.com/landing',
    media: [
      { src: '/images/work/orgportal-member.jpg', label: 'MEMBERS' },
      { src: '/images/work/orgportal-admin.jpg', label: 'ADMIN' },
    ],
    body: [
      'I am an officer on ACM UTD’s Org Portal. Members look for clubs. Officers manage people, events, and forms.',
      'I have been on the database, image storage, QR check-in, and turning the designs into the actual screens.',
    ],
  },
  {
    slug: 'indigo',
    title: 'Indigo Magazine',
    tag: 'Editorial',
    section: 'editorial',
    card: 'Web developer. I put a playable layer on top of the writer’s piece.',
    role: 'Web developer',
    image: '/images/work/indigo.jpg',
    extra: 'https://www.linkedin.com/in/ethan-scherwitz333',
    extraLabel: 'LinkedIn',
    media: [{ src: '/images/work/indigo.jpg', label: 'INDIGO' }],
    body: [
      'Web developer at Indigo, UTD’s student magazine.',
      'On Issue 11 I took what the writer made and built an interactive piece around it — sound, picture, something you move through instead of only read.',
    ],
  },
  {
    slug: 'hacklab',
    title: 'HackLab',
    tag: 'Backend',
    section: 'tools',
    card: 'ACM Projects. I built the resume generator off LinkedIn and GitHub.',
    role: 'Backend · ACM Projects',
    image: '/images/work/hacklab-resume.jpg',
    repo: 'https://github.com/ehallscherwitz/hacklab-swagger',
    media: [{ src: '/images/work/hacklab-resume.jpg', label: 'RESUME' }],
    body: [
      'Spring 2025 ACM Projects with Owen Isenhart, Luke Sultzer, and Aastha Sheth. First place and best design. HackLab is for finding teammates and starting a project.',
      'I did backend: GitHub login, LinkedIn, the API, Postgres, Gemini, AWS. The resume builder takes your LinkedIn and GitHub and writes a resume. It can also open a repo and read commits.',
    ],
  },
]

export const sections = [
  { id: 'tools', title: 'Tools' },
  { id: 'platforms', title: 'Sites' },
  { id: 'editorial', title: 'Other' },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}

export const featuredSlugs = ['bake', 'tactile', 'slepton']
