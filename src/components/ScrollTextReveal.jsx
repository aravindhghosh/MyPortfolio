// src/components/ScrollTextReveal.jsx
// Apple-style "scroll to reveal text" — text fades/scales in as user scrolls
// through a tall pinned section, just like apple.com product pages.
//
// Usage:
//   <ScrollTextReveal
//     lines={['Built for speed.', 'Designed for humans.', 'Powered by AI.']}
//   />

import React, { useEffect, useRef, useState } from 'react';

const ScrollTextReveal = ({
  lines = [],
  height = '300vh',         // height of the scroll container (more = slower reveal)
  subtitle = '',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const totalScroll = el.offsetHeight - window.innerHeight;
        // progress: 0 at start, 1 at end
        const p = Math.min(1, Math.max(0, -rect.top / totalScroll));
        setProgress(p);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Each line gets its own progress window
  const lineCount = lines.length;

  const getLineStyle = (index) => {
    const start = index / (lineCount + 1);
    const end = (index + 1) / (lineCount + 1);
    const p = Math.min(1, Math.max(0, (progress - start) / (end - start)));

    return {
      opacity: p,
      transform: `translateY(${(1 - p) * 30}px)`,
      filter: `blur(${(1 - p) * 6}px)`,
      transition: 'none', // scroll-driven, no CSS transition
    };
  };

  return (
    <div
      ref={containerRef}
      style={{ height }}
      className={`relative ${className}`}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 50%,
              rgba(99,102,241,${progress * 0.08}) 0%,
              transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {lines.map((line, i) => (
            <div
              key={i}
              style={getLineStyle(i)}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2
                         bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400
                         bg-clip-text text-transparent"
            >
              {line}
            </div>
          ))}

          {subtitle && (
            <div
              style={{
                opacity: Math.min(1, Math.max(0, (progress - 0.75) / 0.25)),
                transform: `translateY(${Math.max(0, (1 - (progress - 0.75) / 0.25) * 20)}px)`,
              }}
              className="mt-6 text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium"
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div
          style={{ opacity: progress < 0.05 ? 1 : 0, transition: 'opacity 0.5s ease' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ScrollTextReveal;
