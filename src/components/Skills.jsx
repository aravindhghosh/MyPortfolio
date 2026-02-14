import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolioData';
import * as Icons from 'lucide-react';

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          Object.keys(skills).forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950" ref={sectionRef}>
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data], index) => {
            const IconComponent = Icons[data.icon] || Icons.Code2;

            return (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="relative h-48">
                  <img
                    src={data.image}
                    alt={category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent size={24} className="text-white" />}
                    </div>
                  </div>

                  {/* Animated Border on Hover */}
                  <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 border-t border-gray-200 dark:border-slate-700">
                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 transition-colors duration-300">{category}</h3>

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
            );
          })}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
