
import './App.css'
import MyIntroduction from './components/MyIntroduction'
import Footer from './components/Footer'
import Demo from './components/Demo'
import Skill from './components/SkillsAndExperience'
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
    <header className="header">
    <h1>CJDP</h1>
    {/* Toggle button for mobile */}
    <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu List */}
      
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="introduction" smooth={true} offset={-150} duration={500}  onClick={closeMenu}>About Me</Link></li>
        <li> <Link to="introductiontwo" smooth={true} offset={-150} duration={500}  onClick={closeMenu}>Expertise</Link></li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
  
      </header> 
      <Element name='introduction'>
      <MyIntroduction />
      </Element>
      <Element name='introductiontwo'>
      <Skill />
      </Element>
    
    </>
  )
}

export default App
