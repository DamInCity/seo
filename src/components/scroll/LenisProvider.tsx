import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        try {
            // Check if we're in a browser environment and if the document is ready
            if (typeof window === 'undefined' || !document.documentElement) {
                return;
            }

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                touchMultiplier: 2,
            });

            lenisRef.current = lenis;

            function raf(time: number) {
                if (lenisRef.current) {
                    lenisRef.current.raf(time);
                }
                requestAnimationFrame(raf);
            }

            const frameId = requestAnimationFrame(raf);

            return () => {
                cancelAnimationFrame(frameId);
                if (lenisRef.current) {
                    lenisRef.current.destroy();
                    lenisRef.current = null;
                }
            };
        } catch (err) {
            console.error('Lenis initialization error:', err);
            setError(true);
            // Gracefully fallback without smooth scrolling
            return;
        }
    }, []);

    if (error) {
        console.warn('Lenis smooth scrolling disabled due to initialization error');
    }

    return <>{children}</>;
};

// Hook to access lenis instance if needed elsewhere
// (For this project, we might just need the global scrolling behavior)
