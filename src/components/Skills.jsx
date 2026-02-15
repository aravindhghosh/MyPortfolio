import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolioData';
import * as Icons from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SkillsModal = ({ isOpen, onClose, skills }) => {
  if (!isOpen) return null;

  const allSkills = Object.values(skills).flatMap((category) => category.skills);
  // Remove duplicates based on name
  const uniqueSkills = Array.from(new Map(allSkills.map(item => [item.name, item])).values());

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">All Skills</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Icons.X size={24} className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 overflow-y-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {uniqueSkills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4 p-1.5 sm:p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs sm:text-lg font-bold text-slate-700 dark:text-slate-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words w-full leading-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const scrollRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const skillsList = Object.entries(skills);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let lastTime = performance.now();

    const animate = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        el.scrollLeft += 50 * dt; // 50px per second, matching About section
      }
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft = (el.scrollWidth / 2) - 1;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    if (direction === 'left') {
      if (el.scrollLeft < 300) {
        el.scrollLeft += el.scrollWidth / 2;
      }
      el.scrollLeft -= 300;
    } else {
      el.scrollLeft += 300;
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += diff;
    }
    setTouchStart(currentTouch);
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsPaused(false);
  };

  const renderSkillGraphic = (category) => {
    switch (category) {
      case "Programming & Scripting":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="w-full max-w-[200px] bg-slate-950 rounded-lg border border-slate-800 p-3 font-mono text-[10px] shadow-2xl">
              <div className="flex gap-1.5 mb-2 border-b border-slate-800 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300">python3 app.py</span>
                </div>
                <div className="text-slate-400 pl-4 animate-pulse">Processing data...</div>
                <div className="text-emerald-400 pl-4 opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.5s_forwards]">
                  [SUCCESS] Done
                </div>
                <div className="h-1.5 w-2 bg-slate-500 animate-pulse mt-1 ml-1"></div>
              </div>
            </div>
          </div>
        );
      case "DevOps & CI/CD Tools":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="relative w-28 h-14">
               <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                  <path d="M25,25 C25,35 10,35 10,25 C10,15 25,15 25,25 C25,35 40,35 50,25 C60,15 75,15 75,25 C75,35 90,35 90,25 C90,15 75,15 75,25 C75,35 60,35 50,25 C40,15 25,15 25,25" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        className="opacity-30" />
                  <path d="M25,25 C25,35 10,35 10,25 C10,15 25,15 25,25 C25,35 40,35 50,25 C60,15 75,15 75,25 C75,35 90,35 90,25 C90,15 75,15 75,25 C75,35 60,35 50,25 C40,15 25,15 25,25" 
                        fill="none" 
                        stroke="#60a5fa" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        className="animate-[dash_3s_linear_infinite]" />
               </svg>
               <style>{`
                 @keyframes dash {
                   to { stroke-dashoffset: 0; }
                 }
               `}</style>
            </div>
          </div>
        );
      case "Containerization":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="relative flex flex-col items-center justify-end h-24 w-24">
              <div className="w-8 h-8 bg-blue-600 border border-blue-400 rounded mb-1 animate-bounce" style={{ animationDuration: '2s' }}></div>
              <div className="flex gap-1">
                <div className="w-8 h-8 bg-blue-700 border border-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-blue-700 border border-blue-500 rounded"></div>
              </div>
              <div className="flex gap-1 mt-1">
                <div className="w-8 h-8 bg-blue-800 border border-blue-600 rounded"></div>
                <div className="w-8 h-8 bg-blue-800 border border-blue-600 rounded"></div>
                <div className="w-8 h-8 bg-blue-800 border border-blue-600 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "Cloud Technologies":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="relative">
              <Icons.Cloud className="w-24 h-24 text-slate-700" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="flex gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                 </div>
              </div>
              <div className="absolute -bottom-2 w-full flex justify-center">
                 <div className="w-16 h-1 bg-blue-500/50 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        );
      case "Database Management":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="relative flex flex-col items-center gap-1">
              {/* Database Stack */}
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative w-20 h-6">
                  <div className="absolute inset-0 bg-blue-600 rounded-full border border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)] z-10"></div>
                  <div className="absolute top-3 inset-x-0 h-4 bg-blue-700 border-x border-b border-blue-500 rounded-b-full z-0"></div>
                  {/* Data blink */}
                  <div className="absolute top-1 right-4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
                </div>
              ))}
              {/* Connection Lines */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                 <div className="w-6 h-0.5 bg-emerald-500 animate-pulse"></div>
                 <div className="w-6 h-0.5 bg-emerald-500 animate-pulse delay-75"></div>
              </div>
            </div>
          </div>
        );
      case "Disaster Recovery & Resilience":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse"></div>
              <Icons.Shield className="w-20 h-20 text-slate-700 fill-slate-800 relative z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                 <Icons.Check className="w-10 h-10 text-green-500 animate-[bounce_2s_infinite]" strokeWidth={3} />
              </div>
            </div>
          </div>
        );
      case "Automation Tools":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="relative w-24 h-24">
               <Icons.Settings className="absolute top-0 left-0 w-14 h-14 text-slate-500 animate-[spin_4s_linear_infinite]" />
               <Icons.Settings className="absolute bottom-0 right-0 w-12 h-12 text-slate-600 animate-[spin_3s_linear_infinite_reverse]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500/20 p-2 rounded-full">
                  <Icons.Zap className="w-8 h-8 text-yellow-500 animate-pulse" />
               </div>
            </div>
          </div>
        );
      case "Project Management & Methodologies":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="w-full max-w-[200px] bg-slate-800 rounded border border-slate-700 p-2 grid grid-cols-3 gap-2">
               {/* Headers */}
               <div className="h-1.5 w-8 bg-slate-600 rounded mb-1 col-span-1"></div>
               <div className="h-1.5 w-8 bg-slate-600 rounded mb-1 col-span-1"></div>
               <div className="h-1.5 w-8 bg-slate-600 rounded mb-1 col-span-1"></div>
               
               {/* Columns */}
               <div className="bg-slate-700/30 rounded p-1 flex flex-col gap-1 h-20 border border-slate-600/30">
                  <div className="h-5 bg-slate-600 rounded border border-slate-500/50"></div>
                  <div className="h-5 bg-slate-600 rounded border border-slate-500/50 opacity-70"></div>
               </div>
               <div className="bg-slate-700/30 rounded p-1 flex flex-col gap-1 h-20 border border-slate-600/30">
                  <div className="h-5 bg-blue-600/80 rounded border border-blue-400/50 animate-pulse"></div>
                  <div className="h-5 bg-blue-600/60 rounded border border-blue-400/30"></div>
               </div>
               <div className="bg-slate-700/30 rounded p-1 flex flex-col gap-1 h-20 border border-slate-600/30">
                  <div className="h-5 bg-emerald-600/80 rounded border border-emerald-400/50 flex items-center justify-center">
                     <Icons.Check size={10} className="text-white" />
                  </div>
               </div>
            </div>
          </div>
        );
      case "Version Control Systems":
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
               <div className="absolute left-1/2 bottom-0 w-1 h-20 bg-slate-600 -translate-x-1/2 rounded"></div>
               <div className="absolute left-1/2 bottom-8 w-1 h-10 bg-slate-600 -translate-x-1/2 rotate-45 origin-bottom rounded"></div>
               
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-slate-900 z-10"></div>
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-slate-900 z-10"></div>
               <div className="absolute top-4 right-2 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-slate-900 z-10 animate-ping"></div>
               <div className="absolute top-4 right-2 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-slate-900 z-10"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 p-4">
            <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
               <Icons.Code2 className="w-8 h-8 text-slate-500" />
            </div>
          </div>
        );
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Expertise across multiple domains of modern software development
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all backdrop-blur-sm border border-gray-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-gray-800 dark:text-slate-200" />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all backdrop-blur-sm border border-gray-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-gray-800 dark:text-slate-200" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden py-8 -my-8 select-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
          <div className="flex gap-6 w-max">
          {[...skillsList, ...skillsList].map(([category, data], index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-96"
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                {/* Background Image */}
                <div className="relative h-36 sm:h-44 md:h-48">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                  {renderSkillGraphic(category)}

                  {/* Animated Border on Hover */}
                  <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 md:p-6 border-t border-gray-200 dark:border-slate-700 h-full">
                  {/* Category Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 transition-colors duration-300">{category}</h3>

                  {/* Skills with Logos */}
                  <div className="flex flex-wrap gap-3">
                    {data.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="group/skill flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-blue-200 dark:border-slate-700 hover:border-blue-400 hover:shadow-md transition-all duration-200 hover:scale-105"
                      >
                        {/* Skill Logo */}
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain group-hover/skill:scale-110 transition-transform duration-200"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        {/* Skill Name */}
                        <span className="text-sm font-medium text-blue-700 dark:text-teal-200 group-hover/skill:text-blue-900 transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            );
          })}
          </div>
          </div>

        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAllSkills(true)}
            className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
          >
            <Icons.Grid size={20} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              View All Skills
            </span>
          </button>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <SkillsModal isOpen={showAllSkills} onClose={() => setShowAllSkills(false)} skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
