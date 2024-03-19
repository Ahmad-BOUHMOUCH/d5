// React & Hooks Component
import React, { useRef, useState } from 'react';
// Component Imports
import Header from "../header/header";
import Home from "../home/home";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";
import Projects from '../projects/projects';

// Application - Main Component
const Main = () => {

  // Handle Language and Active Page State Variable
  const [activeSection, setActiveSection] = useState(0);
  const [language, setLanguage] = useState('EN');

  // Navbar Content - EN, FR and SPA
  const navContent = {
    EN: {
      home: "HOME",
      about: "ABOUT ME",
      portfolio: "PORTFOLIO",
      contact: "CONTACT"
    },
    SPA: {
      home: "INICIO",
      about: "ACERCA DE MI",
      portfolio: "PORTAFOLIO",
      contact: "CONTACTO"
    },
    FR: {
      home: "ACCUEIL",
      about: "À PROPOS DE MOI",
      portfolio: "PORTFOLIO",
      contact: "CONTACT"
    },
  };

  // Ref Variable to handle Navigation
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const projectArray = [project1Ref, project2Ref, project3Ref];

  // Handle Scroll Feature 
  const scrollToRef = (ref, index) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(index);
    }
  };

  // Handle Home Page Down Arrow Effect
  const downArrow = () => {
    if (aboutRef && aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(1);
    }
  };

  // Handle Language Change Feature
  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  
  return (
    <div className="Main">
      <Header scrollToRef={scrollToRef}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onChangeLanguage={handleChangeLanguage}
        language={language}
        sections={[
          { name: navContent[language].home, ref: homeRef },
          { name: navContent[language].about, ref: aboutRef },
          { name: navContent[language].portfolio, ref: portfolioRef},
          { name: navContent[language].portfolio, ref: project1Ref },
          { name: navContent[language].portfolio, ref: project2Ref },
          { name: navContent[language].portfolio, ref: project3Ref },
          { name: navContent[language].contact, ref: contactRef },
        ]}></Header>
      <Home ref={homeRef} language={language} downArrow={downArrow}></Home>
      <About ref={aboutRef} language={language}></About>
      <Portfolio ref={portfolioRef} refArray={projectArray} language={language}></Portfolio>
      <Projects refArray={projectArray} language={language}></Projects>
      <Contact ref={contactRef} language={language}></Contact>
    </div>
  );
}

export default Main;