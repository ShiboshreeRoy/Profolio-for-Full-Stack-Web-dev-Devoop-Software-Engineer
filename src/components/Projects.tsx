import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Database, Lock, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise E-Commerce Platform',
    description: 'Full-stack e-commerce solution with .NET Core backend, React frontend, and Azure cloud infrastructure',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', '.NET Core', 'Azure', 'SQL Server'],
    features: ['Microservices', 'OAuth2', 'CI/CD'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Healthcare Management System',
    description: 'Ruby on Rails application for managing patient records and appointments',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'AWS'],
    features: ['HIPAA Compliant', 'Real-time Updates'],
    github: '#',
    demo: '#'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics platform with machine learning capabilities',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Python', 'React', 'TensorFlow', 'Docker'],
    features: ['ML Models', 'Real-time Data'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;