import React, { useEffect } from 'react';
import './BackToTop.css';
import { FaChevronUp } from 'react-icons/fa';

function BackToTop() {
  useEffect(() => {
    const toTop = document.querySelector(".back-to-top");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        toTop.classList.add("ativado");
      } else {
        toTop.classList.remove("ativado");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // O segundo parâmetro vazio garante que o efeito é executado apenas uma vez após a montagem

  return (
    <div className="back-to-top">
      <div className="back-to-top-content">
        <a href="#top"><FaChevronUp/></a>
      </div>
    </div>
  );
}

export default BackToTop
    