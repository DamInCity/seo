import { CustomCursor } from './components/cursor/CustomCursor';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { LenisProvider } from './components/scroll/LenisProvider';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { ServicesStrip } from './components/sections/ServicesStrip';
import { SitesGallery } from './components/sections/SitesGallery';
import { ThinkingMarquee } from './components/sections/ThinkingMarquee';
import { ThemeProvider } from './hooks/useTheme';
import { ThemeToggle } from './components/ui/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <div
          className="relative w-full max-w-[100vw] overflow-hidden transition-colors duration-300"
          style={{
            backgroundColor: 'var(--bg-main)',
            color: 'var(--text-primary)'
          }}
        >
          <CustomCursor />
          <ScrollProgress />
          <ThemeToggle />

          <main className="flex flex-col w-full">
            <Hero />
            <ServicesStrip />
            <SitesGallery />
            <ThinkingMarquee />
            <CTASection />
          </main>

          <Footer />
        </div>
      </LenisProvider>
    </ThemeProvider>
  )
}

export default App
