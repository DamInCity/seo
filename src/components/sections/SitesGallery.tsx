import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
    {
        label: "Top SEO Site 01",
        name: "Acme Analytics",
        context: "B2B SaaS • Technical SEO + conversion redesign",
        desc: "A complete overhaul focusing on core web vitals and semantic structure, resulting in massive organic growth.",
        metrics: [
            { value: "+230%", label: "Organic traffic" },
            { value: "3.9x", label: "Demo requests" }
        ],
        accent: "#4EE1A0",
        image: "/images/project-1.png"
    },
    {
        label: "Top SEO Site 02",
        name: "Lumina Finance",
        context: "Fintech • Content Engine Architecture",
        desc: "Built a programmatic SEO engine that scales content creation without sacrificing quality or brand voice.",
        metrics: [
            { value: "+1.2M", label: "Monthly Impressions" },
            { value: "-40%", label: "CAC Reduction" }
        ],
        accent: "#54C4FF",
        image: "/images/project-2.png"
    },
    {
        label: "Top SEO Site 03",
        name: "Velvet Space",
        context: "Architecture • Visual Search Dominance",
        desc: "Image-heavy portfolio optimized for visual search and load speed, capturing high-intent design leads.",
        metrics: [
            { value: "#1", label: "Rank for 'Luxury Arch'" },
            { value: "85%", label: "Conversion Lift" }
        ],
        accent: "#FF4D67",
        image: "/images/project-3.png"
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax transforms
    const mockupY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const chipY = useTransform(scrollYProgress, [0, 1], [150, -180]);
    const chip2Y = useTransform(scrollYProgress, [0, 1], [200, -120]);

    return (
        <section
            ref={ref}
            className="min-h-screen w-full snap-start flex items-center justify-center relative overflow-hidden border-b py-24"
            style={{ scrollSnapAlign: 'start', backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-subtle)' }}
        >
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-10 pointer-events-none"
                style={{ backgroundColor: project.accent }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Visual Mockup (Left) */}
                <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
                    {/* Main Image */}
                    <motion.div
                        style={{ y: mockupY }}
                        className="w-full max-w-xl relative"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-auto rounded-2xl shadow-2xl border"
                            style={{ borderColor: 'var(--border-subtle)' }}
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl pointer-events-none" />
                    </motion.div>

                    {/* Floating Chips */}
                    <motion.div
                        style={{ y: chipY, backgroundColor: 'var(--surface-glass)', borderColor: 'var(--border-subtle)' }}
                        className="absolute -right-4 top-20 px-4 py-3 rounded-lg shadow-xl backdrop-blur-md z-20 border"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-sm font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{project.metrics[0].value} {project.metrics[0].label}</span>
                    </motion.div>

                    <motion.div
                        style={{ y: chip2Y, backgroundColor: 'var(--surface-glass)', borderColor: 'var(--border-subtle)' }}
                        className="absolute -left-8 bottom-32 px-4 py-3 rounded-lg shadow-xl backdrop-blur-md z-20 border"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="text-sm font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{project.metrics[1].value} {project.metrics[1].label}</span>
                    </motion.div>
                </div>

                {/* Project Info (Right) */}
                <motion.div
                    style={{ y: textY }}
                    className="order-1 lg:order-2 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-mono text-xs mb-4 tracking-widest uppercase opacity-80" style={{ color: project.accent }}>{project.label}</span>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-2 leading-tight" style={{ color: 'var(--text-primary)' }}>{project.name}</h3>
                    <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>{project.context}</p>
                    <div className="w-12 h-1 mb-8 rounded-full" style={{ backgroundColor: 'var(--border-subtle)' }} />
                    <p className="leading-relaxed max-w-md text-lg" style={{ color: 'var(--text-muted)' }}>
                        {project.desc}
                    </p>
                    <a
                        href="#"
                        className="mt-8 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group"
                        style={{ color: project.accent }}
                        data-cursor="link"
                    >
                        View Case Study
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export const SitesGallery = () => {
    return (
        <div id="sites" className="snap-y snap-mandatory scroll-smooth relative z-10">
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </div>
    );
};
