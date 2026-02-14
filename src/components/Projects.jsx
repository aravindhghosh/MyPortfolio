import React, { useState } from 'react';
import { X, CheckCircle, Users, Clock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Button } from './ui/button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Duration</div>
              <div className="font-bold text-gray-900">{project.details.duration}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Team Size</div>
              <div className="font-bold text-gray-900">{project.details.team}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Role</div>
              <div className="font-bold text-gray-900 text-xs">{project.details.role}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed">{project.details.overview}</p>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
            <ul className="space-y-2">
              {project.details.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1.5">•</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Solutions Implemented</h3>
            <ul className="space-y-2">
              {project.details.solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Results & Impact</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.details.results.map((result, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{result}</span>
                  </div>
                </div>
              ))}
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Showcasing automation solutions that drive efficiency and cost savings
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <Button
                        onClick={() => openModal(project)}
                        className="w-full bg-white/90 backdrop-blur-sm hover:bg-white text-blue-600 font-semibold"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Projects;