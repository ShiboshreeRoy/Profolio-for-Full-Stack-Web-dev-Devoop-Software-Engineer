import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code2 size={24} />, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Server size={24} />, title: 'Backend', items: ['Node.js', 'Python', 'Java'] },
    { icon: <Database size={24} />, title: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 text-lg">
            I'm a passionate full-stack developer with expertise in building scalable web applications.
            With a strong foundation in both frontend and backend technologies, I create elegant
            solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;