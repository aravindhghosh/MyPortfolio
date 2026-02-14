import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-200 dark:text-blue-300/60">
                <Quote size={48} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-slate-300 text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-slate-700"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-slate-100">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-300">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
