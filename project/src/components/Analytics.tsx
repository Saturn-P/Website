import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, PieChart, LineChart, Activity } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <section id="analytics" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Analytics & Insights</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through advanced analytics and visualization techniques.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700/50 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Activity className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Data-Driven Approach</h3>
            </div>
            <p className="text-gray-300 mb-6">
              My analytical process combines statistical rigor with domain expertise to extract meaningful patterns from complex datasets.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Exploratory Data Analysis</h4>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <motion.div 
                    className="bg-blue-500 h-2 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Statistical Modeling</h4>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <motion.div 
                    className="bg-blue-500 h-2 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Predictive Analytics</h4>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <motion.div 
                    className="bg-blue-500 h-2 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Data Visualization</h4>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <motion.div 
                    className="bg-blue-500 h-2 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <BarChart className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Visualization Expertise</h3>
              </div>
              <p className="text-gray-300">
                Creating compelling visual narratives that communicate complex insights effectively to both technical and non-technical stakeholders.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mb-2">
                    <BarChart className="text-blue-400" size={24} />
                  </div>
                  <span className="text-gray-300 text-sm text-center">Interactive Dashboards</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mb-2">
                    <PieChart className="text-blue-400" size={24} />
                  </div>
                  <span className="text-gray-300 text-sm text-center">Statistical Charts</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mb-2">
                    <LineChart className="text-blue-400" size={24} />
                  </div>
                  <span className="text-gray-300 text-sm text-center">Time Series</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-blue-900/30 flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">Py</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Python</h4>
                    <p className="text-gray-400 text-xs">Data processing</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-blue-900/30 flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">Pd</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Pandas</h4>
                    <p className="text-gray-400 text-xs">Data manipulation</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-blue-900/30 flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">Tf</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">TensorFlow</h4>
                    <p className="text-gray-400 text-xs">Deep learning</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-blue-900/30 flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">Sk</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">scikit-learn</h4>
                    <p className="text-gray-400 text-xs">ML algorithms</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;