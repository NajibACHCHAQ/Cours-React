"use client"
import { useEffect } from 'react';
import Image from 'next/image';

export default function QuizContainer() {
  useEffect(() => {
    // Créer un élément de script
    const script = document.createElement('script');
    script.src = './script-quiz.js'; // Spécifiez le chemin correct

    // Ajouter le script à la fin du corps du document
    document.body.appendChild(script);

    // Nettoyer le script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Le tableau de dépendances vide signifie que cela ne s'exécutera qu'une fois après le montage initial

  return (
    <>
      <Image id="question-image" src="" alt="Question Image" />
      <div id="quiz-container">
        <span id="question-count"></span>
        <p id="section-name"></p>
        <div id="timer"><span id="time-display"></span></div>
        <div id="section-container"></div>
        <div id="question-container">
          <p id="question"></p>
        </div>
        <div id="answer-buttons" className="btn-container">
          {/* <!-- Les boutons de réponse seront ajoutés ici via JavaScript --> */}
        </div>
      </div>
    </>
  );
}