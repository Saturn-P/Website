import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Spotify Analysis",
      description: "Analyzed user listening patterns and created a recommendation engine using collaborative filtering.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Python", "Pandas", "scikit-learn", "Spotify API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Sleep-Health Analysis",
      description: "Investigated correlations between lifestyle factors and sleep quality using statistical models.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["R", "ggplot2", "Statistical Analysis", "Tableau"],
      github: "#",
      demo: "#"
    },
    {
      title: "Twitter-Stock Analysis",
      description: "Built a sentiment analysis model to predict stock market movements based on Twitter data.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Python", "NLTK", "TensorFlow", "Twitter API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Customer Segmentation",
      description: "Developed a clustering algorithm to identify customer segments for targeted marketing.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Python", "K-means", "PCA", "Matplotlib"],
      github: "#",
      demo: "#"
    },
    {
      title: "Energy Consumption",
      description: "Created a regression model to predict energy consumption patterns for smart grid optimization.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Python", "XGBoost", "Time Series", "Pandas"],
      github: "#",
      demo: "#"
    },
    {
      title: "NASA Objects Analysis",
      description: "Analyzed NASA's dataset of near-Earth objects to identify potential hazards and patterns.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Python", "Jupyter", "Plotly", "NASA API"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my data science projects where I apply machine learning and AI techniques to solve real-world problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;