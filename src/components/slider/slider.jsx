// React & Hooks Import
import React, { useState, useEffect, useRef } from 'react';
// CSS & Icon Imports
import './slider.css';
import Down_Arrow from '../../assets/Icons/Down_Arrow.png'
import Slider_Arrow from '../../assets/Icons/Slider_Arrow.png'
import { FaTimes } from "react-icons/fa";

// Image Slider Component
const ImageSlider = ({ images, description, language, sliderKey, id }) => {

  // Handle State of Current Index and Description Box
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewDesc, setViewDesc] = useState(false);

  // Handle View Description Hover Effect
  const [isHovered, setIsHovered] = useState(false);

  const viewRef = useRef();

  // Handle Outside Click Close Feature for View Description Box
  const handleClickOutside = (event) => {
    if (viewRef.current && !viewRef.current.contains(event.target)) {
      setViewDesc(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Left and Right Arrow Key Handle
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        goToPrevSlide();
      } else if (event.keyCode === 39) {
        goToNextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, sliderKey]);

  // Esc key button to handle close event of view description box
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setViewDesc(false);
      }
    };
    if (viewDesc) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [viewDesc]);

  // To Handle State of Mouse Event
  React.useEffect(() => {
    if (viewDesc) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [viewDesc]);

  // To Handle Touch Swipe of Slider during Mobile View
  const [startIndex, setStartIndex] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (e) => {
    setStartIndex(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startIndex || isSwiping) return;

    const currentIndex = e.touches[0].clientX;
    const difference = startIndex - currentIndex;
    const sensitivityThreshold = 100;

    if (difference > sensitivityThreshold) {
      setIsSwiping(true);
      goToNextSlide();
    } else if (difference < -sensitivityThreshold) {
      setIsSwiping(true);
      goToPrevSlide();
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    setStartIndex(null);
  };

  // Prev. and Next Sliding Feature
  const getNextIndex = () => {
    return (currentIndex + 1) % images.length;
  };

  const getPrevIndex = () => {
    return (currentIndex - 1 + images.length) % images.length;
  };

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    var slideElement = document.getElementById(id);
    if (!slideElement.classList.contains('animating')) {
      slideElement.style.animationName = 'slideBackgroundLeft';
      slideElement.style.animationDuration = '0.75s';
      slideElement.style.animationTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 1)';
      slideElement.style.animationFillMode = 'forwards';
      slideElement.classList.add('animating');
      slideElement.addEventListener('animationend', () => {
        slideElement.classList.remove('animating');
        slideElement.style.animation = '';
      });
    }
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    var slideElement = document.getElementById(id);
    if (!slideElement.classList.contains('animating')) {
      slideElement.style.animationName = 'slideBackgroundRight';
      slideElement.style.animationDuration = '0.75s';
      slideElement.style.animationTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 1)';
      slideElement.style.animationFillMode = 'forwards';
      slideElement.classList.add('animating');
      slideElement.addEventListener('animationend', () => {
        slideElement.classList.remove('animating');
        slideElement.style.animation = '';
      });
    }
    setCurrentIndex(index);
  };

  // Handle Thumbnail Direct Selection
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  //Description Word - EN, FR and SPA
  const descWord = {
    EN: "View Description",
    FR: "Vue de la description",
    SPA: "Ver descripción"
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slider" onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <img src={Slider_Arrow} className='leftArrow' alt="Left Arrow Icon" onClick={goToPrevSlide} preload />
        <div className='slides' id={id}>
          <div className="slidePrev" style={{ backgroundImage: `url(${images[getPrevIndex()].image})` }} onClick={goToPrevSlide}>
          </div>
          {id === 'proj1' && <div className={`slide ${viewDesc ? 'focused' : ''}`}
            style={{
              backgroundImage: `url(${images[currentIndex].image})`,
              backgroundSize: currentIndex > 7 ? 'contain' : '100% 100%',
            }} >
            {viewDesc ? (<div className='white-overlay' ref={viewRef}>
              <FaTimes className='cancel-btn' onClick={() => setViewDesc(false)} />
              <p>{description[language]}</p>
            </div>) : (<div className='no-overlay'>
              <div onClick={() => setViewDesc(true)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className='up-arrow' src={Down_Arrow} alt="Up Arrow" preload />
                {isHovered && (
                  <p>{descWord[language]}</p>
                )}
              </div>
            </div>)}
          </div>}
          {id === 'proj2' && <div className={`slide ${viewDesc ? 'focused' : ''}`}
            style={{
              backgroundImage: `url(${images[currentIndex].image})`,
              backgroundSize: currentIndex === 6 || currentIndex === 8 ? 'contain' : '100% 100%',
            }} >
            {viewDesc ? (<div className='white-overlay' ref={viewRef}>
              <FaTimes className='cancel-btn' onClick={() => setViewDesc(false)} />
              <p>{description[language]}</p>
            </div>) : (<div className='no-overlay'>
              <div onClick={() => setViewDesc(true)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className='up-arrow' src={Down_Arrow} alt="Up Arrow" preload />
                {isHovered && (
                  <p>{descWord[language]}</p>
                )}
              </div>
            </div>)}
          </div>}
          {id === 'proj3' && <div className={`slide ${viewDesc ? 'focused' : ''}`}
            style={{
              backgroundImage: `url(${images[currentIndex].image})`,
            }} >
            {viewDesc ? (<div className='white-overlay' ref={viewRef}>
              <FaTimes className='cancel-btn' onClick={() => setViewDesc(false)} />
              <p>{description[language]}</p>
            </div>) : (<div className='no-overlay'>
              <div onClick={() => setViewDesc(true)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className='up-arrow' src={Down_Arrow} alt="Up Arrow" preload />
                {isHovered && (
                  <p>{descWord[language]}</p>
                )}
              </div>
            </div>)}
          </div>}
          <div className="slideNext" style={{ backgroundImage: `url(${images[getNextIndex()].image})` }} onClick={goToNextSlide}>
          </div>
        </div>
        <img src={Slider_Arrow} className='rightArrow' alt="Right Arrow Icon" onClick={goToNextSlide} preload />
      </div>
      <p className='image-title'>{images[currentIndex][language]}</p>
      <div className="thumbnails">
        <div className='thumbnail-heading'>
          {language === 'SPA' ? (<p>ARQUITECTURA</p>) : (<p>ARCHITECTURE</p>)}
        </div>
        <div className='thumbnails-container'>
          <div className='thumbnail-images'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={images[currentIndex][language]}
                className={index === currentIndex ? 'active' : ''}
                onClick={() => goToSlide(index)}
                preload
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
