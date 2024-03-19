// React & Hooks Component
import React from 'react';
// CSS & Icon Imports
import './home.css'
import Down_Arrow from '../../assets/Icons/Down_Arrow.png'

// First Page - Home Component
const Home = React.forwardRef((props, ref) => {

  // Home Page Content - EN, FR and SPA
  const homeContent = {
    EN: {
      message: "Welcome to the creative world of <strong>Ahmad BOUHMOUCH</strong>, aspiring architect. Browse through my innovative projects showcased in this portfolio.",
    },
    SPA: {
      message: "Bienvenido al mundo creativo de <strong>Ahmad BOUHMOUCH</strong>, arquitecto aspirante. Explore a través de mis proyectos innovadores destacados en este portafolio.",
    },
    FR: {
      message: "Bienvenue dans le monde créatif d'<strong>Ahmad BOUHMOUCH</strong>, architecte en devenir. Parcourez à travers ce Portfolio les projets innovants sur lesquels j’ai travaillé.",
    },
  };

  return (
    <div className="Home" id='Home' ref={ref}>
      <div className='home-content'>
        <div className='para-content'>
          <p dangerouslySetInnerHTML={{ __html: homeContent[props.language].message }}></p>
        </div>
        <div className='down-icon' onClick={props.downArrow}>
          <img className='down-arrow' src={Down_Arrow} alt="Down Arrow" preload />
        </div>
      </div>
    </div>
  );
});

export default Home;