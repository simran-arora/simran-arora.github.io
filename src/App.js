import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import About from "./About/About"
import Research from "./Research/Research"
import Education from "./Education/Education"
import Media from './Media/Media'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const aboutRef = useRef(null);
  const researchRef = useRef(null);
  const teachingRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const navHeight = 100;
      const elementPosition = ref.current.offsetTop;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="App">
      <div className={`floating-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          {/* Hamburger Button */}
          <button 
            className="hamburger-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          {/* Navigation Links */}
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="nav-item"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(researchRef)} 
              className="nav-item"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection(mediaRef)} 
              className="nav-item"
            >
              Media
            </button>
            <button 
              onClick={() => scrollToSection(teachingRef)} 
              className="nav-item"
            >
              Teaching
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className="page-container">
        <section ref={aboutRef} id="about" className="content-section">
          <About />
        </section>
        
        <div className="section-divider"></div>
        
        <section ref={researchRef} id="research" className="content-section">
          <Research />
        </section>
        
        <div className="section-divider"></div>
        
        <section ref={mediaRef} id="media" className="content-section">
          <Media />
        </section>
        
        <div className="section-divider"></div>
        
        <section ref={teachingRef} id="teaching" className="content-section">
          <Education />
        </section>
      </div>
    </div>
  );
}

export default App;