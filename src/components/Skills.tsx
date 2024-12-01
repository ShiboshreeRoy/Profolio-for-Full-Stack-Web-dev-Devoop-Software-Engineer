import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Lock, Terminal, Globe, 
  Server, Cpu, Layers, GitBranch, Settings, Shield
} from 'lucide-react';

const skillCategories = [
  {
    icon: <Code size={24} />,
    title: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Angular', level: 82 }
    ]
  },
  {
    icon: <Server size={24} />,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Ruby on Rails', level: 85 },
      { name: '.NET/C#', level: 84 }
    ]
  },
  {
    icon: <Database size={24} />,
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'MS SQL Server', level: 80 }
    ]
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Azure', level: 78 },
      { name: 'Docker/K8s', level: 85 }
    ]
  },
  {
    icon: <Shield size={24} />,
    title: 'Security & Performance',
    skills: [
      { name: 'OAuth/JWT', level: 85 },
      { name: 'HTTPS/SSL', level: 88 },
      { name: 'Performance Optimization', level: 82 }
    ]
  },
  {
    icon: <GitBranch size={24} />,
    title: 'Version Control & CI/CD',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Jenkins', level: 82 },
      { name: 'GitHub Actions', level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="text-blue-400 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;