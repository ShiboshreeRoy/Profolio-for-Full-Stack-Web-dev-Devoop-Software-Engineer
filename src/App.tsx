import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIFeatures from './components/AIFeatures';
import LearningSection from './components/LearningSection';
import JobBoard from './components/JobBoard';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AIFeatures />
      <LearningSection />
      <JobBoard />
      <Contact />
    </div>
  );
}

export default App;