import { useCallback, useState } from 'react';
import { LenisProvider } from './lib/lenis';
import { SkipLink } from './components/layout/SkipLink';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [pastHero, setPastHero] = useState(false);
  const handlePinProgress = useCallback((value: boolean) => setPastHero(value), []);

  return (
    <LenisProvider>
      <SkipLink />
      <Navbar solid={pastHero} />
      <main id="main">
        <Hero onPinProgress={handlePinProgress} />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LenisProvider>
  );
}
