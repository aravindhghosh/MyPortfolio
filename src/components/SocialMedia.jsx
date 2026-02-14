import React from 'react';
import { personalInfo } from '../data/portfolioData';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: personalInfo.instagram,
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      gradient: 'from-purple-600 to-pink-600',
      description: 'Follow my photography and daily moments'
    },
    {
      name: 'Twitter',
      url: personalInfo.twitter,
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      gradient: 'from-sky-500 to-blue-600',
      description: 'Tech updates and quick thoughts'
    }
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Connect With Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Let's connect on social media and stay updated
          </p>
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border-2 border-gray-200 dark:border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-4">
                  {/* Icon */}
                  <div className={`text-gray-700 dark:text-slate-200 group-hover:text-white transition-colors duration-300`}>
                    {social.icon}
                  </div>
                  
                  {/* Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-300 group-hover:text-white/90 transition-colors duration-300 mt-1">
                      {social.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end">
                  <svg 
                    className="w-6 h-6 text-gray-400 dark:text-slate-400 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
