/**
 * ============================================================================
 *  PORTFOLIO DATA — EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
 * ============================================================================
 * 
 *  This is the single source of truth for all personal data displayed
 *  across the 3D portfolio. Update the values below and everything
 *  (3D rooms, SEO, navigation, contact forms) will reflect your changes.
 * 
 *  NOTE: Some content is also defined in:
 *  - /src/components/canvas/rooms/Studio/contentData.js  (social media posts)
 *  - /index.html  (SEO meta tags, JSON-LD structured data)
 *  - /public/sitemap.xml  (sitemap URL)
 * ============================================================================
 */

// ─── PERSONAL INFO ──────────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Sahil Aslam',
  alias: 'SArt',
  displayName: 'SahilArt"portfolio"Aslam',
  tagline: 'Creative 3D Web Developer & Frontend Engineer',
  shortBio: 'Interactive, WebGL-powered portfolio showcasing the intersection of modern frontend engineering and immersive 3D art.',
  fullBio: `My name is Sahil Aslam, and I am a dedicated Frontend Developer 
with a profound specialization in interactive web experiences. My journey in software 
engineering began with a fascination for how logic and aesthetics intertwine. Over the 
years, I have honed my skills not just in building functional websites, but in engineering 
products that leave a lasting impression on the user.`,
  jobTitle: 'Frontend Developer',
  email: 'sahilaslam754@gmail.com',
  phone: '6205835321',
  domain: '',
};

// ─── SOCIAL LINKS ───────────────────────────────────────────────────────────

export const SOCIALS = {
  github: 'https://github.com/sahilaslam-art',
  linkedin: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
  instagram: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
  twitter: 'https://x.com/sahilaslam49205',
};

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export const SKILLS = {
  // Large balloons (primary skills)
  primary: [
    { name: 'React', level: 'expert' },
    { name: 'Three.js', level: 'expert' },
    { name: 'GSAP', level: 'expert' },
  ],
  // Medium balloons (secondary skills)
  secondary: [
    { name: 'JavaScript', level: 'expert' },
    { name: 'CSS', level: 'expert' },
    { name: 'Next.js', level: 'advanced' },
  ],
  // Small balloons (additional skills)
  additional: [
    { name: 'HTML', level: 'expert' },
    { name: 'Git', level: 'advanced' },
    { name: 'Figma', level: 'advanced' },
    { name: 'Firebase', level: 'intermediate' },
  ],
  // Full list for SEO / About section
  fullStack: [
    'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS',
    'React.js', 'Next.js', 'Three.js', 'React Three Fiber',
    'GSAP', 'Framer Motion', 'WebGL', 'GLSL Shaders',
    'Node.js', 'Express', 'Firebase', 'Supabase',
    'Figma', 'Blender', 'Adobe Photoshop',
    'Git', 'Vercel', 'Cloudflare Pages',
  ],
};

// ─── PROJECTS (Gallery Room) ────────────────────────────────────────────────
// Each project appears as a card in the 3D gallery room.
// The textures referenced here must exist in /public/textures/gallery/

export const PROJECTS = [
  {
    id: 'monetune',
    title: 'MoneTune',
    subtitle: 'Full-Stack Financial Dashboard',
    description: `MoneTune is an expansive, full-stack web application for personal finance 
tracking and management. Built with React and a secure backend, it helps users visualize 
spending habits, track subscriptions, and set dynamic budgeting goals.`,
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Netlify'],
    url: '#',
    // Textures are mapped in GalleryRoom.jsx
  },
  {
    id: 'timberkitty',
    title: 'TimberKitty',
    subtitle: 'Interactive Web Experience',
    description: `A highly interactive, animated web experience utilizing modern CSS Grid, 
flexbox, and advanced logic to create a game-like interface. Demonstrates expertise in 
micro-interactions, cross-browser compatibility, and smooth GSAP animations.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    url: '#',
  },
  {
    id: 'youngmulti',
    title: 'Young Multi',
    subtitle: '3D Collaboration',
    description: `A cutting-edge promotional site using scroll-based storytelling mapped to a 
3D environment. As the user scrolls, the camera navigates through a custom 3D scene, 
dynamically triggering HTML overlays and React components.`,
    techStack: ['React', 'Three.js', 'GSAP', 'WebGL'],
    url: '#',
  },
];

// ─── JOURNEY MILESTONES (About Room) ────────────────────────────────────────

export const JOURNEY = [
  {
    id: 'university',
    title: 'University',
    description: 'Started formal CS education and fell in love with web development.',
    year: '2020',
  },
  {
    id: 'freelance',
    title: 'Freelance',
    description: 'Began freelancing, building websites for local businesses and startups.',
    year: '2022',
  },
];

// ─── AWARDS (About Room) ────────────────────────────────────────────────────

export const AWARDS = [
  { id: 'sotd', title: 'Site of the Day', source: 'Awwwards' },
  { id: 'sotm', title: 'Site of the Month', source: 'CSS Design Awards' },
  { id: 'soty', title: 'Site of the Year Nominee', source: 'Awwwards' },
];

// ─── NAVIGATION LABELS ─────────────────────────────────────────────────────
// These map to the 4 door rooms in the corridor

export const ROOMS = {
  gallery: { label: 'Gallery', subtitle: 'Projects & Work' },
  studio: { label: 'Studio', subtitle: 'Social & Content' },
  about: { label: 'About', subtitle: 'My Story' },
  contact: { label: 'Contact', subtitle: 'Get in Touch' },
};
