"use client"
import Script from 'next/script';
import React, { useState, useEffect } from 'react';
import initializeQuiz from '@/app/quiz/script-quiz'; // Assurez-vous de remplacer le chemin correct
import QuizContainer from '@/ui/components/quiz-container';

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    // Appel de la fonction d'initialisation du quiz après le rendu de la page
    initializeQuiz();
  }, []); // Le tableau vide [] assure que cela ne se déclenche qu'une seule fois après le montage initial

  const startQuiz = () => {
    // Vous pouvez effectuer des actions de démarrage du quiz ici
    setQuizStarted(true);
  };

  return (
    <>
      <QuizContainer/>
      <Script src="/script-quiz.js" />
    </>
  );
};

export default QuizPage;

