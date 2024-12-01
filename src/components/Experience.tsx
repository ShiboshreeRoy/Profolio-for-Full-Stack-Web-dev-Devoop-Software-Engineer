import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    location: 'San Francisco, CA',
    achievements: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Innovation Labs',
    period: '2019 - 2021',
    location: 'New York, NY',
    achievements: [
      'Developed scalable REST APIs using Node.js and Express',
      'Built responsive web applications using React and TypeScript',
      'Optimized database queries improving performance by 40%'
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg p-6 relative"
            >
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Briefcase size={20} />
                  <span className="font-semibold">{exp.role}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={20} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={20} />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{exp.company}</h3>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;