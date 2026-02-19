// src/hooks/useScrollAnimation.js
// Apple-style scroll animations hook
// Usage: const { ref, style } = useScrollAnimation({ type: 'fadeUp' })

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useScrollAnimation — Intersection Observer based scroll reveal
 * @param {Object} options
 * @param {'fadeUp'|'fadeIn'|'scaleUp'|'slideLeft'|'slideRight'|'fadeDown'} options.type
 * @param {number} options.delay  - delay in ms (default 0)
 * @param {number} options.threshold - visibility threshold 0-1 (default 0.15)
 * @param {boolean} options.once  - animate only once (default true)
 */
export function useScrollAnimation({
  type = 'fadeUp',
  delay = 0,
  threshold = 0.15,
  once = true,
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const transitions = {
    fadeUp: {
      hidden: { opacity: 0, transform: 'translateY(40px)' },
      visible: { opacity: 1, transform: 'translateY(0px)' },
    },
    fadeDown: {
      hidden: { opacity: 0, transform: 'translateY(-40px)' },
      visible: { opacity: 1, transform: 'translateY(0px)' },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scaleUp: {
      hidden: { opacity: 0, transform: 'scale(0.85)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    slideLeft: {
      hidden: { opacity: 0, transform: 'translateX(60px)' },
      visible: { opacity: 1, transform: 'translateX(0px)' },
    },
    slideRight: {
      hidden: { opacity: 0, transform: 'translateX(-60px)' },
      visible: { opacity: 1, transform: 'translateX(0px)' },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(12px)', transform: 'translateY(20px)' },
      visible: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' },
    },
  };

  const t = transitions[type] || transitions.fadeUp;

  const style = {
    ...(visible ? t.visible : t.hidden),
    transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return { ref, style, visible };
}

/**
 * useParallax — scroll-driven parallax offset
 * @param {number} speed - parallax intensity (0.1 = subtle, 0.5 = dramatic)
 */
export function useParallax(speed = 0.2) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(centerY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const style = {
    transform: `translateY(${offset}px)`,
    willChange: 'transform',
  };

  return { ref, style };
}

/**
 * useScrollProgress — returns scroll progress of a section (0 to 1)
 * Useful for scroll-driven text/scale reveals like Apple product pages
 */
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when top enters viewport, 1 when bottom exits
      const p = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height)));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, progress };
}

/**
 * useStaggerChildren — returns staggered animation styles for a list of items
 * @param {number} count - number of children
 * @param {number} stagger - delay between items in ms (default 100)
 * @param {boolean} visible - whether the parent is visible
 */
export function useStaggerChildren(count, stagger = 100, visible = true) {
  return Array.from({ length: count }, (_, i) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(30px)',
    transition: `opacity 0.6s ease ${i * stagger}ms, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * stagger}ms`,
  }));
}
