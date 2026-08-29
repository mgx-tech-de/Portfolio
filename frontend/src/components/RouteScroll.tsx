import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../lib/lenis';
import { ScrollTrigger } from '../lib/gsap-setup';

export function RouteScroll() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [pathname, lenis]);

  return null;
}
