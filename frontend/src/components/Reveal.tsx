import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { gsap } from '../lib/gsap-setup';

interface RevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
}

export function Reveal({ children, className, id, ariaLabelledby }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current;
      if (!el || el.children.length === 0) return;
      gsap.fromTo(
        Array.from(el.children),
        { y: 34, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className} id={id} aria-labelledby={ariaLabelledby}>
      {children}
    </div>
  );
}
