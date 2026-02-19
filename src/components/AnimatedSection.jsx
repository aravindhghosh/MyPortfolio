// src/components/AnimatedSection.jsx
// Drop-in wrapper for Apple-style scroll reveal on any section
//
// Usage:
//   <AnimatedSection type="fadeUp" delay={100}>
//     <YourContent />
//   </AnimatedSection>

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * AnimatedSection — wraps any content with a scroll-triggered animation
 *
 * Props:
 *  type     : 'fadeUp' | 'fadeDown' | 'fadeIn' | 'scaleUp' | 'slideLeft' | 'slideRight' | 'blur'
 *  delay    : number (ms) — useful for staggering siblings
 *  threshold: number 0-1 — how much of the element must be visible to trigger
 *  once     : bool — if false, re-animates when scrolled out & back
 *  className: string — extra Tailwind classes on the wrapper div
 *  as       : string — HTML tag for wrapper (default 'div')
 */
const AnimatedSection = ({
  children,
  type = 'fadeUp',
  delay = 0,
  threshold = 0.12,
  once = true,
  className = '',
  as: Tag = 'div',
}) => {
  const { ref, style } = useScrollAnimation({ type, delay, threshold, once });

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
};

export default AnimatedSection;
