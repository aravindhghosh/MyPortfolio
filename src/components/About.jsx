import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { about, experience } from '../data/portfolioData';

const About = () => {
  const experienceYears = (() => {
    const monthMap = {
      january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
      july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
    };

    const starts = experience.flatMap((exp) =>
      (exp.roleProgression || [])
        .filter((role) => role.title?.toLowerCase() !== "intern")
        .map((role) => {
          const [startPart] = (role.duration || "").split("-");
          const match = startPart?.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
          if (!match) return null;
          const month = monthMap[match[1].toLowerCase()];
          const year = parseInt(match[2], 10);
          if (Number.isNaN(year) || month === undefined) return null;
          return new Date(year, month, 1);
        })
        .filter(Boolean)
    );

    const earliest = starts.length ? new Date(Math.min(...starts)) : new Date();
    const now = new Date();
    const totalMonths = Math.max(
      1,
      (now.getFullYear() - earliest.getFullYear()) * 12 +
        (now.getMonth() - earliest.getMonth())
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return months === 0 ? `${years}` : `${years}y ${months}m`;
  })();

  const renderInterestGraphic = (interest) => {
    const name = (interest.name || "").toLowerCase();

    if (name.includes("development")) {
      return (
        <div className="h-full p-4">
          <div className="h-full rounded-xl bg-slate-900/92 border border-slate-700/80 p-3 font-mono text-[11px] text-emerald-300/90 shadow-inner">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-400/80"></span>
              <span className="w-2 h-2 rounded-full bg-amber-300/80"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
            </div>
            <div className="space-y-2">
              <div className="text-sky-300/85">const build = async () =&gt; {'{'}</div>
              <div className="pl-4 text-emerald-300/90 beyond-code-flow">deploy("pipeline")</div>
              <div className="pl-4 text-violet-300/85 beyond-code-flow" style={{ animationDelay: '0.6s' }}>optimize("speed")</div>
              <div className="text-sky-300/85">{'}'}<span className="beyond-blink">|</span></div>
            </div>
          </div>
        </div>
      );
    }

    if (name.includes("photography")) {
      return (
        <div className="h-full p-4 flex items-center justify-center">
          <div className="relative w-36 h-24 rounded-2xl bg-slate-800/90 border border-slate-600/70 shadow-xl">
            <div className="absolute top-3 left-4 w-7 h-2 rounded-full bg-slate-600/80"></div>
            <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-emerald-400/70"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-slate-500/60 bg-slate-700/90 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-blue-200/45 bg-gradient-to-br from-blue-400/30 to-slate-950/80 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-blue-200/80 beyond-shutter"></div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl beyond-camera-flash"></div>
          </div>
        </div>
      );
    }

    if (name.includes("gaming")) {
      return (
        <div className="h-full p-4 flex items-center justify-center">
          <div className="relative w-40 h-20 rounded-full bg-slate-900/90 border border-violet-500/35 shadow-[0_0_26px_rgba(139,92,246,0.28)] beyond-game-glow">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-8 bg-slate-200/75 rounded"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1.5 w-8 bg-slate-200/75 rounded"></div>
            </div>
            <div className="absolute left-[52%] top-[56%] w-3 h-3 rounded-full bg-slate-200/80 beyond-game-stick"></div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400/90 beyond-float-soft"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/90 beyond-float-soft" style={{ animationDelay: '0.4s' }}></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/90 beyond-float-soft" style={{ animationDelay: '0.8s' }}></span>
            </div>
          </div>
        </div>
      );
    }

    if (name.includes("stock")) {
      return (
        <div className="h-full p-4">
          <div className="h-full rounded-xl bg-slate-900/90 border border-emerald-400/30 p-3">
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="text-emerald-300/90 font-semibold">NIFTY50</span>
              <span className="text-emerald-300/90 beyond-float-soft">+1.86%</span>
            </div>
            <svg className="w-full h-full" viewBox="0 0 220 110" preserveAspectRatio="none">
              <defs>
                <linearGradient id="beyondStockGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path d="M0 108 L18 98 L36 92 L54 76 L72 79 L90 62 L108 66 L126 50 L144 54 L162 40 L180 44 L198 30 L220 24 L220 110 L0 110 Z" fill="url(#beyondStockGlow)" />
              <path d="M0 108 L18 98 L36 92 L54 76 L72 79 L90 62 L108 66 L126 50 L144 54 L162 40 L180 44 L198 30 L220 24" fill="none" stroke="#34d399" strokeWidth="3" className="beyond-line-animate" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full p-5 flex items-center justify-center">
        <div className="w-20 h-20 rounded-2xl bg-slate-900/80 border border-slate-700/80"></div>
      </div>
    );
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative pb-4 md:pb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?w=800"
                alt="Coding workspace"
                className="w-full h-auto"
              />
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="relative md:absolute md:-bottom-6 md:-right-6 mt-4 md:mt-0 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-slate-700 max-w-[220px] ml-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 tracking-tight">{experienceYears}</div>
                <div className="text-[11px] uppercase tracking-widest text-gray-500 dark:text-slate-400 mt-2">Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Summary */}
            <div className="mb-8">
              <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                {about.summary}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 dark:text-slate-300">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Download Resume Button
            {personalInfo.resumeUrl && (
              <div className="mt-8">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            )}
            */}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">
              What I Do Beyond Code
            </h3>
            <p className="text-gray-600 dark:text-slate-300">My passions and interests outside of development</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {about.interests.map((interest) => {
              const IconComponent = Icons[interest.icon];
              return (
                <div
                  key={interest.id}
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-64 bg-white/65 dark:bg-slate-900/55 backdrop-blur-xl border border-gray-200/70 dark:border-slate-700/80 flex flex-col">
                    {/* Animated graphics area */}
                    <div className="relative h-40 border-b border-gray-200/60 dark:border-slate-700/60">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-white/15 to-teal-100/60 dark:from-blue-900/35 dark:via-slate-900/10 dark:to-teal-900/35"></div>
                      {renderInterestGraphic(interest)}
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 p-4 text-gray-800 dark:text-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-white/75 dark:bg-slate-800/70 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-200 dark:border-slate-700 shadow-md">
                          {IconComponent && <IconComponent size={20} />}
                        </div>
                        <h4 className="text-2xl font-bold">{interest.name}</h4>
                      </div>
                      <p className="text-gray-700 dark:text-slate-300 text-sm leading-snug">{interest.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
