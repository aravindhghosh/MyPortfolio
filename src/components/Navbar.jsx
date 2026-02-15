import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const resolvedDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}

    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className={`rounded-full overflow-hidden border border-white/70 dark:border-slate-700 shadow-md transition-all duration-300 ${
                isScrolled
                  ? 'w-8 h-8 sm:w-9 sm:h-9 opacity-100 scale-100'
                  : 'w-0 h-0 opacity-0 scale-75'
              }`}
              aria-label="Go to top"
              title="Back to top"
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 truncate max-w-[42vw] sm:max-w-none"
            >
              {personalInfo.name.split(' ')[0]}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-teal-300 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cop-light-button inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold text-white shadow-md"
                aria-label="Download resume"
                title="Download Resume"
              >
                <Download size={14} />
                <span className="sm:hidden">CV</span>
                <span className="hidden sm:inline">Resume</span>
              </a>
            )}

            <button
              onClick={toggle}
              className={`relative h-7 w-12 sm:h-8 sm:w-14 rounded-full border transition-colors duration-200 ${
                resolvedDark
                  ? 'bg-slate-800 border-slate-600'
                  : 'bg-slate-200 border-slate-300'
              }`}
              aria-label="Toggle theme"
              title={resolvedDark ? "Switch to light" : "Switch to dark"}
            >
              <span
                className={`absolute inset-0 rounded-full transition-opacity duration-200 ${
                  resolvedDark ? 'opacity-100 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_45%)]' : 'opacity-100 bg-[radial-gradient(circle_at_80%_30%,rgba(251,191,36,0.22),transparent_45%)]'
                }`}
              />
              <span
                className={`absolute top-1/2 h-6 w-6 sm:h-7 sm:w-7 -translate-y-1/2 rounded-full ring-1 transition-all duration-200 ease-out ${
                  resolvedDark ? 'right-0.5 bg-slate-950 ring-slate-500' : 'left-0.5 bg-white ring-slate-300'
                }`}
              >
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                    resolvedDark ? 'rotate-0 scale-100' : 'rotate-12 scale-100'
                  }`}
                >
                  {resolvedDark ? (
                    <Moon size={14} className="text-indigo-300" />
                  ) : (
                    <Sun size={14} className="text-amber-500" />
                  )}
                </span>
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-slate-700 shadow-lg"
>
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-gray-700 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-teal-300 rounded-lg font-medium transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
