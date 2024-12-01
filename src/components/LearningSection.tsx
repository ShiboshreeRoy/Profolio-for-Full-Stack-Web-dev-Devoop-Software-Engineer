import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Brain, Users, Target, Rocket } from 'lucide-react';

const learningSteps = [
  {
    icon: <BookOpen size={24} />,
    title: 'Start with Fundamentals',
    description: 'Master the basics of HTML, CSS, and JavaScript before moving to frameworks.'
  },
  {
    icon: <Code size={24} />,
    title: 'Practice Daily',
    description: 'Code every day, even if it\'s just for 30 minutes. Consistency is key.'
  },
  {
    icon: <Brain size={24} />,
    title: 'Build Projects',
    description: 'Create real-world projects to apply your knowledge and build portfolio.'
  },
  {
    icon: <Users size={24} />,
    title: 'Join Communities',
    description: 'Connect with other developers through Discord, Reddit, or local meetups.'
  },
  {
    icon: <Target size={24} />,
    title: 'Set Clear Goals',
    description: 'Define your learning path and track your progress regularly.'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Keep Learning',
    description: 'Stay updated with new technologies and industry best practices.'
  }
];

const LearningSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Learning Programming Made Easy
          </h2>
          <p className="text-gray-300 text-lg">
            Follow these steps to start your programming journey effectively
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {learningSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="text-blue-400 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;