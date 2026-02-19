import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';
import { Button } from './ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold apple-gradient-text mb-4">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Insights on automation, DevOps, and cloud technologies
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 apple-reveal stagger-${(index % 3) + 1} apple-card`}
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full text-xs font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed text-justify">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 dark:text-teal-300 dark:hover:text-teal-200 p-0 h-auto font-semibold group/btn"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
