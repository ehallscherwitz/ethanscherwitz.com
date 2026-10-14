export const socials = {
  github: 'https://github.com/ehallscherwitz',
  linkedin: 'https://www.linkedin.com/in/ethan-scherwitz333',
  email: 'mailto:ehallscherwitz@gmail.com',
  resume: '/Ethan-Scherwitz-Resume.pdf',
}

export const projects = [
  {
    slug: 'bake',
    title: 'Automatic Lighting Bake Add-On',
    tag: 'Blender',
    section: 'tools',
    card: 'Add-on that bakes lighting onto a new UV map so a scene can run in the browser without realtime lights.',
    role: 'Blender add-on',
    image: '/images/work/bake-after.png',
    live: 'https://pulse-three-js.vercel.app',
    repo: 'https://github.com/ehallscherwitz/blender-bake-plugin',
    media: [
      {
        src: '/images/work/bake-ui.png',
        label: 'INDIVIDUAL',
        caption: 'individual bake',
        contain: true,
        group: 'ui',
      },
      {
        src: '/images/work/bake-ui-group.png',
        label: 'ONE MAP',
        caption: 'one shared map',
        contain: true,
        group: 'ui',
      },
      {
        src: '/images/work/bake-before.jpg',
        label: 'BEFORE',
        caption: 'before running the automatic bake add on',
        wide: true,
        group: 'before',
      },
      {
        src: '/images/work/bake-after.png',
        label: 'AFTER',
        caption: 'after running the automatic bake add on',
        wide: true,
        group: 'after',
      },
    ],
    story: [
      {
        type: 'copy',
        text: [
          'I created an Auto Lighting Bake tool in Blender in order to greatly speed up my workflow as before I would have to individually UV Unwrap and setup the material node setup, wait for the item to bake, then do it all over for the next one. Some similar plugins already exist, but they cost money and aren’t optimized to my exact workflow.',
        ],
      },
      {
        type: 'steps',
        heading: 'How it works step by step',
        items: [
          'Check the meshes you want in the Lighting Bake panel.',
          'Pick individual (each object gets its own map) or one shared map for the group.',
          'Set resolution, unwrap method, margin, and the output folder.',
          'Hit Bake Lighting. It unwraps, sets up the material, bakes, and writes the PNGs.',
        ],
      },
      { type: 'copy', text: ['Here is what the UI looks like'] },
      { type: 'media', group: 'ui' },
      {
        type: 'list',
        heading: 'Options',
        items: [
          'Individual bake or one shared map',
          '512 to 8192',
          'Smart UV Project, Lightmap Pack, or keep the UVs you have',
          'Bake margin',
          'Preview through the shader or leave the image unconnected',
          'Output folder',
          'Mesh checklist — all, none, refresh',
        ],
      },
      {
        type: 'copy',
        text: [
          'Some options include group vs individual bakes, in case you want to optimize the textures used.',
          'I scripted this custom tool using python, iterating and testing until I came up with a product that had all of the options and automations necessary for me.',
          'The reason I needed a fast way to bake lighting into the textures in my scene, was to prepare the objects and materials to be rendered in Three.js.',
          'I discovered that baked lighting allows the web experience to run much faster compared to simulated lighting, ensuring that devices with low performance GPU can experience the site with no issue.',
        ],
      },
      { type: 'media', group: 'before' },
      { type: 'media', group: 'after' },
    ],
  },
  {
    slug: 'tactile',
    title: 'tactile',
    tag: 'Figma',
    section: 'tools',
    card: 'A project built for FigBuild 2026, integrated with your designs and your camera.',
    role: 'Figma plugin · FigBuild 2026',
    image: '/images/work/tactile.jpg',
    repo: 'https://github.com/ehallscherwitz/tactile',
    extra: 'https://devpost.com/software/tactile-tyoilq',
    extraLabel: 'Devpost',
    video: '/videos/tactile.mp4',
    media: [
      { src: '/images/work/tactile.jpg', label: 'TACTILE', wide: true, group: 'shots' },
      { src: '/images/work/tactile-plugin.png', label: 'PLUGIN', wide: true, group: 'shots' },
    ],
    story: [
      {
        type: 'copy',
        text: [
          'Tactile was a project built for FigBuild 2026.',
          'Our goal was to break down the barrier between a user’s thoughts and the digital canvas by introducing hand gesture-based inputs.',
          'For this project I built a custom Figma plugin to allow our product to integrate with theirs seamlessly, building a direct pipeline between any Figma project and our backend. I also built the backend with FastAPI.',
        ],
      },
      { type: 'video' },
      {
        type: 'points',
        heading: 'How it works',
        items: [
          {
            title: 'Real-Time Gesture Tracking',
            text: 'As users interact with our React frontend, MediaPipe processes the webcam feed to instantly capture hand movements.',
          },
          {
            title: 'Context Capture',
            text: 'When a user starts a workflow, the frontend calls our FastAPI backend. The backend communicates with our custom Figma plugin, which captures context from the active Figma page—like layout, typography, and color information—and stores that snapshot in MongoDB.',
          },
          {
            title: 'Contextual Frame Creation',
            text: 'We then pass that context through our LangChain pipeline with Groq to build a new Javascript frame that perfectly matches the design language of the original file.',
          },
          {
            title: 'Live Manipulation & Syncing',
            text: 'That generated frame is returned to the frontend, where users can manipulate it live with their hand gestures. When they are done, the frontend sends the final state back to the backend, and we push the updated frame directly into Figma through the plugin.',
          },
        ],
      },
      { type: 'media', group: 'shots' },
    ],
  },
  {
    slug: 'slepton',
    title: 'Slept On Vintage',
    tag: 'Shop',
    section: 'tools',
    card: 'My vintage clothing business website & systems',
    role: 'My shop',
    image: '/images/work/sov_thumbnail.png',
    live: 'https://sleptonvintage.com',
    repo: 'https://github.com/ehallscherwitz/SleptOnVintage.com',
    media: [
      { src: '/images/work/sov_thumbnail.png', label: 'SHOP', wide: true, contain: true, group: 'shop' },
      { src: '/images/work/sov_sync.png', label: 'ADMIN', wide: true, contain: true, group: 'admin' },
      { src: '/images/work/sov_pinterest.png', label: 'PINTEREST', wide: true, contain: true, group: 'pinterest' },
    ],
    story: [
      {
        type: 'copy',
        text: [
          'Slept On Vintage is my vintage clothing business. I have been selling online and in person for >3 years now. In order to gain more control over my business and the tools available to me, I designed my own website and system.',
        ],
      },
      { type: 'media', group: 'shop' },
      {
        type: 'copy',
        text: [
          'The website allows customers to view all the items I have in stock and purchase items, while allowing me to keep track of orders, inventory, and provide order status updates to customers.',
        ],
      },
      { type: 'media', group: 'admin' },
      {
        type: 'copy',
        text: [
          'I integrate with Stripe for payment processing and Google for account management.',
          'I created a custom pipeline that allows me to turn all of my items into enriched Pinterest pins automatically, driving significantly more traffic to my site.',
        ],
      },
      { type: 'media', group: 'pinterest' },
    ],
  },
  {
    slug: 'thirdspace',
    title: 'Third Space Digital',
    tag: 'Site',
    section: 'platforms',
    card: 'Website hosting articles, events, and photoshoots for our organization',
    role: 'Founding web developer',
    image: '/images/work/thirdspace.jpg',
    live: 'https://3rdspacedigital.org',
    repo: 'https://github.com/3rd-Space-Digital/3SD-Website',
    media: [
      { src: '/images/work/thirdspace.jpg', label: 'HOME', wide: true, contain: true, group: 'home' },
      { src: '/images/work/thirdspace-article.jpg', label: 'ARTICLE', wide: true, contain: true, group: 'article' },
      { src: '/images/work/thirdspace-events.jpg', label: 'EVENTS', wide: true, contain: true, group: 'events' },
    ],
    story: [
      {
        type: 'copy',
        text: [
          'As a member of the founding web dev team, I built the Third Space Digital website from zero as a digital platform to center the creative works and community of our organization, designing and building the SQL database and content storage and delivery protocols.',
        ],
      },
      { type: 'media', group: 'home' },
      {
        type: 'copy',
        text: [
          'I have created structured digital articles and events, and designed interactive custom articles for special issues.',
        ],
      },
      { type: 'media', group: 'article' },
      {
        type: 'copy',
        text: [
          'We launched after less than 3 months of development, driving new traffic and interest to the organization.',
        ],
      },
      { type: 'media', group: 'events' },
    ],
  },
  {
    slug: 'orgportal',
    title: 'Org Portal',
    tag: 'ACM',
    section: 'platforms',
    card: 'A platform for students to find clubs, while allowing officers to manage them',
    role: 'Development lead',
    image: '/images/work/orgportal-landing.jpg',
    live: 'https://www.org-portal.com/landing',
    repo: 'https://github.com/acmutd/orgportal',
    media: [
      { src: '/images/work/orgportal-landing.jpg', label: 'LANDING', wide: true, contain: true, group: 'landing' },
      { src: '/images/work/orgPortal.png', label: 'FEED', wide: true, contain: true, group: 'feed' },
    ],
    story: [
      { type: 'media', group: 'landing' },
      {
        type: 'copy',
        text: [
          'Leading development Org Portal, a platform that helps students discover and join clubs while enabling club leaders to manage members efficiently.',
          'Contributing to database design and management, image storage and display, QR code based event check-ins, and translating designs into functional code in order to enhance community involvement within the student body.',
          'As lead I own the product decisions and have responsibility over the team’s development process.',
        ],
      },
      { type: 'media', group: 'feed' },
    ],
  },
  {
    slug: 'indigo',
    title: 'Indigo Magazine',
    tag: 'Editorial',
    section: 'editorial',
    card: 'Creating interactive web experiences',
    role: 'Web developer',
    image: '/images/work/indigo-homepage.jpg',
    live: 'https://indigomagazinetx.com/issues/serial/keyboards',
    media: [
      { src: '/images/work/indigo-homepage.jpg', label: 'HOME', wide: true, contain: true, group: 'home' },
    ],
    story: [
      { type: 'media', group: 'home' },
      {
        type: 'copy',
        text: [
          'Created an interactive audiovisual gameplay experience to increase engagement with the story created by our writer, graphics, and photography team.',
          'Implemented using React.js, expanding on how future issues can be dynamically presented with storytelling elements.',
          'Contributed to the architectural design choices of the website, helping shape its structure and development approach.',
        ],
      },
      {
        type: 'video',
        src: '/videos/indigo.mp4',
        poster: '/images/work/indigo-keyboards.png',
      },
    ],
  },
  {
    slug: 'hacklab',
    hidden: true,
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
  return projects.find((project) => project.slug === slug && !project.hidden)
}

export const featuredSlugs = ['bake', 'tactile', 'slepton']
