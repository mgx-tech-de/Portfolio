import { useCallback, useState } from 'react';
import { LenisProvider } from './lib/lenis';
import { SkipLink } from './components/layout/SkipLink';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';

export default function App() {
  const [pastHero, setPastHero] = useState(false);
  const handlePinProgress = useCallback((value: boolean) => setPastHero(value), []);

  return (
    <LenisProvider>
      <SkipLink />
      <Navbar solid={pastHero} />
      <main id="main">
        <Hero onPinProgress={handlePinProgress} />
      </main>
      <Footer />
    </LenisProvider>
  );
}
