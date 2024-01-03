'use client'

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import './style-quiz.css'
/* eslint-disable react/no-unescaped-entities */

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Récupérer les questions
        const { data: questions, error } = await supabase
          .from('questions')
          .select('*');
  
        if (error) {
          console.error('Erreur lors de la récupération des questions :', error.message);
          return;
        }
  
        // Récupérer les réponses associées
        const { data: answers, error: answersError } = await supabase
          .from('answers')
          .select('question_id, reponse_text');
  
        if (answersError) {
          console.error('Erreur lors de la récupération des réponses :', answersError.message);
          return;
        }
  
        // Récupérer les réponses correctes associées
        const { data: correctAnswers, error: correctAnswersError } = await supabase
          .from('correct_answer')
          .select('question_id, reponse_text');
  
        if (correctAnswersError) {
          console.error('Erreur lors de la récupération des réponses correctes :', correctAnswersError.message);
          return;
        }
  
        // Associer les réponses et les réponses correctes aux questions
        const questionsWithAnswers = questions.map((question) => {
          const questionAnswers = answers.filter((a) => a.question_id === question.id);
          const questionCorrectAnswers = correctAnswers.filter((ca) => ca.question_id === question.id);
          const answersWithCorrectFlag = questionAnswers.map((a) => ({
            ...a,
            isCorrect: questionCorrectAnswers.some((ca) => ca.correct_answer === a.answer),
          }));
        
          return {
            ...question,
            answers: answersWithCorrectFlag,
          };
        });
        console.log('questionsWithAnswers:', questionsWithAnswers);

        setQuestions(questionsWithAnswers);
  
      } catch (error) {
        console.error('Erreur :', error.message);
      }
    };
  
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const delayInSeconds = questions[currentQuestionIndex].delay;
      setTimeRemaining(delayInSeconds);
  
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
  
      // Nettoyer le timer lorsque le composant est démonté ou le délai est écoulé
      return () => {
        clearInterval(timer);
      };
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    if (timeRemaining === 0) {
      moveToNextQuestion();
    }
  }, [timeRemaining]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (selectedAnswer) => {
    // Récupérer les réponses correctes pour la question en cours
    const correctAnswers = currentQuestion.answers
      .filter((answer) => answer.isCorrect)
      .map((correctAnswer) => correctAnswer.reponse_text);
  
    // Vérifier si la réponse sélectionnée est correcte
    const isCorrectAnswer = correctAnswers.includes(selectedAnswer);
  
    if (isCorrectAnswer) {
      setScore((prevScore) => prevScore + 1);
      console.log(currentQuestion.answers)
    }
  
    moveToNextQuestion();
    console.log(currentQuestion.answers)
  };
  
  
  

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Quiz completed
      console.log('Quiz complet!');
      console.log('Score final :', score);
    }
  };

  if (!currentQuestion) {
    return <p>Chargement...</p>;
  }

  return (
    <div id="quiz-container">
      <div id="section-name">{currentQuestion.section_nom}</div>
      <div id="timer"><span id="time-display">{timeRemaining}</span></div>
      <h1>Question {currentQuestionIndex + 1}</h1>
      <div id="question-container">
      <p id="question">{currentQuestion.question_text}</p>
      </div>
      {/* Afficher les réponses pour le type 'multiple-choice' */}
      {currentQuestion.type_nom === 'multiple-choice' && (
        <div className="btn-container">
          {currentQuestion.answers.map((answer, index) => (
            <button
              className="btn"
              key={index}
              onClick={() => handleAnswerClick(answer.reponse_text)}
            >
              {answer.isCorrect ? 'Réponse correcte: ' : ''}
              {answer.reponse_text || 'Réponse manquante'}
            </button>
          ))}
        </div>
      )}

      {/* Afficher le champ de texte pour le type 'open-ended' */}
      {currentQuestion.type_nom === 'open-ended' && (
        <div>
          <input
            type="text"
            placeholder="Répondez ici..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button className="btn" onClick={() => handleAnswerClick(userAnswer)}>Soumettre</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;


















// 'use client';
// import React, { useState, useEffect } from "react";
// import { supabase } from "@/utils/supabase";

// import './style-quiz.css';

// function Quiz() {
//   const [timer, setTimer] = useState(null);
//   const [totalScore, setTotalScore] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
//   const [scores, setScores] = useState({});
//   const [questions, setQuestions] = useState([]);
//   const [timeRemaining, setTimeRemaining] = useState(0);
//   const [answerInput, setAnswerInput] = useState('');



  
  
  

//   function startQuiz() {
//     console.log("Starting quiz");
//     setCurrentSectionIndex(0);
//     setScores({});
//   }

//   function renderAnswerOptions() {
//     const currentQuestion = questions[currentQuestionIndex];
  
//     if (currentQuestion && currentQuestion.type_nom === 'multiple-choice') {
//       return (
//         <>
//           {currentQuestion.answers.map((answer, index) => (
//             <button key={index} onClick={() => selectAnswer(answer, currentQuestion.correctAnswer)}>
//               {answer}
//             </button>
//           ))}
//         </>
//       );
//     } else if (currentQuestion && currentQuestion.type_nom === 'open-ended') {
//       return (
//         <input
//           type="text"
//           placeholder="Répondez ici..."
//           onChange={(e) => setAnswerInput(e.target.value)}
//           value={answerInput}
//         />
//       );
//     }
  
//     // Gestion par défaut si currentQuestion n'existe pas ou si le type n'est pas reconnu
//     return null;
//   }
  
  

//   function showSection(section) {
//     setCurrentQuestionIndex(0);
//     setQuestions(section.questions);
//   }

//   function showQuestion(question) {
//     resetTimer();
//     setQuestions(question);
//   }

//   function handleSubmitButtonClick() {
//     console.log('Bouton Soumettre cliqué!');
//     // ...

//     moveToNextQuestionOrSection(false);
//     console.log('After moveToNextQuestionOrSection');
//   }


//   function startTimer(duration, callback, submitCallback) {
//     if (timer === null) {
//       let timeRemaining = duration;
//       updateTimerDisplay(timeRemaining);
//       const intervalId = setInterval(() => {
//         timeRemaining--;
//         updateTimerDisplay(timeRemaining);

//         if (timeRemaining < 0) {
//           clearInterval(intervalId);
//           resetTimer();
//           callback();
//         }
//       }, 1000);

//       setTimer(intervalId);
//     }
//   }

//   function updateTimerDisplay(time) {
//     setTimeRemaining(time);
//   }

//   function resetTimer() {
//     if (timer !== null) {
//       console.log('Timer reset');
//       clearInterval(timer);
//       setTimer(null);
//     }
//   }

//   function selectAnswer(selectedAnswer, correctAnswer) {
//     const currentQuestion = questions[currentQuestionIndex];
  
//     if (currentQuestion.type_nom === 'open-ended') {
//       handleOpenEndedAnswer(selectedAnswer, currentQuestion.correctAnswers);
//     } else {
//       handleMultipleChoiceAnswer(selectedAnswer, correctAnswer);
//     }
//   }

//   function moveToNextQuestionOrSection(isTimeUp) {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       if (currentSectionIndex < questions.length - 1) {
//         setCurrentSectionIndex((prevIndex) => prevIndex + 1);
//         setCurrentQuestionIndex(0);
//         showSection(questions[currentSectionIndex]);
//       } else {
//         console.log('Fin du quiz !');
//         const sectionNames = questions.map((question) => question.section_id);
//         localStorage.setItem('sectionNames', JSON.stringify(sectionNames));
//         localStorage.setItem('questions', JSON.stringify(questions));
//         window.location.href = `result.html?totalScore=${totalScore}&sectionScores=${encodeURIComponent(
//           JSON.stringify(questions.map((question) => question.score))
//         )}`;
//         return;
//       }
//     }
  
//     resetTimer();
  
//     if (timeRemaining <= 0) {
//       showQuestion(questions[currentSectionIndex][currentQuestionIndex]);
//     } else {
//       startTimer(
//         questions[currentSectionIndex][currentQuestionIndex].delay,
//         () => moveToNextQuestionOrSection(),
//         () => {}
//       );
//     }
//   }

//   function normalizeNumber(number) {
//     return number.replace(/[,.]/g, '.');
//   }

//   function normalizeString(str) {
//     const normalized = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

//     if (!isNaN(normalized)) {
//       return normalizeNumber(normalized);
//     }

//     return normalized.replace(/\*/g, 'x').replace(/x/g, '*');
//   }

//   function handleOpenEndedAnswer(userAnswers, correctAnswers) {
//     console.log('Valeur de userAnswers:', userAnswers);
//     console.log('Valeur de correctAnswers:', correctAnswers);

//     const trimmedUserAnswers = userAnswers.map((answer) => normalizeString(answer));

//     if (correctAnswers) {
//       let correctCount = 0;

//       if (Array.isArray(correctAnswers)) {
//         const correctAnswerElements = correctAnswers
//           .flatMap((correctAnswer) => correctAnswer.split(','))
//           .map((correctAnswer) => normalizeString(correctAnswer.trim()));

//         correctCount = trimmedUserAnswers.reduce((count, userAnswer) => {
//           const normalizedUserAnswer = normalizeString(userAnswer);

//           if (
//             correctAnswerElements.some(
//               (correctAnswerElement) =>
//                 normalizedUserAnswer.toLowerCase() === correctAnswerElement.toLowerCase() ||
//                 isNumericMatch(normalizedUserAnswer, correctAnswerElement)
//             )
//           ) {
//             return count + 1;
//           }
//           return count;
//         }, 0);
//       }

//       console.log(`Nombre de champs corrects : ${correctCount}`);
//       updateScores(correctCount === trimmedUserAnswers.length);
//       console.log(scores);
//     }
//   }

//   function isNumericMatch(value1, value2) {
//     const epsilon = 0.01;
//     const num1 = parseFloat(value1.replace(',', '.'));
//     const num2 = parseFloat(value2.replace(',', '.'));

//     return Math.abs(num1 - num2) < epsilon;
//   }

//   function handleMultipleChoiceAnswer(selectedAnswer, correctAnswer) {
//     if (selectedAnswer === correctAnswer) {
//       console.log('Correct!');
//       updateScores(true);
//     } else {
//       console.log('Incorrect!');
//       updateScores(false);
//     }

//     moveToNextQuestionOrSection();
//   }

//   function updateScores(isCorrect) {
//     if (isCorrect) {
//       quizData[currentSectionIndex].score++;
//       setTotalScore((prevScore) => prevScore + 1);
//     }
//   }

//   useEffect(() => {
//     startQuiz();
//     return () => {
//       resetTimer();
//     };
//   }, []);

//   return (
//     <>
//       <div id="question-image">
//         {questions && questions[currentQuestionIndex]?.image_url && (
//           <img src={questions[currentQuestionIndex].image_url} alt="Question" />
//         )}
//       </div>
//       <div id="quiz-container">
//         {/* Render your quiz UI here */}
//         <div id="question-count">{`${currentQuestionIndex + 1}/${questions.length}`}</div>
//         <div id="section-name">{questions && questions[currentQuestionIndex]?.section_id}</div>
//         <div id="timer"><span id="time-display">{timeRemaining}</span></div>
//         <div id="section-container"></div>
//         <div id="question-container">
//           <p id="question">{questions && questions[currentQuestionIndex]?.question_text}</p>
//         </div>
//         <div id="answer-buttons" className="btn-container">
//           {renderAnswerOptions()}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Quiz;







