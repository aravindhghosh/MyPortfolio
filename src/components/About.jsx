import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { about, personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative">
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
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Summary */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {about.summary}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="mt-8">
              <a
                href="https://customer-assets.emergentagent.com/job_74d47219-9912-4f53-8f48-15d368f5e967/artifacts/um6wlbjr_Aravindhghosh%20P%20-%20Resume%20-%20HCLTech.pdf"
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
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              What I Do Beyond Code
            </h3>
            <p className="text-gray-600">My passions and interests outside of development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.interests.map((interest) => {
              const IconComponent = Icons[interest.icon];
              return (
                <div
                  key={interest.id}
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {/* Background Image */}
                  <div className="relative h-64">
                    <img
                      src={interest.image}
                      alt={interest.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      <h4 className="text-2xl font-bold">{interest.name}</h4>
                    </div>
                    <p className="text-gray-200 text-sm">{interest.description}</p>
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