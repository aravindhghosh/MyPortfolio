import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div> */}

      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-slate-50 overflow-hidden">

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
        </div>

        {/* Racing speed lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-40 animate-speed-line"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50 animate-speed-line animation-delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40 animate-speed-line animation-delay-2000"></div>
        </div>

        {/* Floating 3D-style cards - Python/Code */}
        <div className="absolute top-20 left-20 w-72 h-48 animate-float-3d">
          <div className="relative w-full h-full bg-white/40 backdrop-blur-md rounded-2xl border border-emerald-200/60 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent rounded-2xl"></div>
            <div className="p-6">
              <div className="text-emerald-700 font-mono text-sm space-y-2 opacity-80">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span>
                  <span>import tensorflow as tf</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  <span>def optimize_portfolio():</span>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <span className="text-purple-600">●</span>
                  <span>return max_profit</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-4xl opacity-30">🐍</div>
          </div>
        </div>

        {/* Stock/Trading Dashboard Card */}
        <div className="absolute top-40 right-20 w-80 h-52 animate-float-3d animation-delay-2000">
          <div className="relative w-full h-full bg-white/40 backdrop-blur-md rounded-2xl border border-blue-200/60 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-700 font-bold text-lg">PORTFOLIO</span>
                <span className="text-emerald-600 text-sm font-semibold">+12.5% ↑</span>
              </div>
              <svg className="w-full h-24" viewBox="0 0 200 60">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
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
              <div className="flex gap-4 text-xs mt-2">
                <div className="text-slate-600">NIFTY <span className="text-emerald-600 font-semibold">+2.1%</span></div>
                <div className="text-slate-600">SENSEX <span className="text-emerald-600 font-semibold">+1.8%</span></div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-3xl opacity-30">📈</div>
          </div>
        </div>

        {/* Gaming Controller Card */}
        <div className="absolute bottom-32 left-32 w-64 h-44 animate-float-3d animation-delay-3000">
          <div className="relative w-full h-full bg-white/40 backdrop-blur-md rounded-2xl border border-purple-200/60 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🎮</div>
                <div>
                  <div className="text-purple-700 font-bold">LEVEL 99</div>
                  <div className="text-slate-500 text-xs">Achievement Unlocked</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>XP</span>
                  <span className="text-purple-700 font-semibold">15,420 / 20,000</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-slow"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-2xl opacity-30">👾</div>
          </div>
        </div>

        {/* Altroz Racer Card */}
        <div className="absolute bottom-20 right-24 w-96 h-56 animate-float-3d animation-delay-1500">
          <div className="relative w-full h-full bg-white/40 backdrop-blur-md rounded-2xl border border-orange-200/60 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-red-50/50 to-orange-50/50 animate-shimmer"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-orange-600 font-bold text-xl">ALTROZ RACER</div>
                  <div className="text-slate-600 text-sm">Performance Mode Active</div>
                </div>
                <div className="text-4xl">🏎️</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-white/60 rounded-lg p-3 border border-orange-200/40">
                  <div className="text-orange-600 text-2xl font-bold">120</div>
                  <div className="text-slate-500 text-xs">km/h</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 border border-red-200/40">
                  <div className="text-red-600 text-2xl font-bold">6.5</div>
                  <div className="text-slate-500 text-xs">0-100s</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 border border-yellow-200/40">
                  <div className="text-yellow-600 text-2xl font-bold">120</div>
                  <div className="text-slate-500 text-xs">bhp</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-orange-400/50 to-transparent animate-speed-line-reverse"></div>
          </div>
        </div>

        {/* Dog Paw Card */}
        <div className="absolute top-1/2 left-1/4 w-48 h-40 animate-float-3d animation-delay-4000">
          <div className="relative w-full h-full bg-white/40 backdrop-blur-md rounded-2xl border border-amber-200/60 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="p-6 text-center">
              {/* Dog paw print made with CSS */}
              <div className="relative w-20 h-20 mx-auto mb-3 animate-bounce-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-amber-600 rounded-full"></div>
                <div className="absolute top-4 left-2 w-5 h-6 bg-amber-600 rounded-full transform -rotate-12"></div>
                <div className="absolute top-4 right-2 w-5 h-6 bg-amber-600 rounded-full transform rotate-12"></div>
                <div className="absolute bottom-2 left-4 w-4 h-5 bg-amber-600 rounded-full transform -rotate-6"></div>
                <div className="absolute bottom-2 right-4 w-4 h-5 bg-amber-600 rounded-full transform rotate-6"></div>
              </div>
              <div className="text-amber-700 font-semibold">Best Friends</div>
              <div className="text-slate-500 text-xs mt-1">Unconditional Love</div>
            </div>
            {/* Smaller paw print in corner */}
            <div className="absolute -bottom-1 -right-1 opacity-40 animate-wiggle">
              <div className="relative w-8 h-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-3.5 bg-amber-600 rounded-full"></div>
                <div className="absolute top-2 left-0.5 w-2 h-2.5 bg-amber-600 rounded-full transform -rotate-12"></div>
                <div className="absolute top-2 right-0.5 w-2 h-2.5 bg-amber-600 rounded-full transform rotate-12"></div>
                <div className="absolute bottom-0 left-1.5 w-1.5 h-2 bg-amber-600 rounded-full"></div>
                <div className="absolute bottom-0 right-1.5 w-1.5 h-2 bg-amber-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating orbs with glassmorphism */}
        <div className="absolute top-32 left-1/3 w-64 h-64 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-orbit"></div>
        <div className="absolute bottom-32 right-1/3 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-orbit animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-emerald-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-orbit animation-delay-4000"></div>

        {/* Particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-particle"></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-particle animation-delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-particle animation-delay-2000"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-orange-500 rounded-full animate-particle animation-delay-3000"></div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image with Glass Effect */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl backdrop-blur-sm bg-white/30 p-1 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <MapPin size={18} className="text-blue-600" />
            <span>{personalInfo.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-600 px-8 py-6 text-lg rounded-full backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('#projects', '_self')}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
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
                className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
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
                className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
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
                className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
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
                className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
                title="Email"
              >
                <Mail size={20} />
              </a>
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
