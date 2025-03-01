import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, BarChart2, Server, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Jamshed - Data Scientist" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl z-0"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Data Scientist & AI Specialist</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Data Scientist with expertise in Machine Learning and Deep Learning. 
              With a strong foundation in Python and various ML frameworks, I specialize in transforming 
              complex data into actionable insights and building intelligent systems that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My approach combines analytical thinking with creative problem-solving to develop 
              innovative AI solutions across various domains including natural language processing, 
              computer vision, and predictive analytics.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <Brain className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Machine Learning</h4>
                  <p className="text-gray-400 text-sm">Advanced algorithms</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Code className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Python</h4>
                  <p className="text-gray-400 text-sm">Expert level</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Database className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Data Analysis</h4>
                  <p className="text-gray-400 text-sm">Statistical methods</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart2 className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Visualization</h4>
                  <p className="text-gray-400 text-sm">Interactive dashboards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Server className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Model Deployment</h4>
                  <p className="text-gray-400 text-sm">Production systems</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Research</h4>
                  <p className="text-gray-400 text-sm">Published papers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;