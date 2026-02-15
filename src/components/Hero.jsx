import React, { useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/button';
import GamesLauncher from './GamesLauncher';

const Hero = () => {
  const [gamesUnlocked, setGamesUnlocked] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("gamesUnlocked") === "true";
  });
  const secretClicksRef = useRef(0);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSecretClick = () => {
    secretClicksRef.current += 1;
    if (secretClicksRef.current >= 5) {
      const next = !gamesUnlocked;
      localStorage.setItem("gamesUnlocked", next ? "true" : "false");
      setGamesUnlocked(next);
      secretClicksRef.current = 0;
    }
  };

  const heroStars = Array.from({ length: 84 }, (_, index) => {
    const top = 6 + ((index * 19) % 84);
    const left = 4 + ((index * 29) % 92);
    const size = 1.4 + ((index % 5) * 0.45);
    return {
      top: `${top}%`,
      left: `${left}%`,
      size: `${size}px`,
      delay: `${(index % 9) * 0.33}s`,
      duration: `${2.2 + (index % 6) * 0.45}s`,
      bright: index % 4 === 0 || index % 7 === 0,
    };
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 pt-32 pb-12 sm:pt-28 sm:pb-16">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div> */}

      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        {/* Whole-hero theme wash */}
        <div className="absolute inset-0 dark:hidden opacity-50 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.8)_0%,rgba(191,219,254,0.35)_28%,transparent_62%)]"></div>
        <div className="absolute inset-0 hidden dark:block opacity-80 bg-[radial-gradient(circle_at_52%_18%,rgba(148,163,184,0.22)_0%,rgba(30,41,59,0.48)_34%,transparent_68%)]"></div>

        {/* Dark mode: stars */}
        <div className="absolute inset-0 hidden dark:block pointer-events-none">
          {heroStars.map((star, index) => (
            <span
              key={`hero-star-${index}`}
              className={`hero-star absolute rounded-full ${star.bright ? 'hero-star-bright' : ''}`}
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            ></span>
          ))}
        </div>

        {/* Racing speed lines - hidden on mobile, reduced opacity */}
        <div className="absolute inset-0 overflow-hidden hidden md:block dark:hidden">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-20 animate-speed-line"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-25 animate-speed-line animation-delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20 animate-speed-line animation-delay-2000"></div>
        </div>

        {/* Floating 3D-style cards - Python/Code - MORE BLUR & LESS OPACITY */}
        <div className="hidden hero-float-card hero-card-code animate-float-3d">
          <div className="relative w-full h-full bg-white/32 dark:bg-slate-900/36 backdrop-blur-xl rounded-2xl border border-emerald-200/45 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500 opacity-78">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent rounded-2xl"></div>
            <div className="p-3 md:p-6">
              <div className="text-emerald-700 font-mono text-[10px] md:text-sm space-y-1 md:space-y-2 opacity-50">
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-emerald-600">●</span>
                  <span className="truncate">import tensorflow as tf</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-blue-600">●</span>
                  <span className="truncate">def optimize_portfolio():</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 ml-3 md:ml-6">
                  <span className="text-purple-600">●</span>
                  <span className="truncate">return max_profit</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-2xl md:text-4xl opacity-20">🐍</div>
          </div>
        </div>

        {/* Stock/Trading Dashboard Card - MORE BLUR & LESS OPACITY */}
        <div className="hidden hero-float-card hero-card-stock animate-float-3d animation-delay-2000">
          <div className="relative w-full h-full bg-white/32 dark:bg-slate-900/36 backdrop-blur-xl rounded-2xl border border-blue-200/45 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 opacity-78">
            <div className="p-3 md:p-6">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="text-blue-700 font-bold text-sm md:text-lg opacity-70">PORTFOLIO</span>
                <span className="text-emerald-600 text-xs md:text-sm font-semibold opacity-70">+12.5% ↑</span>
              </div>
              <svg className="w-full h-16 md:h-24 opacity-75" viewBox="0 0 200 60">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 L20,45 L40,42 L60,35 L80,38 L100,25 L120,28 L140,20 L160,22 L180,15 L200,18"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  className="animate-draw-chart"
                />
                <path
                  d="M0,50 L20,45 L40,42 L60,35 L80,38 L100,25 L120,28 L140,20 L160,22 L180,15 L200,18 L200,60 L0,60 Z"
                  fill="url(#chartGradient)"
                  className="animate-draw-chart"
                />
              </svg>
              <div className="flex gap-2 md:gap-4 text-[10px] md:text-xs mt-1 md:mt-2 opacity-80">
                <div className="text-slate-600">NIFTY <span className="text-emerald-600 font-semibold">+2.1%</span></div>
                <div className="text-slate-600">SENSEX <span className="text-emerald-600 font-semibold">+1.8%</span></div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-xl md:text-3xl opacity-20">📈</div>
          </div>
        </div>

        {/* Gaming Controller Card - MORE BLUR & LESS OPACITY */}
        <div className="hidden hero-float-card hero-card-game animate-float-3d animation-delay-3000">
          <div className="relative w-full h-full bg-white/32 dark:bg-slate-900/36 backdrop-blur-xl rounded-2xl border border-purple-200/45 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 opacity-78">
            <div className="p-3 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="text-xl md:text-3xl opacity-50">🎮</div>
                <div>
                  <div className="text-purple-700 font-bold text-sm md:text-base opacity-70">LEVEL 99</div>
                  <div className="text-slate-500 text-[10px] md:text-xs opacity-60">Achievement Unlocked</div>
                </div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <div className="flex justify-between text-[10px] md:text-xs text-slate-600 opacity-60">
                  <span>XP</span>
                  <span className="text-purple-700 font-semibold">15,420 / 20,000</span>
                </div>
                <div className="w-full h-1.5 md:h-2 bg-slate-200/60 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse-slow opacity-70"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-lg md:text-2xl opacity-20">👾</div>
          </div>
        </div>

        {/* Altroz Racer Card - MORE BLUR & LESS OPACITY */}
        <div className="hidden hero-float-card hero-card-altroz animate-float-3d animation-delay-1500">
          <div className="relative w-full h-full bg-white/32 dark:bg-slate-900/36 backdrop-blur-xl rounded-2xl border border-orange-200/45 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden opacity-78">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 via-red-50/30 to-orange-50/30 animate-shimmer"></div>
            <div className="p-3 md:p-6 relative z-10">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <div>
                  <div className="text-orange-600 font-bold text-sm md:text-xl opacity-70">ALTROZ RACER</div>
                  <div className="text-slate-600 text-[10px] md:text-sm opacity-60">Performance Mode Active</div>
                </div>
                <div className="text-2xl md:text-4xl opacity-50">🏎️</div>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-3 mt-2 md:mt-4">
                <div className="bg-white/40 rounded-lg p-2 md:p-3 border border-orange-200/30">
                  <div className="text-orange-600 text-lg md:text-2xl font-bold opacity-70">145</div>
                  <div className="text-slate-500 text-[10px] md:text-xs opacity-60">km/h</div>
                </div>
                <div className="bg-white/40 rounded-lg p-2 md:p-3 border border-red-200/30">
                  <div className="text-red-600 text-lg md:text-2xl font-bold opacity-70">10.8</div>
                  <div className="text-slate-500 text-[10px] md:text-xs opacity-60">0-100s</div>
                </div>
                <div className="bg-white/40 rounded-lg p-2 md:p-3 border border-yellow-200/30">
                  <div className="text-yellow-600 text-lg md:text-2xl font-bold opacity-70">120</div>
                  <div className="text-slate-500 text-[10px] md:text-xs opacity-60">bhp</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-orange-400/30 to-transparent animate-speed-line-reverse hidden md:block"></div>
          </div>
        </div>

        {/* Dog Paw Card - MORE BLUR & LESS OPACITY */}
        <div className="hidden hero-float-card hero-card-dog animate-float-3d animation-delay-4000">
          <div className="relative w-full h-full bg-white/32 dark:bg-slate-900/36 backdrop-blur-xl rounded-2xl border border-amber-200/45 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-500 opacity-78">
            <div className="p-3 md:p-6 text-center">
              {/* Dog paw print made with CSS */}
              <div className="relative w-14 h-14 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 animate-bounce-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-6 md:w-6 md:h-8 bg-amber-600/60 rounded-full"></div>
                <div className="absolute top-3 left-1 md:top-4 md:left-2 w-4 h-5 md:w-5 md:h-6 bg-amber-600/60 rounded-full transform -rotate-12"></div>
                <div className="absolute top-3 right-1 md:top-4 md:right-2 w-4 h-5 md:w-5 md:h-6 bg-amber-600/60 rounded-full transform rotate-12"></div>
                <div className="absolute bottom-1 left-3 md:bottom-2 md:left-4 w-3 h-4 md:w-4 md:h-5 bg-amber-600/60 rounded-full transform -rotate-6"></div>
                <div className="absolute bottom-1 right-3 md:bottom-2 md:right-4 w-3 h-4 md:w-4 md:h-5 bg-amber-600/60 rounded-full transform rotate-6"></div>
              </div>
              <div className="text-amber-700 font-semibold text-xs md:text-base opacity-70">Best Friends</div>
              <div className="text-slate-500 text-[10px] md:text-xs mt-0.5 md:mt-1 opacity-60">Unconditional Love</div>
            </div>
            {/* Smaller paw print in corner */}
            <div className="absolute -bottom-1 -right-1 opacity-30 animate-wiggle">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2.5 md:w-2.5 md:h-3.5 bg-amber-600 rounded-full"></div>
                <div className="absolute top-1.5 left-0.5 md:top-2 w-1.5 h-2 md:w-2 md:h-2.5 bg-amber-600 rounded-full transform -rotate-12"></div>
                <div className="absolute top-1.5 right-0.5 md:top-2 w-1.5 h-2 md:w-2 md:h-2.5 bg-amber-600 rounded-full transform rotate-12"></div>
                <div className="absolute bottom-0 left-1 md:left-1.5 w-1 h-1.5 md:w-1.5 md:h-2 bg-amber-600 rounded-full"></div>
                <div className="absolute bottom-0 right-1 md:right-1.5 w-1 h-1.5 md:w-1.5 md:h-2 bg-amber-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Card - MORE BLUR & LESS OPACITY */}
        <div className="hidden hero-float-card hero-card-terminal animate-float-3d animation-delay-2500">
          <div className="relative w-full h-full bg-white/32 dark:bg-slate-900/36 backdrop-blur-xl rounded-2xl border border-slate-200/45 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500 opacity-78">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/40 to-transparent rounded-2xl"></div>
            <div className="p-3 md:p-5">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70"></span>
              </div>
              <div className="space-y-2 text-[10px] md:text-xs font-mono text-slate-700/70">
                <div>$ git status</div>
                <div className="text-emerald-600/70">On branch main</div>
                <div className="text-slate-600/70">nothing to commit, working tree clean</div>
              </div>
            </div>
            <div className="absolute bottom-2 right-3 text-xl md:text-2xl opacity-20">⌘</div>
          </div>
        </div>

        {/* Floating orbs with glassmorphism - MUCH REDUCED OPACITY */}
        <div className="absolute top-20 left-1/3 w-40 h-40 md:top-32 md:left-1/3 md:w-64 md:h-64 bg-blue-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-orbit"></div>
        <div className="absolute bottom-40 right-1/3 w-48 h-48 md:bottom-32 md:right-1/3 md:w-72 md:h-72 bg-purple-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-orbit animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 md:w-56 md:h-56 bg-emerald-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-orbit animation-delay-4000"></div>

        {/* Particles - hidden on mobile for performance */}
        <div className="hidden md:block absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500/40 rounded-full animate-particle"></div>
        <div className="hidden md:block absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-purple-500/40 rounded-full animate-particle animation-delay-1000"></div>
        <div className="hidden md:block absolute bottom-1/3 right-1/2 w-2 h-2 bg-emerald-500/40 rounded-full animate-particle animation-delay-2000"></div>
        <div className="hidden md:block absolute top-2/3 left-2/3 w-1 h-1 bg-orange-500/40 rounded-full animate-particle animation-delay-3000"></div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image with Orbit Ring */}
          <div className="mb-8 inline-block">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
              {/* Sun / Moon aura */}
              <div className="absolute -inset-6 rounded-full bg-amber-300/55 blur-2xl hero-sun-glow dark:hidden"></div>
              <div className="absolute hidden dark:block -inset-4 rounded-full bg-slate-100/10 blur-xl"></div>
              <div className="absolute hidden dark:block inset-[-18%] rounded-full border border-slate-200/30"></div>
              {/* Big ring */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-300/65 dark:border-slate-600/85 shadow-[0_0_45px_rgba(251,191,36,0.38)] dark:shadow-[0_0_30px_rgba(148,163,184,0.25)]"></div>
              {/* Orbiting planets (solar-system inspired colors) */}
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-orange-300/90 shadow-[0_0_8px_rgba(251,191,36,0.55)] animate-planet-orbit"></div>
                <div className="absolute left-1/2 top-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500/85 ring-1 ring-emerald-300/80 shadow-md animate-planet-orbit-slow"></div>
                <div className="absolute left-1/2 top-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400/90 shadow-[0_0_8px_rgba(251,113,133,0.45)] animate-planet-orbit-sm"></div>
              </div>
              {/* Profile Image */}
              <div
                onClick={handleSecretClick}
                className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 p-1 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                title="Secret"
              >
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full dark:grayscale dark:brightness-95 dark:contrast-125"
                />
              </div>
              {/* Pulse dot */}
              <div className="absolute -bottom-1 right-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="font-bold mb-4 animate-fade-in text-[clamp(1.9rem,9vw,4.5rem)] leading-tight">
            <span className="whitespace-nowrap bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(37,99,235,0.25)]">
              {personalInfo.name.toUpperCase()}
            </span>
          </h1>

          <div className="mb-6">
            <span className="inline-block px-3 sm:px-4 py-2 rounded-xl bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-slate-200 mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                {personalInfo.tagline}
              </p>
            </span>
          </div>

          {/* Location */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm shadow-[0_8px_30px_rgba(15,23,42,0.08)] text-gray-600 dark:text-slate-300">
              <MapPin size={18} className="text-blue-600 dark:text-teal-300" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 w-full">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full max-w-xs sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-xs sm:w-auto border-2 border-gray-300 dark:border-slate-700 hover:border-blue-600 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full backdrop-blur-sm bg-white/50 dark:bg-slate-900/50 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('#projects', '_self')}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap px-2">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {personalInfo.twitter && (
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
                title="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {personalInfo.instagram && (
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
                title="Email"
              >
                <Mail size={20} />
              </a>
            )}
            {personalInfo.youtube && (
              <a
                href={personalInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
                title="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a2.99 2.99 0 0 0-2.104-2.115C19.497 3.5 12 3.5 12 3.5s-7.497 0-9.394.571A2.99 2.99 0 0 0 .502 6.686C0 8.593 0 12 0 12s0 3.407.502 5.314a2.99 2.99 0 0 0 2.104 2.115C4.503 20 12 20 12 20s7.497 0 9.394-.571a2.99 2.99 0 0 0 2.104-2.115C24 15.407 24 12 24 12s0-3.407-.502-5.314zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <ArrowDown size={24} className="text-gray-400 dark:text-slate-500" />
          </div>
        </div>
      </div>
      <GamesLauncher unlocked={gamesUnlocked} />
    </section>
  );
};

export default Hero;
