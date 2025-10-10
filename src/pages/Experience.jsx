import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants/Constants';

const ExperienceCard = ({ company, title, period, description }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    {/* Vertical Line */}
    <div className="absolute top-0 left-0 h-full w-px bg-gray-700"></div>
    {/* Circle Indicator */}
    <div className="absolute top-8 left-[-9px] sm:left-[-13px] h-5 w-5 sm:h-7 sm:w-7 bg-gray-900 border-2 border-purple-500 rounded-full transition-all duration-300 group-hover:bg-purple-500"></div>
    
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm text-purple-400 font-semibold mb-1">{period}</p>
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <h4 className="text-lg text-gray-300 mb-4">{company}</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-400">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and key contributions in previous roles.
          </p>
        </motion.div>

        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
