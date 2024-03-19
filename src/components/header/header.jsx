// React & Hooks Component
import React, { useState, useEffect } from 'react';
// React Icons 
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
// CSS Imports
import './header.css'

// Fixed Header Component
const Header = ({ scrollToRef, sections, activeSection, setActiveSection, onChangeLanguage, language }) => {

  // Smooth Scrolling and Sidebar Menu States
  const [scrolling, setScrolling] = useState(false);
  const [menu, setMenu] = useState(false);

  // To Manage Scrolling Effect and changing Header Content Underline
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      const scrollPosition = window.scrollY + 200;
      const newActiveSection = sections.findIndex(section => {
        return section.ref.current.offsetTop <= scrollPosition &&
          section.ref.current.offsetTop + section.ref.current.clientHeight > scrollPosition;
      });
      setActiveSection(newActiveSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // Open and Close Sidebar - Tablet and Mobile View
  const toggleMenu = () => {
    setMenu(!menu)
  }

  // Language Change Feature
  const handleLanguageChange = (e) => {
    onChangeLanguage(e.target.value);
  };

  // Language Content for Architecture
  const archLanguage = {
    EN:"Architecture student",
    FR:"Etudiant en architecture",
    SPA:"Estudiante de arquitectura"
  }

  return (
    <div className='Header'>
      <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
        <div className="company-info">
          <div className='company-heading' onClick={() => scrollToRef(sections[0].ref, 0)}>
            <span className='firstName'>Ahmad </span>
            <span className='lastName'>BOUHMOUCH</span>
          </div>
          {!scrolling ? (<p>{archLanguage[language]}</p>) : (<></>)}

        </div>
        <div className={menu ? "menu active" : "menu"}>
          <div className='times-container' onClick={toggleMenu}>
            <FaTimes className='cancel-icon' />
          </div>
          <nav>
            <ul>
              <li className={activeSection === 0 ? 'activated' : ''}>
                <span onClick={() => scrollToRef(sections[0].ref, 0)}>
                  {sections[0].name}
                </span>
              </li>
              <li className={activeSection === 1 ? 'activated' : ''}>
                <span onClick={() => scrollToRef(sections[1].ref, 1)}>
                  {sections[1].name}
                </span>
              </li>
              <li className={activeSection >= 2 && activeSection < 6 ? 'activated' : ''}>
                <span onClick={() => scrollToRef(sections[2].ref, 2)}>
                  {sections[2].name}
                </span>
              </li>
              <li className={activeSection === 6 ? 'activated' : ''}>
                <span onClick={() => scrollToRef(sections[6].ref, 6)}>
                  {sections[6].name}
                </span>
              </li>
              <li><select onChange={handleLanguageChange}>
                <option value="EN"><span>EN</span></option>
                <option value="FR"><span>FR</span></option>
                <option value="SPA"><span>SPA</span></option>
              </select></li>
            </ul>
          </nav>
        </div>
        {!menu ? (<div className='menu-container' onClick={toggleMenu}>
          <IoMenu className='menu-icon' />
        </div>) : (<></>)}
      </div>
    </div >
  );
}

export default Header;