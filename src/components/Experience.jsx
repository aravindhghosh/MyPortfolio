import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, X, CheckCircle, Users, Zap, TrendingUp } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { Button } from './ui/button';

const ExperienceModal = ({ exp, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white rounded-lg border-2 border-gray-200 p-2 flex items-center justify-center">
                <img
                  src={exp.companyLogo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{exp.company}</h2>
                <p className="text-blue-600 font-semibold">{exp.currentRole}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>
          </div>

          {/* Duration & Location */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <Calendar className="w-6 h-6 mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Duration</div>
              <div className="font-bold text-gray-900">{exp.duration}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <MapPin className="w-6 h-6 mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Location</div>
              <div className="font-bold text-gray-900">{exp.location}</div>
            </div>
          </div>

          {/* Role Progression */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Career Progression</h3>
            </div>
            <div className="space-y-4">
              {exp.roleProgression.map((role, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4 border-l-4 border-blue-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{role.title}</h4>
                    <span className="text-sm text-gray-600 font-medium">{role.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {role.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          {/* <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-700 leading-relaxed">{exp.details.overview}</p>
          </div> */}

          {/* Key Projects */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Projects</h3>
            <ul className="space-y-2">
              {exp.details.keyProjects.map((project, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{project}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {exp.details.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <Zap size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{achievement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {exp.details.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team & Impact */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <Users className="w-6 h-6 mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Team Size</div>
              <div className="font-bold text-gray-900">{exp.details.teamSize}</div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 border border-blue-200">
              <Zap className="w-6 h-6 mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Impact</div>
              <div className="font-bold text-gray-900 text-sm">{exp.details.impact}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <>
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-teal-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105">
                      {/* Company Logo & Info */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Company Logo */}
                        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border-2 border-gray-200 p-2 flex items-center justify-center">
                          <img
                            src={exp.companyLogo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.company}</h3>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                            <Briefcase size={16} />
                            <span className="text-base">{exp.currentRole}</span>
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Role Progression Badge */}
                      {exp.roleProgression && exp.roleProgression.length > 1 && (
                        <div className="mb-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-full text-sm font-semibold text-green-700">
                            <TrendingUp size={14} />
                            <span>{exp.roleProgression.length} Role Progression</span>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* View Details Button */}
                      <Button
                        onClick={() => openModal(exp)}
                        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Modal */}
      {selectedExperience && (
        <ExperienceModal
          exp={selectedExperience}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Experience;