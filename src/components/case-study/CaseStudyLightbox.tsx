import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { CaseStudyMedia, Project } from '../../data/projects';

type CaseStudyLightboxProps = {
    project: Project | null;
    onClose: () => void;
};

export const CaseStudyLightbox = ({ project, onClose }: CaseStudyLightboxProps) => {
    const [index, setIndex] = useState(0);

    const media = project?.caseStudy ?? [];
    const count = media.length;
    const current = media[index];

    const goPrev = useCallback(() => {
        setIndex((i) => (i - 1 + count) % count);
    }, [count]);

    const goNext = useCallback(() => {
        setIndex((i) => (i + 1) % count);
    }, [count]);

    useEffect(() => {
        if (!project) return;
        setIndex(0);
    }, [project?.id]);

    useEffect(() => {
        if (!project) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [project, onClose, goPrev, goNext]);

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {project && current && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.name} case study`}
                    className="fixed inset-0 z-[200] flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <button
                        type="button"
                        className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-default"
                        aria-label="Close case study"
                        onClick={onClose}
                    />

                    <div className="relative z-10 flex flex-col h-full pointer-events-none">
                        <header
                            className="flex items-center justify-between gap-4 px-4 sm:px-8 py-5 pointer-events-auto"
                            style={{ borderBottom: '1px solid var(--border-subtle)' }}
                        >
                            <div className="min-w-0">
                                <p
                                    className="font-mono text-xs uppercase tracking-widest mb-1"
                                    style={{ color: project.accent }}
                                >
                                    {project.label}
                                </p>
                                <h2
                                    className="text-lg sm:text-xl font-bold truncate"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {project.name}
                                </h2>
                                <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>
                                    {current.caption} · {index + 1} of {count}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl leading-none transition-colors hover:bg-white/10"
                                style={{
                                    color: 'var(--text-primary)',
                                    border: '1px solid var(--border-subtle)',
                                }}
                                aria-label="Close"
                                data-cursor="link"
                            >
                                ×
                            </button>
                        </header>

                        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-6 min-h-0 pointer-events-auto">
                            {count > 1 && (
                                <button
                                    type="button"
                                    onClick={goPrev}
                                    className="hidden sm:flex shrink-0 w-12 h-12 rounded-full items-center justify-center text-2xl transition-colors hover:bg-white/10"
                                    style={{
                                        color: project.accent,
                                        border: '1px solid var(--border-subtle)',
                                    }}
                                    aria-label="Previous"
                                    data-cursor="link"
                                >
                                    ‹
                                </button>
                            )}

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${project.id}-${index}`}
                                    className="flex-1 flex items-center justify-center max-h-[calc(100vh-11rem)] w-full max-w-6xl"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <CaseStudySlide item={current} accent={project.accent} />
                                </motion.div>
                            </AnimatePresence>

                            {count > 1 && (
                                <button
                                    type="button"
                                    onClick={goNext}
                                    className="hidden sm:flex shrink-0 w-12 h-12 rounded-full items-center justify-center text-2xl transition-colors hover:bg-white/10"
                                    style={{
                                        color: project.accent,
                                        border: '1px solid var(--border-subtle)',
                                    }}
                                    aria-label="Next"
                                    data-cursor="link"
                                >
                                    ›
                                </button>
                            )}
                        </div>

                        {count > 1 && (
                            <footer className="px-4 sm:px-8 py-4 pointer-events-auto">
                                <div className="flex gap-2 overflow-x-auto pb-1 max-w-6xl mx-auto justify-center">
                                    {media.map((item, i) => (
                                        <button
                                            key={`${item.src}-${i}`}
                                            type="button"
                                            onClick={() => setIndex(i)}
                                            className="shrink-0 rounded-lg overflow-hidden transition-all"
                                            style={{
                                                width: 72,
                                                height: 48,
                                                opacity: i === index ? 1 : 0.45,
                                                outline:
                                                    i === index
                                                        ? `2px solid ${project.accent}`
                                                        : '2px solid transparent',
                                                outlineOffset: 2,
                                            }}
                                            aria-label={`View ${item.caption}`}
                                            aria-current={i === index}
                                            data-cursor="link"
                                        >
                                            <Thumb item={item} />
                                        </button>
                                    ))}
                                </div>
                                <div className="flex sm:hidden justify-center gap-4 mt-3">
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        className="text-sm font-bold uppercase tracking-widest"
                                        style={{ color: project.accent }}
                                        data-cursor="link"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className="text-sm font-bold uppercase tracking-widest"
                                        style={{ color: project.accent }}
                                        data-cursor="link"
                                    >
                                        Next
                                    </button>
                                </div>
                            </footer>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

const CaseStudySlide = ({ item, accent }: { item: CaseStudyMedia; accent: string }) => {
    if (item.type === 'video') {
        return (
            <video
                key={item.src}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                className="max-w-full max-h-full rounded-xl shadow-2xl border"
                style={{ borderColor: 'var(--border-subtle)' }}
            >
                <track kind="captions" />
            </video>
        );
    }

    return (
        <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border"
            style={{ borderColor: accent }}
        />
    );
};

const Thumb = ({ item }: { item: CaseStudyMedia }) => {
    if (item.type === 'video') {
        return (
            <div
                className="w-full h-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
            >
                ▶
            </div>
        );
    }

    return (
        <img src={item.src} alt="" className="w-full h-full object-cover" loading="lazy" />
    );
};