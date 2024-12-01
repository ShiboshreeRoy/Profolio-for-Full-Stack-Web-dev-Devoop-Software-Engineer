import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Briefcase, DollarSign, MapPin } from 'lucide-react';

const jobListings = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators',
    location: 'Remote',
    salary: '$120k - $160k',
    type: 'Full-time',
    skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
    description: 'Looking for an experienced full-stack developer to join our growing team...'
  },
  {
    title: 'Software Engineer',
    company: 'Global Solutions Inc.',
    location: 'New York, NY',
    salary: '$100k - $140k',
    type: 'Full-time',
    skills: ['JavaScript', 'Python', 'Docker', 'PostgreSQL'],
    description: 'Join our engineering team to build scalable enterprise solutions...'
  }
];

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">Job Opportunities</h2>
          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={16} />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobBoard;