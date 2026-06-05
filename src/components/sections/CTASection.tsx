import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const CTASection = () => {
    const [showSticky, setShowSticky] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on('change', (latest) => {
            const isPastHero = latest > 800;
            const isAtBottom = document.body.scrollHeight - latest - window.innerHeight < 600;
            setShowSticky(isPastHero && !isAtBottom);
        });
    }, [scrollY]);

    return (
        <>
            <section
                id="cta"
                className="py-16 md:py-24 lg:py-32 relative transition-colors duration-300"
                style={{ backgroundColor: 'var(--bg-main)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div
                        className="relative overflow-hidden rounded-2xl md:rounded-[24px] p-6 sm:p-8 lg:p-16 border"
                        style={{ borderColor: 'var(--border-subtle)' }}
                    >
                        {/* Glass Background */}
                        <div
                            className="absolute inset-0 backdrop-blur-xl z-0"
                            style={{ backgroundColor: 'var(--surface-glass)' }}
                        />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-20">
                            {/* Left: Copy */}
                            <div>
                                <span
                                    className="font-medium tracking-widest text-xs sm:text-sm uppercase mb-4 sm:mb-6 block"
                                    style={{ color: 'var(--accent)' }}
                                >
                                    Ready when you are
                                </span>
                                <h2
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Want a Top SEO Site that looks like this?
                                </h2>
                                <p
                                    className="text-base md:text-lg leading-relaxed mb-6 md:mb-8"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    Get a comprehensive audit and a design concept that bridges the gap between Awwwards-winning aesthetics and technical SEO dominance.
                                </p>
                                <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4EE1A0] to-[#54C4FF] border-2" style={{ borderColor: 'var(--bg-main)' }} />
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#54C4FF] to-[#FF4D67] border-2" style={{ borderColor: 'var(--bg-main)' }} />
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4D67] to-[#4EE1A0] border-2" style={{ borderColor: 'var(--bg-main)' }} />
                                    </div>
                                    <span>Join 40+ brands growing today</span>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label
                                            className="text-xs uppercase font-bold tracking-widest"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-lg p-3 md:p-4 outline-none transition-all border text-sm md:text-base"
                                            style={{
                                                backgroundColor: 'var(--bg-main)',
                                                borderColor: 'var(--border-subtle)',
                                                color: 'var(--text-primary)'
                                            }}
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            className="text-xs uppercase font-bold tracking-widest"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            Work Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full rounded-lg p-3 md:p-4 outline-none transition-all border text-sm md:text-base"
                                            style={{
                                                backgroundColor: 'var(--bg-main)',
                                                borderColor: 'var(--border-subtle)',
                                                color: 'var(--text-primary)'
                                            }}
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className="text-xs uppercase font-bold tracking-widest"
                                        style={{ color: 'var(--text-muted)' }}
                                    >
                                        Website URL
                                    </label>
                                    <input
                                        type="url"
                                        className="w-full rounded-lg p-3 md:p-4 outline-none transition-all border text-sm md:text-base"
                                        style={{
                                            backgroundColor: 'var(--bg-main)',
                                            borderColor: 'var(--border-subtle)',
                                            color: 'var(--text-primary)'
                                        }}
                                        placeholder="https://"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className="text-xs uppercase font-bold tracking-widest"
                                        style={{ color: 'var(--text-muted)' }}
                                    >
                                        Main Goal
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="w-full rounded-lg p-3 md:p-4 outline-none transition-all resize-none border text-sm md:text-base"
                                        style={{
                                            backgroundColor: 'var(--bg-main)',
                                            borderColor: 'var(--border-subtle)',
                                            color: 'var(--text-primary)'
                                        }}
                                        placeholder="Increase organic traffic..."
                                    />
                                </div>

                                <button
                                    className="w-full font-bold py-3 md:py-4 rounded-lg transition-shadow duration-300 mt-2 hover:shadow-lg text-sm md:text-base"
                                    style={{
                                        backgroundColor: 'var(--accent)',
                                        color: 'var(--bg-main)'
                                    }}
                                    data-cursor="cta"
                                >
                                    Get my teardown
                                </button>
                                <p
                                    className="text-xs text-center pt-2"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    No commitment. Delivered within 24 hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky CTA Bar - Hidden on mobile */}
            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 w-full z-40 hidden md:block"
                    >
                        <div className="mx-auto max-w-2xl mb-6 px-4">
                            <div
                                className="backdrop-blur-md border rounded-full p-2 pl-6 flex items-center justify-between shadow-2xl"
                                style={{
                                    backgroundColor: 'var(--surface-glass)',
                                    borderColor: 'var(--border-subtle)'
                                }}
                            >
                                <span
                                    className="text-sm font-medium mr-4"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Want a site that looks this good and prints leads?
                                </span>
                                <button
                                    onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                                    style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-main)' }}
                                >
                                    Let's talk
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
