// src/components/ScrollProgressBar.jsx
// Apple-style top scroll progress indicator
// Add <ScrollProgressBar /> once inside App.js

import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;
    const update = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};

export default ScrollProgressBar;
