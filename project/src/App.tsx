import React, { useEffect, useState } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Analytics from './components/Analytics';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block relative w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500/20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-blue-400 text-xl font-bold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <NeuralBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Analytics />
        
        <section id="contact" className="py-20 bg-gray-900/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;