import React from 'react';
import * as Icons from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Professional certifications and continuous learning
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => {
              const IconComponent = Icons[cert.icon] || Icons.Award;
              return (
                <a
                  key={cert.id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {/* Background Image */}
                  <div className="relative h-48">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <IconComponent size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 border-t border-gray-200 dark:border-slate-700">
                    {/* Cert Name */}
                    <h3 className="text-base font-bold text-gray-900 dark:text-slate-100 mb-2 min-h-[3rem]">
                      {cert.name}
                    </h3>

                    {/* Code Badge */}
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 text-blue-700 dark:text-teal-200 rounded-full text-sm font-medium mb-2 border border-blue-200 dark:border-slate-700">
                      {cert.code}
                    </div>

                    {/* Issuer */}
                    <p className="text-gray-600 dark:text-slate-300 text-sm font-medium">{cert.issuer}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Achievements List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:scale-102"
              >
                <div className="flex items-start gap-4">
                  {/* Trophy Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icons.Trophy size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
