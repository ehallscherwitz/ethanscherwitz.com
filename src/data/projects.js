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
    tag: 'Tool · Pipeline',
    section: 'tools',
    card: 'A Blender add-on that bakes scene lighting onto dedicated UV maps so the same assets run in the browser and in a game.',
    role: 'Solo — Python add-on, bake pipeline, Three.js viewer',
    image: '/images/work/bake-ui.jpg',
    live: 'https://pulse-three-js.vercel.app',
    liveLabel: 'Three.js viewer',
    repo: 'https://github.com/ehallscherwitz/blender-bake-plugin',
    media: [
      { src: '/images/work/bake-before.jpg', label: 'BEFORE BAKE' },
      { src: '/images/work/bake-after.jpg', label: 'AFTER BAKE' },
      { src: '/images/work/bake-ui.jpg', label: 'PLUGIN UI' },
    ],
    body: [
      'Commercial bake add-ons exist, but they are expensive and generic. This one is written for a specific pipeline: get lighting out of the viewport and into a texture, then ship that texture with the mesh.',
      'The reason to auto-bake was performance. A lit scene in the browser cannot afford realtime GI. Baking the look into a UV map lets the viewer use an unlit material (MeshBasicMaterial) and still look finished. The same meshes are meant for a game path. Packing several objects onto one map also cuts texture count and storage.',
      'Pulse is the proof: a React Three Fiber viewer that loads pulsethreeJSExportBaked.gltf plus the baked PNGs (walls, floor, ceramics, window, edges) with no realtime lights.',
    ],
    options: [
      'Mode — Individual (each mesh its own UV + image) or One map (checked meshes share one UV and one image, named by group)',
      'Resolution — 512, 1024, 2048, 4096, or 8192',
      'Unwrap — Smart UV Project (66° / 0.01 pack), Lightmap Pack, or keep existing UVs',
      'Margin, shader preview (unconnected image vs Principled BSDF), output folder (default bakedLightingTextures)',
      'Mesh checklist with check-all / none / refresh; validates before bake; writes PNGs',
    ],
  },
  {
    slug: 'tactile',
    title: 'tactile',
    tag: 'Tool · Plugin',
    section: 'tools',
    card: 'A Figma plugin that turns hand gestures into live design operations over a custom backend.',
    role: 'Team (Figma Makathon, 24h) — plugin, backend, gesture pipeline',
    image: '/images/work/tactile.jpg',
    repo: 'https://github.com/ehallscherwitz/tactile',
    extra: 'https://devpost.com/software/tactile-tyoilq',
    extraLabel: 'Devpost',
    video: '/videos/tactile.mp4',
    media: [{ src: '/images/work/tactile.jpg', label: 'TACTILE' }],
    body: [
      'Built in 24 hours with Noor Haider, Christopher Tran, and Prabhas Gade for a Figma Makathon. The idea: the body is the most natural design input you have. Tactile tracks hands and writes those gestures into Figma in real time.',
      'The stack is a Figma plugin (websocket to the backend), a React frontend, and a Python API. Pull from Figma snapshots the page (type, color, structure) into an editable frame. Gestures become patches — resize, color scheme, liquid glass. Push to Figma creates a derived frame. The plugin binds to a selected node or auto-creates a card, stores the mapping, and acks each patch.',
      'This is a custom creative tool, not a theme pack: a full round-trip from proprioception to a native Figma node.',
    ],
  },
  {
    slug: 'slepton',
    title: 'Slept On Vintage',
    tag: 'Pipeline · Product',
    section: 'tools',
    card: 'Full shop for my own business: Square checkout, and one publish path that writes the item to the site and to Pinterest.',
    role: 'Solo — storefront, admin, payments, Pinterest sync',
    image: '/images/work/slepton.jpg',
    live: 'https://sleptonvintage.com',
    repo: 'https://github.com/ehallscherwitz/SleptOnVintage.com',
    media: [
      { src: '/images/work/slepton.jpg', label: 'STOREFRONT' },
      { src: '/images/work/slepton-admin.jpg', label: 'ADMIN UPLOAD' },
    ],
    body: [
      'Not a template. React storefront, Supabase (Postgres, Auth, Storage, RLS), Square Orders + Payments, Vercel. Built and run end-to-end for the actual shop.',
      'The tools piece is the publish pipeline. Admin upload writes the product to the database and storefront, then fire-and-forget upserts it to the Pinterest catalog (access token + product rows). Deletes sync the other way. A build-time Pinterest CSV and Rich Pins cover SEO. One path in the admin, not three tools.',
      'Also: guest cart merge on Google sign-in, cents + RLS on orders, giveaway wheel with a Postgres resolve RPC, sitemap generation.',
    ],
  },
  {
    slug: 'hacklab',
    title: 'HackLab',
    tag: 'Pipeline · Backend',
    section: 'tools',
    card: 'Resume builder that pulls LinkedIn and GitHub into a generated PDF — plus GitHub OAuth and repo automation for a teammate-finding platform.',
    role: 'Backend — ACM Projects Spring 2025, 1st place + Best Design',
    image: '/images/work/hacklab-resume.jpg',
    repo: 'https://github.com/ehallscherwitz/hacklab-swagger',
    media: [{ src: '/images/work/hacklab-resume.jpg', label: 'RESUME BUILDER' }],
    body: [
      'ACM Projects, Spring 2025. Team of four (Owen Isenhart, Luke Sultzer, Aastha Sheth) with PM Ethan Varghese. We won 1st place and Best Design. HackLab helps developers find teammates and stand up projects.',
      'I owned backend: GitHub OAuth, LinkedIn for profiles, a CRUD API, PostgreSQL, Gemini, deploy on AWS. The feature to highlight is Auto Resume Builder — LinkedIn + GitHub contributions become a professional resume. GitHub integration also creates project repos and reads commit history for resume insights.',
      'Same idea as the rest of this site: a pipeline that turns existing data into something a team can use immediately.',
    ],
  },
  {
    slug: 'thirdspace',
    title: 'Third Space Digital',
    tag: 'Platform · Leadership',
    section: 'platforms',
    card: 'Founding web developer: React site, SQL/content backend, and custom editorial pages for a Dallas creative collective.',
    role: 'Founding web developer — backend, editorial, launch',
    image: '/images/work/thirdspace.jpg',
    live: 'https://3rdspacedigital.org',
    repo: 'https://github.com/3rd-Space-Digital/3SD-Website',
    media: [{ src: '/images/work/thirdspace.jpg', label: 'HOMEPAGE' }],
    body: [
      'Founding web-dev team with Prabhas Gade and Julia Marie Bacud. We built the site from zero in about three months in React: events, photo archives, issues, interviews, apps. It is the org’s public stack, not a brochure.',
      'I designed and built the SQL database and content storage/delivery (Supabase): events, issues, images, auth. You asked to call the backend single-handed — the repo matches that: one content API, image retrieval, archive/event utilities, OAuth callback.',
      'The creative work is the issues system — custom article templates, full-bleed photography, interactive pieces — plus the homepage particle canvas and the glass header/menu this portfolio is based on.',
    ],
  },
  {
    slug: 'orgportal',
    title: 'ACM Org Portal',
    tag: 'Platform · UX',
    section: 'platforms',
    card: 'Officer on the app students use to find clubs and officers use to run them — database, image storage, QR check-in.',
    role: 'Org Portal Officer / ACM Development Officer',
    image: '/images/work/orgportal-member.jpg',
    live: 'https://www.org-portal.com/landing',
    media: [
      { src: '/images/work/orgportal-member.jpg', label: 'MEMBERS' },
      { src: '/images/work/orgportal-admin.jpg', label: 'ADMIN' },
    ],
    body: [
      'ACM UTD’s Org Portal is the campus hub for student orgs: discovery for members, members/officers/events/forms for admins. I am an Org Portal Officer (Development Officer on LinkedIn).',
      'Work I can stand behind from the role: database design, image storage and display, QR-code event check-ins, and turning designs into working UI so the member path and the admin path both stay usable.',
      'This is the UI/UX proof for Game Lab: one product, two audiences, no extra training required.',
    ],
  },
  {
    slug: 'indigo',
    title: 'Indigo Magazine',
    tag: 'Interactive · UX',
    section: 'editorial',
    card: 'Web developer. Took written lore and built an audiovisual, playable layer on the editorial site.',
    role: 'Web Developer — interactive editorial',
    image: '/images/work/indigo.jpg',
    extra: 'https://www.linkedin.com/posts/ethan-scherwitz333_it-was-such-a-great-and-unique-experience-activity-7428118764115841024-TfUZ',
    extraLabel: 'LinkedIn',
    video: '/videos/indigo.mp4',
    media: [{ src: '/images/work/indigo.jpg', label: 'INDIGO' }],
    body: [
      'Web developer at Indigo Magazine (Sep 2025–present), UTD’s student creative publication. I helped shape how issues are structured and how future pieces can be presented as systems, not static pages.',
      'The piece to show is the interactive work around Issue 11, Serial (Cereal) / “Keyboards”: an imaginative take on humanity’s relationship with AI. The writer’s lore is the spine; I added an audiovisual gameplay layer on top so the article is something you move through, not only read.',
      'That is the games-adjacent UI/UX argument: interactive systems in service of a story.',
    ],
  },
]

export const sections = [
  { id: 'tools', title: 'Tools' },
  { id: 'platforms', title: 'Platforms' },
  { id: 'editorial', title: 'Interactive' },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}

export const featuredSlugs = ['bake', 'tactile', 'slepton']
