import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold apple-gradient-text mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 mt-1 apple-reveal stagger-${(index % 3) + 1} apple-card`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full overflow-hidden shadow-lg border-4 border-gray-100 dark:border-slate-800">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-2">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                    <Award size={18} />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.years}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 border border-blue-200 dark:border-slate-700 rounded-full">
                      <span className="text-sm font-medium text-gray-700 dark:text-slate-300">CGPA:</span>
                      <span className="text-lg font-bold text-blue-600 dark:text-teal-200">{edu.cgpa}</span>
                      <span className="text-sm text-gray-600 dark:text-slate-400">/ 10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
