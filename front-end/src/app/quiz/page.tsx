"use client"
import Script from 'next/script'
import QuizContainer from "@/ui/components/quiz-container";
import { Button } from "@/ui/design-system/button/button";
import React, { useState } from 'react';

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    // Vous pouvez effectuer des actions de démarrage du quiz ici
    setQuizStarted(true);
  };

  return (<>
    
        <QuizContainer />

    <Script src="./script-quiz.js" />
    </>
  );
};

export default QuizPage;
