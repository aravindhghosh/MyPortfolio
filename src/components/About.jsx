import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { about, experience } from '../data/portfolioData';

const About = () => {
  const [stockPhase, setStockPhase] = useState(0);
  const [drivingVehicle, setDrivingVehicle] = useState('car');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const stockInterval = setInterval(() => {
      setStockPhase(prev => (prev + 1) % 4);
    }, 2000);

    const drivingInterval = setInterval(() => {
      setDrivingVehicle(prev => prev === 'car' ? 'bike' : 'car');
    }, 3000);

    return () => {
      clearInterval(stockInterval);
      clearInterval(drivingInterval);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let lastTime = performance.now();

    const animate = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        el.scrollLeft += 50 * dt; // 50px per second
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

  const experienceYears = useMemo(() => {
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
  }, []);

  const renderInterestGraphic = (interest) => {
    switch (interest.graphic) {
      case "Code":
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="w-full max-w-[200px] rounded-lg bg-slate-900/95 border border-slate-700/50 p-3 font-mono text-[10px] text-emerald-300/90 shadow-lg shadow-slate-900/20">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
              <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
            </div>
            <div className="space-y-1">
              <div className="text-sky-300/90">const build = () =&gt; {'{'}</div>
              <div className="pl-3 text-emerald-300/90 animate-pulse">deploy("pipeline")</div>
              <div className="pl-3 text-violet-300/90 animate-pulse" style={{ animationDelay: '0.5s' }}>optimize("speed")</div>
              <div className="text-sky-300/90">{'}'}<span className="animate-pulse text-white ml-1">|</span></div>
            </div>
          </div>
        </div>
      );

      case "Camera":
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="relative w-28 h-20 rounded-xl bg-slate-800/95 border border-slate-600/50 shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
            <div className="absolute top-2 left-3 w-6 h-1.5 rounded-full bg-slate-600/80"></div>
            <div className="absolute top-2 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400/80 animate-pulse"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-500/50 bg-slate-700/90 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-blue-200/30 bg-gradient-to-br from-blue-400/20 to-slate-900/80 flex items-center justify-center overflow-hidden">
                <div className="w-4 h-4 rounded-full bg-blue-200/60 group-hover:scale-75 transition-transform duration-300"></div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
          </div>
        </div>
      );

      case "Gaming":
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="relative w-32 h-16 rounded-full bg-slate-900/95 border border-violet-500/30 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-6 bg-slate-400/50 rounded-full"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 w-6 bg-slate-400/50 rounded-full"></div>
            </div>
            <div className="absolute left-[50%] top-[55%] w-2 h-2 rounded-full bg-slate-200/80 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"></div>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/90 animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="w-2 h-2 rounded-full bg-amber-400/90 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400/90 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
            </div>
          </div>
        </div>
      );

      case "Stock":
      const stockData = [
        { // Phase 0: Open/Neutral
          change: "+0.00%",
          color: "text-slate-400",
          stroke: "#94a3b8",
          border: "border-slate-500/20",
          path: "M0 20 L10 20 L20 20 L30 20 L40 20 L50 20 L60 20 L70 20 L80 20 L90 20 L100 20",
          cy: "20"
        },
        { // Phase 1: Bearish Dip
          change: "-1.25%",
          color: "text-rose-400",
          stroke: "#fb7185",
          border: "border-rose-500/20",
          path: "M0 20 L10 22 L20 28 L30 35 L40 32 L50 38 L60 35 L70 30 L80 32 L90 35 L100 38",
          cy: "38"
        },
        { // Phase 2: Recovery
          change: "+0.45%",
          color: "text-emerald-400",
          stroke: "#34d399",
          border: "border-emerald-500/20",
          path: "M0 20 L10 25 L20 20 L30 22 L40 18 L50 20 L60 15 L70 12 L80 15 L90 10 L100 12",
          cy: "12"
        },
        { // Phase 3: Bullish Peak
          change: "+1.86%",
          color: "text-emerald-400",
          stroke: "#34d399",
          border: "border-emerald-500/20",
          path: "M0 20 L10 18 L20 15 L30 10 L40 12 L50 5 L60 8 L70 2 L80 5 L90 2 L100 2",
          cy: "2"
        }
      ];
      const currentStock = stockData[stockPhase];

      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className={`w-full max-w-[200px] rounded-lg bg-slate-900/95 border ${currentStock.border} p-3 shadow-lg shadow-slate-900/20 flex flex-col justify-center transition-colors duration-500`}>
            <div className="flex items-center justify-between text-[10px] mb-1.5">
              <span className="text-slate-400 font-semibold tracking-wider">NIFTY50</span>
              <span className={`${currentStock.color} font-bold animate-pulse transition-colors duration-500`}>
                {currentStock.change}
              </span>
            </div>
            <div className="relative h-8 w-full">
               <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d={currentStock.path} 
                        fill="none" 
                        stroke={currentStock.stroke} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transition-all duration-1000 ease-in-out"
                        style={{ filter: `drop-shadow(0 0 2px ${currentStock.stroke}80)` }}
                  />
                  <circle cx="100" cy={currentStock.cy} r="2" fill={currentStock.stroke} className="animate-ping transition-all duration-1000 ease-in-out" />
                  <circle cx="100" cy={currentStock.cy} r="2" fill={currentStock.stroke} className="transition-all duration-1000 ease-in-out" />
               </svg>
            </div>
          </div>
        </div>
      );

      case "Pet":
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="relative w-28 h-28 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-orange-100/50 dark:bg-orange-900/20 rounded-full animate-pulse"></div>
            <Icons.Dog className="w-14 h-14 text-orange-600/80 dark:text-orange-400/80 relative z-10" />
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
               <Icons.Heart className="w-6 h-6 text-red-500 fill-red-500 animate-bounce" style={{ animationDuration: '1.5s' }} />
            </div>
          </div>
        </div>
      );

      case "Driving":
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="w-full max-w-[200px] h-[180px] bg-slate-900/95 rounded-xl border border-slate-700/50 relative overflow-hidden group-hover:border-slate-500 transition-colors flex flex-col shadow-2xl">
             
             <style>
               {`
                 @keyframes road-scroll {
                   0% { background-position: 0 0; }
                   100% { background-position: 0 20px; }
                 }
                 @keyframes drive-3d {
                   0% { transform: translateY(-60px) scale(0.1); opacity: 0; }
                   5% { opacity: 1; }
                   100% { transform: translateY(100px) scale(4); opacity: 0; }
                 }
                 @keyframes bounce-car {
                   0%, 100% { transform: translateY(0); }
                   50% { transform: translateY(-1px); }
                 }
               `}
             </style>

             {/* Sky */}
             <div className="absolute inset-0 h-1/2 bg-gradient-to-b from-indigo-950 to-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-blue-500/20 blur-xl rounded-full"></div>
             </div>
             
             {/* 3D Road Container */}
             <div className="absolute inset-0 flex items-end justify-center overflow-hidden" style={{ perspective: '150px' }}>
                {/* The Road Plane */}
                <div className="relative w-32 h-[200%] bg-slate-800 origin-bottom transform-gpu"
                     style={{ transform: 'rotateX(60deg) translateY(0px)' }}>
                    
                    {/* Road Texture/Markings */}
                    <div className="absolute inset-0 flex justify-center">
                        <div className="w-2 h-full opacity-70" 
                             style={{ 
                               backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.8) 50%)', 
                               backgroundSize: '100% 40px',
                               animation: 'road-scroll 0.2s linear infinite'
                             }}>
                        </div>
                    </div>
                    
                    {/* Road Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-transparent to-white/30"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-transparent to-white/30"></div>
                </div>
             </div>

             {/* Vehicle Animation Layer */}
             <div className="absolute inset-0 flex items-center justify-center pt-12 pointer-events-none">
                <div 
                  key={drivingVehicle} 
                  className="flex flex-col items-center origin-center"
                  style={{ animation: 'drive-3d 3s cubic-bezier(0.5, 0, 0.2, 1) infinite' }}
                >
                   {drivingVehicle === 'car' ? (
                     // 3D-ish Car (White Altroz)
                     <div className="relative w-14 h-10" style={{ animation: 'bounce-car 0.2s infinite' }}>
                        {/* Shadow */}
                        <div className="absolute bottom-0 left-1 right-1 h-2 bg-black/60 blur-sm rounded-full"></div>
                        
                        {/* Wheels */}
                        <div className="absolute bottom-1 -left-0.5 w-2 h-3 bg-slate-950 rounded-sm"></div>
                        <div className="absolute bottom-1 -right-0.5 w-2 h-3 bg-slate-950 rounded-sm"></div>
                        
                        {/* Body Lower */}
                        <div className="absolute bottom-1.5 left-0.5 right-0.5 h-4 bg-slate-100 rounded-sm border-b-2 border-slate-300 flex items-center justify-between px-1 shadow-inner">
                           <div className="w-2.5 h-1.5 bg-red-600 rounded-[1px] shadow-[0_0_2px_red]"></div>
                           <div className="text-[3px] font-bold text-slate-800 tracking-tighter">ALTROZ</div>
                           <div className="w-2.5 h-1.5 bg-red-600 rounded-[1px] shadow-[0_0_2px_red]"></div>
                        </div>
                        
                        {/* Body Upper (Cabin) */}
                        <div className="absolute bottom-5 left-2 right-2 h-3 bg-slate-200 rounded-t-sm border-x border-t border-slate-300">
                           <div className="w-full h-full bg-slate-800/20 rounded-t-sm"></div>
                        </div>
                     </div>
                   ) : (
                     // 3D-ish Bike (Black Apache)
                     <div className="relative w-6 h-12 flex flex-col items-center" style={{ animation: 'bounce-car 0.15s infinite' }}>
                        {/* Shadow */}
                        <div className="absolute bottom-0 w-6 h-2 bg-black/60 blur-sm rounded-full"></div>
                        
                        {/* Rear Tire */}
                        <div className="w-2.5 h-4 bg-slate-950 rounded-sm mt-auto"></div>
                        
                        {/* Body/Tail */}
                        <div className="w-5 h-4 bg-slate-900 rounded-sm -mt-1 flex justify-center pt-1 relative z-10">
                           <div className="w-3 h-1.5 bg-red-600 rounded-full shadow-[0_0_4px_red]"></div>
                        </div>
                        
                        {/* Rider Body */}
                        <div className="w-6 h-5 bg-slate-800 rounded-t-lg -mt-1 relative z-20 flex justify-center">
                           <div className="w-5 h-full bg-slate-900/50 rounded-t-lg"></div>
                        </div>
                        
                        {/* Helmet */}
                        <div className="w-4 h-4 bg-slate-950 rounded-full -mt-1 border border-slate-700 relative z-30">
                           <div className="absolute top-1 left-1 right-1 h-1 bg-slate-800 rounded-full opacity-50"></div>
                        </div>
                     </div>
                   )}
                </div>
             </div>
             
             {/* Dashboard Overlay */}
             <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-900 to-transparent p-2 pt-4 flex items-end justify-between">
                <div className="flex items-center gap-1 bg-slate-800/80 rounded px-1.5 py-0.5 border border-slate-700">
                    <span className="text-[8px] text-slate-400 font-mono">RPM</span>
                    <div className="flex gap-0.5 h-1.5 items-end">
                       <div className="w-0.5 h-1 bg-emerald-500"></div>
                       <div className="w-0.5 h-1.5 bg-emerald-500"></div>
                       <div className="w-0.5 h-2 bg-emerald-500"></div>
                       <div className="w-0.5 h-2.5 bg-emerald-500 animate-pulse"></div>
                       <div className="w-0.5 h-2.5 bg-red-500 opacity-50"></div>
                    </div>
                </div>
                <div className="text-[8px] font-mono text-emerald-400 animate-pulse">
                    {drivingVehicle === 'car' ? '120 km/h' : '108 km/h'}
                </div>
             </div>
          </div>
        </div>
      );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-16 h-16 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 flex items-center justify-center">
               <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            </div>
          </div>
        );
    }
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
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-slate-950 border border-slate-800 aspect-square sm:aspect-[4/3] flex flex-col items-center justify-center p-8 group/graphic">
              <style>{`
                @keyframes twinkle {
                  0%, 100% { opacity: 0.3; transform: scale(0.8); }
                  50% { opacity: 1; transform: scale(1.2); }
                }
                @keyframes node-pulse {
                  0%, 16.66% { 
                    border-color: var(--active-color);
                    background-color: rgb(30 41 59);
                  }
                  16.67%, 100% {
                    border-color: var(--inactive-color);
                    background-color: rgb(15 23 42);
                  }
                }
                @keyframes glow-pulse {
                  0%, 16.66% { 
                    transform: scale(1.5);
                    opacity: 0.5;
                    background-color: var(--active-color);
                    box-shadow: 0 0 20px var(--active-shadow);
                  }
                  16.67%, 100% {
                    transform: scale(1);
                    opacity: 0;
                  }
                }
                @keyframes icon-pulse {
                  0%, 16.66% { color: var(--active-text); }
                  16.67%, 100% { color: var(--inactive-text); }
                }
                @keyframes label-pulse {
                  0%, 16.66% {
                    color: var(--active-label-text);
                    background-color: var(--active-label-bg);
                    border-color: var(--active-label-border);
                  }
                  16.67%, 100% {
                    color: var(--inactive-label-text);
                    background-color: var(--inactive-label-bg);
                    border-color: var(--inactive-label-border);
                  }
                }
              `}</style>

              {/* Space Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a2035] via-[#0B1120] to-black"></div>
              
              {/* Stars */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 2 + 1}px`,
                      height: `${Math.random() * 2 + 1}px`,
                      opacity: Math.random() * 0.7 + 0.3,
                      animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Workflow System */}
              <div className="relative w-full h-full max-w-[320px] max-h-[320px] flex items-center justify-center">
                
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Hexagon Path */}
                  <path 
                    d="M 50 15 L 80.3 32.5 L 80.3 67.5 L 50 85 L 19.7 67.5 L 19.7 32.5 Z" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="0.5" 
                    fill="none" 
                    strokeDasharray="3 3" 
                  />

                  {/* Moving Particle */}
                  <circle r="1.5" fill="#60a5fa" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
                    <animateMotion dur="12s" repeatCount="indefinite" path="M 50 15 L 80.3 32.5 L 80.3 67.5 L 50 85 L 19.7 67.5 L 19.7 32.5 Z" begin="0s" />
                    <animate attributeName="fill" values="#60a5fa;#818cf8;#a78bfa;#f472b6;#fb923c;#34d399" dur="12s" repeatCount="indefinite" calcMode="discrete" begin="0s" />
                  </circle>
                </svg>

                {[
                  { id: 'REQ', label: 'REQ', icon: Icons.FileText, color: '#60a5fa', rgb: '59, 130, 246', pos: { top: '15%', left: '50%' } },
                  { id: 'PLAN', label: 'PLAN', icon: Icons.Calendar, color: '#818cf8', rgb: '99, 102, 241', pos: { top: '32.5%', left: '80.3%' } },
                  { id: 'DEV', label: 'DEV', icon: Icons.Code2, color: '#a78bfa', rgb: '168, 85, 247', pos: { top: '67.5%', left: '80.3%' } },
                  { id: 'TEST', label: 'TEST', icon: Icons.Bug, color: '#f472b6', rgb: '236, 72, 153', pos: { top: '85%', left: '50%' } },
                  { id: 'AUTO', label: 'AUTO', icon: Icons.Settings, color: '#fb923c', rgb: '249, 115, 22', pos: { top: '67.5%', left: '19.7%' }, iconClass: 'animate-[spin_4s_linear_infinite]' },
                  { id: 'DEPLOY', label: 'DEPLOY', icon: Icons.Rocket, color: '#34d399', rgb: '16, 185, 129', pos: { top: '32.5%', left: '19.7%' } },
                ].map((node, index) => (
                  <div 
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10"
                    style={{ 
                      top: node.pos.top, 
                      left: node.pos.left,
                    }}
                  >
                     <div 
                       className="w-10 h-10 rounded-full flex items-center justify-center border"
                       style={{
                         animation: `node-pulse 12s linear infinite`,
                         animationDelay: `-${12 - index * 2}s`,
                         '--active-color': node.color,
                         '--active-shadow': `rgba(${node.rgb}, 0.8)`,
                         '--inactive-color': `rgba(${node.rgb}, 0.3)`,
                         '--inactive-shadow': `rgba(${node.rgb}, 0.1)`,
                       }}
                     >
                        <node.icon 
                          size={18} 
                          className={node.iconClass || ''}
                          style={{
                            animation: `icon-pulse 12s linear infinite`,
                            animationDelay: `-${12 - index * 2}s`,
                            '--active-text': '#e2e8f0', // slate-200
                            '--inactive-text': `rgba(${node.rgb}, 0.7)`,
                          }}
                        />
                     </div>
                     <span 
                       className="text-[8px] font-mono font-bold tracking-wider px-1 rounded border"
                       style={{
                         animation: `label-pulse 12s linear infinite`,
                         animationDelay: `-${12 - index * 2}s`,
                         '--active-label-text': '#e2e8f0',
                         '--active-label-bg': `rgba(${node.rgb}, 0.5)`,
                         '--active-label-border': `rgba(${node.rgb}, 0.5)`,
                         '--inactive-label-text': `rgba(${node.rgb}, 0.7)`,
                         '--inactive-label-bg': 'rgba(15, 23, 42, 0.8)',
                         '--inactive-label-border': `rgba(${node.rgb}, 0.2)`,
                       }}
                     >
                       {node.label}
                     </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-slate-700 max-w-[220px] ml-auto">
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
            {[...about.interests, ...about.interests].map((interest, index) => {
              const IconComponent = Icons[interest.icon];
              return (
                <div
                  key={`${interest.id}-${index}`}
                  className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-96"
                >
                  <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/50">
                    <div className="flex flex-col h-full">
                    {/* Animated graphics area */}
                    <div className="relative h-32 sm:h-40 border-b border-gray-200/60 dark:border-slate-700/60 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-teal-50/40 dark:from-blue-900/20 dark:via-slate-900/10 dark:to-teal-900/20 pointer-events-none"></div>
                      {renderInterestGraphic(interest)}
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 p-3 sm:p-4 text-gray-800 dark:text-slate-100">
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
                </div>
              );
            })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
