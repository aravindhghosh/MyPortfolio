import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-gray-400">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors duration-200">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors duration-200">
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.location}</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={18} />
                </a>
              )}
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500" /> by {personalInfo.name.split(' ')[0]} with help of <a href="https://app.emergent.sh/home" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Emergent</a>
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
