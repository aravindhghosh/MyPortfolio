// src/hooks/useAppleReveal.js
// Lightweight CSS-class-based Apple-style scroll reveal.
// Uses the classes defined in apple-transitions.css
//
// Usage:
//   const revealRef = useAppleReveal();
//   <div ref={revealRef} className="apple-reveal stagger-2"> ... </div>
//
// Or with the HOF for multiple refs:
//   const { revealRef } = useAppleRevealMultiple();

import { useEffect, useRef } from 'react';

/**
 * Single ref — attaches an IntersectionObserver that adds "is-visible"
 * to the element (and all .apple-reveal children if observeChildren=true).
 */
export function useAppleReveal({ threshold = 0.12, once = true, observeChildren = false } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = observeChildren
      ? Array.from(el.querySelectorAll(
          '.apple-reveal, .apple-reveal-left, .apple-reveal-right, .apple-reveal-scale, .apple-reveal-blur'
        ))
      : [el];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold, once, observeChildren]);

  return ref;
}

/**
 * Global auto-init — call once in App.js to auto-observe ALL
 * .apple-reveal elements on the page (no per-component refs needed).
 * Simply import and call useGlobalAppleReveal() in App.js.
 */
export function useGlobalAppleReveal({ threshold = 0.12, once = true } = {}) {
  useEffect(() => {
    const selector = [
      '.apple-reveal',
      '.apple-reveal-left',
      '.apple-reveal-right',
      '.apple-reveal-scale',
      '.apple-reveal-blur',
      '.word-reveal',
    ].join(', ');

    const targets = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold, once]);
}

/**
 * WordReveal helper — wraps each word in a span for per-word animation.
 * Use with the .word-reveal class.
 *
 * Usage in JSX:
 *   <h1 className="word-reveal" ref={wordRevealRef}>
 *     {wrapWords('Hello World from Apple')}
 *   </h1>
 */
export function wrapWords(text) {
  return text.split(' ').map((word, i) => (
    <span key={i} style={{ marginRight: '0.25em' }}>{word}</span>
  ));
}
