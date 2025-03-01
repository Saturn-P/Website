import React from 'react';
import { motion } from 'framer-motion';
import SkillSphere from './SkillSphere';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Deep Learning",
      skills: ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers", "Transfer Learning"]
    },
    {
      title: "Programming",
      skills: ["Python", "R", "SQL", "JavaScript", "Shell Scripting"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "Pandas", "NumPy"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/80">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit spans across various domains of data science, machine learning, and AI.
          </p>
        </motion.div>
        
        <div className="mb-20">
          <SkillSphere />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;