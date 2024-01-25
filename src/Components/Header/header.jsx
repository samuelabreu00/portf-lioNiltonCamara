import './header.css'
import imgLogo from '../assets/imgLogo.jpeg'
import React, { useRef, useEffect, useState } from 'react';

export const Header = () =>{
    
    const headerRef = useRef();
    const [currentSection, setCurrentSection] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let current = '';
        const limiteScroll = 30;
  
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            const marginOfError = 15; // Experimente diferentes valores
            if (window.scrollY >= sectionTop - marginOfError && window.scrollY < sectionTop + sectionHeight - marginOfError) {
              current = section.getAttribute('id');
          }
        });
  
        setCurrentSection(current);
  
        const header = headerRef.current;
        if (header) {
          header.classList.toggle('ativo', window.scrollY > limiteScroll);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const hamburguer = document.querySelector(".hamburguer");
      const navMenu = document.querySelector(".nav-menu");
  
      const handleHamburguerClick = () => {
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
      };
  
      if (hamburguer) {
        hamburguer.addEventListener("click", handleHamburguerClick);
      }
  
      return () => {
        if (hamburguer) {
          hamburguer.removeEventListener("click", handleHamburguerClick);
        }
      };
    }, []);
  

    return(
        <>
        <header ref={headerRef}>
            <nav className="container-header">
                 <a href="#"><img src={imgLogo} alt="" /></a>
            
                 <ul className='nav-menu'>
                    <li><a href="#home" className={currentSection === 'home' ? 'ative' : ''}>Home</a></li>
                    <li><a href="#about" className={currentSection === 'about' ? 'ative' : ''}>Sobre</a></li>
                    <li><a href="#service" className={currentSection === 'service' ? 'ative' : ''}>Serviços</a></li>
                    <li><a href="#partners" className={currentSection === 'partners' ? 'ative' : ''}>Nossos Parceiros</a></li>
                    <li><a href="#contact" className={currentSection === 'contact' ? 'ative' : ''}>Contato</a></li>
                </ul>

        <div className="container-hamburguer">
          <div className="hamburguer">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

                {/* <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#service">Serviços</a></li>
                    <li><a href="#partners">Nossos Parceiros</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul> */}
            </nav>
        </header>
        </>
    )
}
