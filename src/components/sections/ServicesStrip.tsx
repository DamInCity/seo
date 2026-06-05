import { motion } from 'framer-motion';

const services = [
    {
        title: "Strategy & Positioning",
        items: ["Market Analysis", "Competitor Audit", "Brand Narrative"]
    },
    {
        title: "Technical SEO & Performance",
        items: ["Core Web Vitals", "Next.js Optimization", "Schema Architecture"]
    },
    {
        title: "Conversion & Story",
        items: ["UX / UI Design", "Copywriting", "Funnel Optimization"]
    }
];

export const ServicesStrip = () => {
    return (
        <section
            id="services"
            className="py-16 md:py-24 lg:py-32 relative z-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-main)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        What we do
                    </h2>
                    <p
                        className="mt-2 md:mt-0 text-sm md:text-base"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        In 10 seconds
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                            className="p-6 md:p-8 rounded-[18px] group transition-all duration-500 hover:-translate-y-1 border"
                            style={{
                                backgroundColor: 'var(--bg-elevated)',
                                borderColor: 'var(--border-subtle)',
                                boxShadow: 'var(--card-shadow)'
                            }}
                            data-cursor="link"
                        >
                            <h3
                                className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 relative inline-block"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {service.title}
                                <span
                                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#4EE1A0] to-[#54C4FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                />
                            </h3>

                            <ul className="space-y-2 md:space-y-3">
                                {service.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="group-hover:translate-x-1 transition-all duration-300 flex items-center gap-3 text-sm md:text-base"
                                        style={{ color: 'var(--text-muted)' }}
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: 'var(--accent)' }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
