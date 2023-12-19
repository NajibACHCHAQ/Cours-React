"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Header() {
  useEffect(() => {
    // Code à exécuter après le rendu du composant
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 70,
      showCursor: false,
      backSpeed: 35,
      loop: true,
    });

    // Nettoyez le Typed instance lors du démontage du composant pour éviter les fuites de mémoire
    return () => {
      typed.destroy();
    };
  }, []); // Le tableau vide [] assure que le useEffect ne s'exécute qu'une seule fois après le montage initial du composant

  return (
    <>
      <header className="entete">
      <Image className="logo-greta-region-entete" src="/assets/logo-greta-21.webp" alt="Logo Greta" width="100" height="100" />
        <div id="typed-strings">
          <p>Une formation <strong>sur mesure</strong>.</p>
          <p>Une formation <strong>adaptée à vos besoins</strong>.</p>
          <p>Une équipe pédagogique <strong> à votre écoute</strong>.</p>
        </div>
        <h2><span className="animation-entete" id="typed"></span></h2>
        <div className="titre-container">
          <Image src="/assets/boat.png" alt="Boat" width="100" height="100" />
          <div className="sous-titre">Accompagne vos ambitions</div>
        </div>
      </header>
    </>
  );
}
