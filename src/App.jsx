

// 

import { useState, useEffect } from "react";
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const savedTheme = localStorage.getItem("theme") || "default";
  
  // Theme State
  const [theme, setTheme] = useState("light");

  // Save Theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load Saved Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`app ${theme}`}>

      {/* Navbar */}
      <Navbar setTheme={setTheme} />

      {/* Sections */}
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;