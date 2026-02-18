import React, { useState } from 'react';
import { X, CheckCircle, Users, Clock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Button } from './ui/button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-4 sm:px-6 py-4 flex items-start sm:items-center justify-between gap-3 z-10">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-slate-100 break-words">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
          >
            <X size={24} className="text-gray-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
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
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg text-justify">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 text-blue-700 dark:text-teal-200 rounded-full text-sm font-medium border border-blue-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm text-gray-600 dark:text-slate-400">Duration</div>
              <div className="font-bold text-gray-900 dark:text-slate-100">{project.details.duration}</div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm text-gray-600 dark:text-slate-400">Team Size</div>
              <div className="font-bold text-gray-900 dark:text-slate-100">{project.details.team}</div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm text-gray-600 dark:text-slate-400">Role</div>
              <div className="font-bold text-gray-900 dark:text-slate-100 text-xs">{project.details.role}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-3">Project Overview</h3>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-justify">{project.details.overview}</p>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-3">Challenges</h3>
            <ul className="space-y-2">
              {project.details.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1.5">•</span>
                  <span className="text-gray-700 dark:text-slate-300 text-justify">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-3">Solutions Implemented</h3>
            <ul className="space-y-2">
              {project.details.solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-slate-300 text-justify">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-3">Results & Impact</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.details.results.map((result, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-emerald-900/30 dark:to-green-900/30 border border-green-200 dark:border-emerald-700 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 dark:text-slate-200 text-sm text-justify">{result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 px-4 sm:px-6 py-4 flex justify-end">
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
      <section id="projects" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Showcasing automation solutions that drive efficiency and cost savings
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 sm:hover:scale-105 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3 flex-grow text-justify">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 text-blue-700 dark:text-teal-200 rounded-full text-sm font-medium border border-blue-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => openModal(project)}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold"
                  >
                    View Details
                  </Button>
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
