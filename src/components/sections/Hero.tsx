import { motion, useScroll, useTransform, type Transition } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const floatTransition: Transition = {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    };

    return (
        <motion.section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
            style={{ opacity }}
        >
            {/* Background Gradients - Responsive */}
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
                style={{
                    background: `
            radial-gradient(circle at 10% -10%, rgba(78, 225, 160, 0.22), transparent 55%),
            radial-gradient(circle at 120% 20%, rgba(84, 196, 255, 0.18), transparent 55%),
            radial-gradient(circle at 50% 120%, rgba(255, 77, 103, 0.18), transparent 55%),
            var(--bg-main)
          `
                }}
            />

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-20 items-center w-full"
                style={{ y }}
            >
                {/* Left Column: Content */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-medium tracking-widest text-xs sm:text-sm uppercase mb-4 sm:mb-6"
                        style={{ color: 'var(--accent)' }}
                    >
                        SEO-First Web Experiences
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 sm:mb-8 tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Top SEO Sites That Look Like Awwwards And Rank Like Crazy.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-base sm:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        We design and build search-obsessed websites that look boutique and behave like performance machines.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
                    >
                        <button
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 relative group overflow-hidden"
                            style={{
                                backgroundColor: 'var(--accent)',
                                color: 'var(--bg-main)'
                            }}
                            data-cursor="cta"
                        >
                            <span className="relative z-10">Show me what's possible</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        <span
                            className="text-xs sm:text-sm max-w-[200px] leading-tight text-center sm:text-left"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            Get a 1‑minute Loom teardown + concept.
                        </span>
                    </motion.div>
                </div>

                {/* Right Column: Floating Metrics - Visible on mobile too */}
                <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
                    {/* Mobile: Horizontal scrolling cards */}
                    <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                        {[
                            { value: "+238%", label: "Organic traffic", delay: 0.6 },
                            { value: "4.7x", label: "Qualified leads", delay: 0.7 },
                            { value: "12/10", label: "Client satisfaction", delay: 0.8 }
                        ].map((tile, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: tile.delay }}
                                className="flex-shrink-0 w-[200px] snap-center p-5 rounded-2xl border"
                                style={{
                                    backgroundColor: 'var(--bg-elevated)',
                                    borderColor: 'var(--border-subtle)'
                                }}
                            >
                                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>{tile.value}</div>
                                <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{tile.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop: Floating 3D tiles */}
                    <div className="hidden lg:block h-full">
                        {/* Tile 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0, y: [-10, 10, -10] }}
                            transition={{
                                opacity: { delay: 0.6, duration: 0.8 },
                                x: { delay: 0.6, duration: 0.8 },
                                y: floatTransition
                            }}
                            className="absolute top-10 right-10 p-6 rounded-2xl shadow-2xl backdrop-blur-sm z-20 w-64 group transition-colors border"
                            style={{
                                backgroundColor: 'var(--bg-elevated)',
                                borderColor: 'var(--border-subtle)'
                            }}
                        >
                            <div className="text-4xl font-bold mb-1 transition-colors" style={{ color: 'var(--accent)' }}>+238%</div>
                            <div className="text-sm uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>Organic traffic in 6 months</div>
                        </motion.div>

                        {/* Tile 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0, y: [15, -15, 15] }}
                            transition={{
                                opacity: { delay: 0.7, duration: 0.8 },
                                x: { delay: 0.7, duration: 0.8 },
                                y: { ...floatTransition, delay: 1 }
                            }}
                            className="absolute top-48 left-0 p-6 rounded-2xl shadow-2xl backdrop-blur-sm z-30 w-56 group transition-colors border"
                            style={{
                                backgroundColor: 'var(--bg-elevated)',
                                borderColor: 'var(--border-subtle)'
                            }}
                        >
                            <div className="text-4xl font-bold mb-1" style={{ color: '#54C4FF' }}>4.7x</div>
                            <div className="text-sm uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>Qualified leads</div>
                        </motion.div>

                        {/* Tile 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0, y: [-5, 5, -5] }}
                            transition={{
                                opacity: { delay: 0.8, duration: 0.8 },
                                x: { delay: 0.8, duration: 0.8 },
                                y: { ...floatTransition, delay: 2 }
                            }}
                            className="absolute bottom-20 right-20 p-6 rounded-2xl shadow-2xl backdrop-blur-sm z-10 w-60 group transition-colors border"
                            style={{
                                backgroundColor: 'var(--bg-elevated)',
                                borderColor: 'var(--border-subtle)'
                            }}
                        >
                            <div className="text-4xl font-bold mb-1" style={{ color: 'var(--danger)' }}>12/10</div>
                            <div className="text-sm uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>Client satisfaction</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};
