// React & Hooks Component
import React, { useRef } from 'react';
// CSS & Icon Imports
import './modal.css';

// Modal Component
const Modal = ({ isOpen, onClose, language }) => {

    // Modal Reference to handle Esc Key and Outside Click Feature
    const modalRef = useRef();

    // Handle Outside Click Close Feature
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    // To Handle State of Mouse Event
    React.useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Modal Box Content - EN, FR and SPA
    const modalContent = {
        EN: {
            englishCV: "View CV in English",
            frenchCV: "View CV in French",
            spanishCV: " View CV in Spanish",
            close: "Close"
        },
        FR: {
            englishCV: "Voir CV en Anglais",
            frenchCV: "Voir CV en Français",
            spanishCV: "Voir CV en Espagnol",
            close: "Fermer"
        },
        SPA: {
            englishCV: "Ver Currículum en Ingles",
            frenchCV: "Ver Currículum en Francés",
            spanishCV: "Ver Currículum en Español",
            close: "Cerrar"
        },
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal" ref={modalRef}>
                <div className="modal-content">
                    <a href="https://drive.google.com/file/d/1Ve0I-rB3AzoYlU4vjbAgnXNtLzZh0imd/view?usp=drive_link" target='_blank' rel="noreferrer">{modalContent[language].englishCV}</a>
                    <a href="https://drive.google.com/file/d/1B3ZFEVekiaInfmX60u6uD6c82i3sRV9f/view?usp=drive_link" target='_blank' rel="noreferrer">{modalContent[language].frenchCV}</a>
                    <a href="https://drive.google.com/file/d/1eYjS_UBVi_cCT3eMv3wJQFp3EOQtdJs5/view?usp=drive_link" target='_blank' rel="noreferrer">{modalContent[language].spanishCV}</a>
                    <button className="close-button" onClick={onClose}>{modalContent[language].close}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
