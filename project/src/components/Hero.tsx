import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Logo3D from './Logo3D';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Logo3D />
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mt-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Data Scientist & AI Specialist
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-400 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transforming complex data into intelligent insights through machine learning and deep learning solutions.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a 
              href="#" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, backgroundColor: '#2d3748' }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="text-gray-300" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, backgroundColor: '#2d3748' }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} className="text-gray-300" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, backgroundColor: '#2d3748' }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="text-gray-300" />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a
              href="#about"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2" size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;