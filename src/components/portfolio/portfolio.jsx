// React & Hooks Component
import React, { useState, useEffect } from 'react';
// CSS, Icon & Image Imports
import './portfolio.css'
import Portfolio_Image from '../../assets/Ribat_Al_Fath_High_School/Ribat_Al_Fath_High_School_Up_Close_Elevation_View.jpg'
import Workspace_View_N1 from '../../assets/Workspace/Workspace_View_N°1.jpg'
import Ribat_Al_Fath_High_School_Main_View from '../../assets/Ribat_Al_Fath_High_School/Ribat_Al_Fath_High_School_Main_View.jpg'
import Nautic_Hotel_By_Night from '../../assets/Nautic_Hotel/Nautic_Hotel_By_Night.jpg'
import { FaEye } from 'react-icons/fa';

// Third Page - Portfolio Component 
const Portfolio = React.forwardRef((props, ref) => {

  // State Variable for Hover Effect
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  // To Handle Animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('animatedSection');
      const topPosition = section.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (topPosition < screenHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Portfolio Page Content - EN, FR and SPA
  const portfolioContent = {
    EN: {
      display1: "ARCHITECTURE",
      display2: "PROJECTS"
    },
    FR: {
      display1: "ARCHITECTURE",
      display2: "PROJETS"
    },
    SPA: {
      display1: "ARQUITECTURA",
      display2: "PROYECTOS"
    }
  }

  // Project Variable
  const projects = [
    { EN: "1. WORKSPACE", FR: "1. PLATEAUX BUREAUX", SPA: "1. OFICINAS", image: Workspace_View_N1, hovered: isHovered1, setHovered: setIsHovered1 },
    { EN: "2. HIGH SCHOOL", FR: "2. ÉCOLE SECONDAIRE", SPA: "2. ESCUELA SECUNDARIA", image: Ribat_Al_Fath_High_School_Main_View, hovered: isHovered2, setHovered: setIsHovered2 },
    { EN: "3. HOTEL", FR: "3. HÔTEL", SPA: "3. HOTEL", image: Nautic_Hotel_By_Night, hovered: isHovered3, setHovered: setIsHovered3 },
  ]

  // Feature for Smooth Scrolling
  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Portfolio" id='Portfolio' ref={ref}>
      <div className={`portfolio-heading ${isVisible ? 'visible' : ''}`} id='animatedSection'>
        <div className="portfolio-words">
          <div className="portfolio-word">
            <span>P</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            {props.language === "SPA" ? (<span>A</span>) : (<></>)}
            <span>F</span>
            <span><img src={Portfolio_Image} className='port' alt="Portfolio Image" preload /></span>
          </div>
          <div className="portfolio-word">
            <span>L</span>
            <span>I</span>
            <span>O</span>
          </div>
          <hr />
          <p>{portfolioContent[props.language].display1}</p>
        </div>
        <div className='portfolio-projects'>
          {projects.map((project, index) => (
            <div className='overlayed-image'>
              <div className="image-container"
                onMouseEnter={() => project.setHovered(true)}
                onMouseLeave={() => project.setHovered(false)}
                onClick={() => scrollToDiv(props.refArray[index])}
              >
                <img src={project.image} alt={project[props.language]} className="image" preload />
                {project.hovered && (
                  <div className="overlay">
                    <FaEye size={24} color="white" />
                  </div>
                )}
              </div>
              <span className='project-name'>{project[props.language]}</span>
            </div>
          ))}
        </div>
        <div className='word-spilt'>
          {portfolioContent[props.language].display2.split('').map((letter, index) => (
            <div key={index} className="letter" style={{ '--index': index }}>
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Portfolio;