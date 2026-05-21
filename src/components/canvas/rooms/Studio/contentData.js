/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'github', 'linkedin', 'instagram'
 */

export const PLATFORM_CONFIG = {
    github: {
        color: '#333333',
        accentColor: '#1a1a1a',
        icon: '💻',
        label: 'GitHub',
        shape: 'tv', // Wide CRT style
    },
    linkedin: {
        color: '#0A66C2',
        accentColor: '#004182',
        icon: '💼',
        label: 'LinkedIn',
        shape: 'monitor', // Thin desktop monitor
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📸',
        label: 'Instagram',
        shape: 'phone', // Vertical phone
    },
};

// Sample content data - replace with real content later
const RAW_CONTENT_DATA = [
    // ============ GitHub (previously YouTube) ============
    {
        id: 'gh-001',
        platform: 'github',
        title: 'I Built a Website for Young Multi for $__,___',
        description: 'It\'s late 2025, we\'re flying to space, and Young Multi... still didn\'t have his own website. So I took matters into my own hands.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2026-01-10',
        views: '1.2K',
        duration: '15:32',
    },
    {
        id: 'gh-002',
        platform: 'github',
        title: 'Turning an ordinary selfie into a professional AI photoshoot! How Google Nano Banana transformed my photo! (For Free)',
        description: '📸 Watch how I turned a basic selfie into a professional photoshoot using a free AI tool from Google! In this step-by-step tutorial, I reveal my secret trick for crafting perfect prompts, even if you\'re a total beginner.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2025-10-11',
        views: '121',
        duration: '7:45',
    },
    {
        id: 'gh-003',
        platform: 'github',
        title: 'React Three Fiber Crash Course',
        description: 'Everything you need to know to get started with 3D in React.',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2025-12-28',
        views: '2.4K',
        duration: '22:10',
    },
    {
        id: 'gh-004',
        platform: 'github',
        title: 'Shaders for Beginners',
        description: 'Introduction to GLSL shaders in WebGL and Three.js.',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2025-12-15',
        views: '1.8K',
        duration: '18:33',
    },
    {
        id: 'gh-005',
        platform: 'github',
        title: 'GSAP + Three.js Integration',
        description: 'How to animate 3D objects with GSAP ScrollTrigger.',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2025-12-01',
        views: '3.1K',
        duration: '20:15',
    },
    {
        id: 'gh-006',
        platform: 'github',
        title: 'Building Interactive 3D Scenes',
        description: 'Raycasting, hover effects, and click interactions in Three.js.',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2025-11-20',
        views: '2.8K',
        duration: '25:00',
    },
    {
        id: 'gh-007',
        platform: 'github',
        title: 'WebGL Performance Deep Dive',
        description: 'Optimizing draw calls, geometry instancing, and more.',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2025-11-10',
        views: '1.5K',
        duration: '30:22',
    },
    {
        id: 'gh-008',
        platform: 'github',
        title: 'Procedural Textures Tutorial',
        description: 'Creating textures with noise and math functions.',
        thumbnail: null,
        url: 'https://github.com/sahilaslam-art',
        date: '2025-10-28',
        views: '1.9K',
        duration: '18:45',
    },

    // ============ LinkedIn (previously Blog) ============
    {
        id: 'li-001',
        platform: 'linkedin',
        title: 'Double Site of the Day confirmed! 🏆🏆',
        description: 'You\'ve probably noticed I\'ve been sharing a bunch of SOTD certificates on my stories lately. Yes, it\'s true—the YOUNG MULTI project officially scored a "double" and got recognized on the international stage...',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2026-01-08',
        readTime: '5 min',
    },
    {
        id: 'li-002',
        platform: 'linkedin',
        title: 'The Hand-Drawn Aesthetic',
        description: 'How I achieved a sketch-like visual style using shaders.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2025-12-20',
        readTime: '8 min',
    },
    {
        id: 'li-003',
        platform: 'linkedin',
        title: 'Optimizing 3D for the Web',
        description: 'Performance tips for smooth 60fps 3D experiences.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2025-12-10',
        readTime: '6 min',
    },
    {
        id: 'li-004',
        platform: 'linkedin',
        title: 'Creative Coding Journey',
        description: 'My path from traditional dev to creative development.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2025-11-25',
        readTime: '10 min',
    },
    {
        id: 'li-005',
        platform: 'linkedin',
        title: 'The Future of Web Experiences',
        description: 'Where I think interactive web is heading.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2025-11-15',
        readTime: '7 min',
    },
    {
        id: 'li-006',
        platform: 'linkedin',
        title: 'Design Systems for 3D',
        description: 'Creating consistent 3D component libraries.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2025-11-01',
        readTime: '12 min',
    },
    {
        id: 'li-007',
        platform: 'linkedin',
        title: 'Accessibility in 3D Web',
        description: 'Making immersive experiences accessible to everyone.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2025-10-20',
        readTime: '9 min',
    },
    {
        id: 'li-008',
        platform: 'linkedin',
        title: 'Audio in Web Experiences',
        description: 'Adding spatial audio to enhance immersion.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/sahil-aslam-105640374/',
        date: '2025-10-10',
        readTime: '6 min',
    },

    // ============ Instagram (previously TikTok) ============
    {
        id: 'ig-001',
        platform: 'instagram',
        title: 'Follow me on Instagram! ✨',
        description: 'I share design tips, coding insights, and much more.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2026-01-09',
        views: '15.2K',
        likes: '1.2K',
    },
    {
        id: 'ig-002',
        platform: 'instagram',
        title: 'Coding a door animation 🚪',
        description: 'POV: You open a door in Three.js',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2026-01-03',
        views: '8.5K',
        likes: '756',
    },
    {
        id: 'ig-003',
        platform: 'instagram',
        title: 'When the shader finally works 🎉',
        description: 'The satisfaction of debugging shaders',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-12-25',
        views: '22.1K',
        likes: '3.4K',
    },
    {
        id: 'ig-004',
        platform: 'instagram',
        title: 'Day in the life: WebGL Dev',
        description: 'What I do as a creative developer',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-12-18',
        views: '12.3K',
        likes: '1.1K',
    },
    {
        id: 'ig-005',
        platform: 'instagram',
        title: 'React vs Three.js POV 😅',
        description: 'The struggle is real',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-12-12',
        views: '45.2K',
        likes: '5.8K',
    },
    {
        id: 'ig-006',
        platform: 'instagram',
        title: 'Making a 3D button 🔘',
        description: '30 seconds of pure satisfaction',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-12-05',
        views: '18.7K',
        likes: '2.1K',
    },
    {
        id: 'ig-007',
        platform: 'instagram',
        title: 'This shader took 3 hours 💀',
        description: 'Was it worth it? Absolutely.',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-11-28',
        views: '33.4K',
        likes: '4.2K',
    },
    {
        id: 'ig-008',
        platform: 'instagram',
        title: 'Hover effects compilation ✨',
        description: 'My favorite micro-interactions',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-11-20',
        views: '28.9K',
        likes: '3.6K',
    },
    {
        id: 'ig-009',
        platform: 'instagram',
        title: 'Loading screen ideas 🔄',
        description: 'Creative preloader concepts',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-11-15',
        views: '19.3K',
        likes: '2.4K',
    },
    {
        id: 'ig-010',
        platform: 'instagram',
        title: 'Cursor goes brrr 🖱️',
        description: 'Custom cursor madness',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-11-08',
        views: '41.2K',
        likes: '5.1K',
    },
    {
        id: 'ig-011',
        platform: 'instagram',
        title: 'Parallax scrolling magic 🪄',
        description: 'Simple but effective',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-11-01',
        views: '25.6K',
        likes: '3.0K',
    },
    {
        id: 'ig-012',
        platform: 'instagram',
        title: 'Text animation inspo 📝',
        description: 'Typography that moves',
        thumbnail: null,
        url: 'https://www.instagram.com/i__am__aslam.1/?hl=en',
        date: '2025-10-25',
        views: '31.8K',
        likes: '4.0K',
    },
];

const ghTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ghPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const liTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const liPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const igTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const igPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ghIdx = 0, liIdx = 0, igIdx = 0;
let ghPIdx = 0, liPIdx = 0, igPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'github' ? ghTextures[ghIdx++ % ghTextures.length] :
                item.platform === 'linkedin' ? liTextures[liIdx++ % liTextures.length] :
                    igTextures[igIdx++ % igTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'github' ? ghPaintedTextures[ghPIdx++ % ghPaintedTextures.length] :
                item.platform === 'linkedin' ? liPaintedTextures[liPIdx++ % liPaintedTextures.length] :
                    igPaintedTextures[igPIdx++ % igPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
