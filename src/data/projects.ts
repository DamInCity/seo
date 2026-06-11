export type CaseStudyMedia =
    | { type: 'image'; src: string; alt: string; caption: string }
    | { type: 'video'; src: string; alt: string; caption: string; poster?: string };

export type Project = {
    id: string;
    label: string;
    name: string;
    context: string;
    desc: string;
    metrics: { value: string; label: string }[];
    accent: string;
    image: string;
    caseStudy: CaseStudyMedia[];
};

export const projects: Project[] = [
    {
        id: 'acme-analytics',
        label: 'Top SEO Site 01',
        name: 'Acme Analytics',
        context: 'B2B SaaS • Technical SEO + conversion redesign',
        desc: 'A complete overhaul focusing on core web vitals and semantic structure, resulting in massive organic growth.',
        metrics: [
            { value: '+230%', label: 'Organic traffic' },
            { value: '3.9x', label: 'Demo requests' },
        ],
        accent: '#4EE1A0',
        image: '/images/project-1.png',
        caseStudy: [
            {
                type: 'image',
                src: '/images/case-studies/acme-analytics/01-home.png',
                alt: 'Acme Analytics homepage on desktop',
                caption: 'Homepage',
            },
            {
                type: 'image',
                src: '/images/case-studies/acme-analytics/02-about.png',
                alt: 'Acme Analytics about page',
                caption: 'About',
            },
            {
                type: 'image',
                src: '/images/case-studies/acme-analytics/03-analytics.png',
                alt: 'Acme Analytics product dashboard',
                caption: 'Analytics dashboard',
            },
            {
                type: 'image',
                src: '/images/case-studies/acme-analytics/04-pricing.png',
                alt: 'Acme Analytics pricing page',
                caption: 'Pricing',
            },
            {
                type: 'image',
                src: '/images/case-studies/acme-analytics/05-mobile.png',
                alt: 'Acme Analytics mobile homepage',
                caption: 'Mobile view',
            },
        ],
    },
    {
        id: 'lumina-finance',
        label: 'Top SEO Site 02',
        name: 'Lumina Finance',
        context: 'Fintech • Content Engine Architecture',
        desc: 'Built a programmatic SEO engine that scales content creation without sacrificing quality or brand voice.',
        metrics: [
            { value: '+1.2M', label: 'Monthly Impressions' },
            { value: '-40%', label: 'CAC Reduction' },
        ],
        accent: '#54C4FF',
        image: '/images/project-2.png',
        caseStudy: [
            {
                type: 'image',
                src: '/images/case-studies/lumina-finance/01-dashboard.png',
                alt: 'Lumina Finance portfolio dashboard',
                caption: 'Portfolio dashboard',
            },
            {
                type: 'image',
                src: '/images/case-studies/lumina-finance/02-management.png',
                alt: 'Lumina Finance asset management screen',
                caption: 'Asset management',
            },
            {
                type: 'image',
                src: '/images/case-studies/lumina-finance/03-reports.png',
                alt: 'Lumina Finance reports and insights',
                caption: 'Reports & insights',
            },
            {
                type: 'image',
                src: '/images/case-studies/lumina-finance/04-about.png',
                alt: 'Lumina Finance about page',
                caption: 'About',
            },
            {
                type: 'image',
                src: '/images/case-studies/lumina-finance/05-mobile.png',
                alt: 'Lumina Finance mobile dashboard',
                caption: 'Mobile view',
            },
        ],
    },
    {
        id: 'velvet-space',
        label: 'Top SEO Site 03',
        name: 'Velvet Space',
        context: 'Architecture • Visual Search Dominance',
        desc: 'Image-heavy portfolio optimized for visual search and load speed, capturing high-intent design leads.',
        metrics: [
            { value: '#1', label: "Rank for 'Luxury Arch'" },
            { value: '85%', label: 'Conversion Lift' },
        ],
        accent: '#FF4D67',
        image: '/images/project-3.png',
        caseStudy: [
            {
                type: 'image',
                src: '/images/case-studies/velvet-space/01-home.png',
                alt: 'Studio Aurum architecture homepage',
                caption: 'Homepage',
            },
            {
                type: 'image',
                src: '/images/case-studies/velvet-space/02-site-overview.jpg',
                alt: 'Studio Aurum multi-page site overview',
                caption: 'Site overview',
            },
            {
                type: 'image',
                src: '/images/case-studies/velvet-space/03-philosophy.png',
                alt: 'Studio Aurum philosophy page',
                caption: 'Philosophy',
            },
            {
                type: 'image',
                src: '/images/case-studies/velvet-space/04-works.png',
                alt: 'Studio Aurum featured works grid',
                caption: 'Featured works',
            },
            {
                type: 'image',
                src: '/images/case-studies/velvet-space/05-contact.png',
                alt: 'Studio Aurum contact page',
                caption: 'Start a project',
            },
            {
                type: 'image',
                src: '/images/case-studies/velvet-space/06-mobile.png',
                alt: 'Studio Aurum mobile portfolio',
                caption: 'Mobile view',
            },
            {
                type: 'video',
                src: '/images/case-studies/velvet-space/studio-tour.mp4',
                poster: '/images/case-studies/velvet-space/01-home.png',
                alt: 'Studio Aurum architecture showcase video',
                caption: 'Studio tour',
            },
        ],
    },
];