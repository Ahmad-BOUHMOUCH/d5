// React & Hooks Component
import React, { useState, useEffect, useRef } from 'react';
// CSS & Image Imports
import Ahmad_Bouhmouch from '../../assets/Profile/Ahmad_Bouhmouch.png'
import './about.css'
// Modal Component
import Modal from '../modal/modal';

// Second Page - About Component
const About = React.forwardRef((props, ref) => {

  // To Handle Open and Close Modal Box State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Using UseEffect Hook To Handle Esc Key to close Modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // About Section Content - EN, FR & SPA
  const aboutContent = {
    EN: {
      heading: "WHO AM I ?",
      p1: (<p>I am <span className='special-span'>Ahmad BOUHMOUCH</span>, a fourth-year <span className='special-span'>architecture student</span> at the International University of Rabat in Morocco. My passion for design and art, particularly the human aspect of architecture is complemented by my roles as <span className='special-span'>social media content creator</span> and a <span className='special-span'>concurrent sports coach</span>.</p>),
      p2: (<p>"Beyond my academic pursuits, I delve into the realm of fitness modeling, showcasing my love for fashion. This <span className='special-span'>multifaceted panel</span> along with my ability to speak <span className='special-span'>5 languages</span> reflects my adaptability and a keen interest in diverse fields.</p>),
      p3: (<p><span className='special-span'>Aspiring to practice architecture worldwide</span>, I am eager to gain valuable professional experience on a global scale. To learn more about my technical background, please refer to my <span className='special-span'>CV</span> and my <span className='special-span'>Portfolio</span>.</p>),
      button: "VIEW MY CV",
      subHeading1: "ARCHITECTURE",
      subHeading2: "STUDENT"
    },
    SPA: {
      heading: "¿QUIÉN SOY YO?",
      p1: (<p>Soy <span className='special-span'>Ahmad BOUHMOUCH</span>, <span className='special-span'>estudiante de arquitectura</span> de cuarto año en la Universidad Internacional de Rabat en Marruecos. Mi pasión por el diseño y el arte, especialmente el aspecto humano de la arquitectura, se complementa con mis roles como <span className='special-span'>creador de contenido</span> en redes sociales y <span className='special-span'>entrenador deportivo</span>.</p>),
      p2: (<p>Más allá de mis estudios académicos, me sumerjo en el mundo del modelaje y del fitness, mostrando mi amor por la moda. Este <span className='special-span'>panel polifacético</span>, junto con mi capacidad para hablar <span className='special-span'>5 idiomas</span>, refleja mi adaptabilidad y un gran interés en campos diversos.</p>),
      p3: (<p><span className='special-span'>Con la aspiración de ejercer la arquitectura a nivel mundial</span>, estoy ansioso por obtener una valiosa experiencia profesional a escala global. Para obtener más información sobre mi formación técnica, consulte mi <span className='special-span'>currículum</span> y mi <span className='special-span'>portafolio</span>.</p>),
      button: "VER MI CIRRICULUM",
      subHeading1: "ESTUDIANTE DE",
      subHeading2: "ARQUITECTURA"
    },
    FR: {
      heading: "QUI SUIS-JE?",
      p1: (<p>Je suis <span className='special-span'>Ahmad BOUHMOUCH</span>, <span className='special-span'>étudiant en architecture</span> en quatrième année à l'Université Internationale de Rabat au Maroc. Ma passion pour le design et l'art, en particulier l'aspect humain de l'architecture, est complétée par mes rôles de <span className='special-span'>créateur de contenu</span> sur les réseaux sociaux et de <span className='special-span'>coach sportif</span>.</p>),
      p2: (<p>Au-delà de mes études académiques, je m'immerge dans le domaine du mannequinat et du fitness. Ce <span className='special-span'>panel polyvalent</span>, associé à ma capacité de parler <span className='special-span'>5 langues</span>, reflète mon adaptabilité et un vif intérêt pour des domaines divers.</p>),
      p3: (<p><span className='special-span'>Aspirant à exercer la profession d'architecte à l'échelle mondiale</span>, je suis impatient d'acquérir de précieuses expériences professionnelles. Pour en savoir plus sur mon parcours technique, veuillez consulter mon <span className='special-span'>CV</span> et mon <span className='special-span'>portfolio</span>.</p>),
      button: "VOIR MON CV",
      subHeading1: "ÉTUDIANT EN",
      subHeading2: "ARCHITECTURE"
    },
  }

  // Open Modal Feature
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal Feature
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="About" id='About' ref={ref}>
      <div className='profile-section'>
        <div className='left-content'>
          <h3 className='heading1'>{aboutContent[props.language].subHeading1}</h3>
          <h3 className='heading2'>{aboutContent[props.language].subHeading2}</h3>
          <img className='profile-pic' src={Ahmad_Bouhmouch} alt="Profile Picture - Ahmad Bouhmouch" preload />
        </div>
      </div>
      <div className='about-section'>
        <h3><i>{aboutContent[props.language].heading}</i></h3>
        {aboutContent[props.language].p1}
        {aboutContent[props.language].p2}
        {aboutContent[props.language].p3}
        <button onClick={openModal} className='view-cv'>{aboutContent[props.language].button}</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} language={props.language} />
      </div>
    </div>
  );
});

export default About;