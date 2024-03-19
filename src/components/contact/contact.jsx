// React & Hooks Component
import React, { useState, useEffect } from 'react';
// CSS & Icon Imports
import './contact.css'
import Email_Icon from '../../assets/Icons/Email_Icon.png'
import Linkedin_Icon from '../../assets/Icons/Linkedin_Icon.png'
import Location_Icon from '../../assets/Icons/Location_Icon.png'
import Instagram_Icon from '../../assets/Icons/Instagram_Icon.png'
// 
import Notiflix from 'notiflix';

// Fourth Page - Contact Component
const Contact = React.forwardRef((props, ref) => {

    // Using React UseState and UseEffect To Handle Animation - When user first time visits the component
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


    // Contact Page Content - EN. FR and SPA
    const contactContent = {
        EN: {
            message: "Thank you for visiting !",
            contact: "CONTACT",
            notification: "The email address has been copied to the clipboard"
        },
        SPA: {
            message: "Gracias por su visita !",
            contact: "CONTACTO",
            notification: "La dirección de correo electrónico ha sido copiada al portapapeles."
        },
        FR: {
            message: "Merci pour votre visite !",
            contact: "CONTACT",
            notification: "L’adresse email a été copiée dans le presse-papiers"
        },
    }

    // Handle Email Id Copy Feature
    const handleCopy = () => {
        const textToCopy = 'ahmad.bouhmouch.pro@gmail.com';
        navigator.clipboard.writeText(textToCopy);
        Notiflix.Notify.success(contactContent[props.language].notification, {
            position: 'right-top'
        });
    };

    return (
        <div className="Contact" id='Contact' ref={ref}>
            <div className={`contact-content ${isVisible ? 'visible' : ''}`} id='animatedSection'>
                <div className='thank-you'>
                    <p className='thank-you-para'>{contactContent[props.language].message}</p>
                </div>
                <footer className='footer'>
                    <div className='footer-heading'>
                        <p>{contactContent[props.language].contact}</p>
                    </div>
                    <div className='grid-container'>
                        <div className='grid-items'>
                            <a href="https://www.linkedin.com/in/ahmad-bouhmouch-532483265/" target='_blank' rel="noreferrer"><img src={Linkedin_Icon} width={30} alt="LinkedIn Icon" preload /><span>Ahmad BOUHMOUCH</span></a>
                        </div>
                        <div className='grid-items'>
                            <div className='contact-email' onClick={handleCopy}>
                                <img src={Email_Icon} width={30} alt="Gmail Icon" preload />
                                <span>ahmad.bouhmouch.pro@gmail.com</span>
                            </div>
                        </div>
                        <div className='grid-items'>
                            <a href="https://www.instagram.com/ahmad_bmch/" target='_blank' rel="noreferrer"><img src={Instagram_Icon} width={30} alt="Instagram Icon" preload /><span>Ahmad_bmch</span></a>
                        </div>
                        <div className='grid-items'>
                            <a href="https://maps.app.goo.gl/VRo9boJYJKEcZacUA" target='_blank' rel="noreferrer"><img src={Location_Icon} width={30} alt="Google Map Icon" preload /><span>10000, Rabat, Morocco</span></a>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    );
});

export default Contact;