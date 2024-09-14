import React, { useState, useEffect } from 'react';
import Button from './Button';
import { getQuestions } from '../utils/quizQuestions';
import LoadingSpinner from './LoadingSpinner';

function Quiz({ category, questionCount, setScore, finishQuiz, language }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchedQuestions = getQuestions(category, questionCount, language);
    setTimeout(() => {
      setQuestions(fetchedQuestions);
      setIsLoading(false);
    }, 3000);
  }, [category, questionCount, language]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      finishQuiz();
    }
  };

  const translations = {
    en: {
      submit: "Submit Answer",
      next: "Next Question",
      finish: "Finish Quiz",
      correct: "Correct!",
      incorrect: "Incorrect!",
      correctAnswer: "The correct answer is:",
      loading: "Preparing the quiz",
      progress: "Question"
    },
    no: {
      submit: "Avgi svar",
      next: "Neste spørsmål",
      finish: "Avslutt quiz",
      correct: "Riktig!",
      incorrect: "Feil!",
      correctAnswer: "Riktig svar er:",
      loading: "Gjør klar quizen",
      progress: "Spørsmål"
    }
  };

  const text = translations[language];

  if (isLoading) {
    return <LoadingSpinner message={text.loading} />;
  }

  if (!questions.length) return <div>No questions available.</div>;

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-md">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span>{text.progress} {currentQuestionIndex + 1}/{questions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{width: `${progress}%`}}
          ></div>
        </div>
      </div>
      <p className="mb-4">{currentQuestion.question}</p>
      <div className="space-y-2">
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerSelect(answer)}
              className="mr-2"
            />
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </div>
        ))}
      </div>
      {!showResult ? (
        <Button onClick={handleSubmit} variant="primary" disabled={!selectedAnswer} className="mt-4">
          {text.submit}
        </Button>
      ) : (
        <div className="mt-4">
          <p className={selectedAnswer === currentQuestion.correctAnswer ? "text-green-500" : "text-red-500"}>
            {selectedAnswer === currentQuestion.correctAnswer ? text.correct : text.incorrect}
          </p>
          {selectedAnswer !== currentQuestion.correctAnswer && (
            <p className="mt-2">{text.correctAnswer} {currentQuestion.correctAnswer}</p>
          )}
          <Button onClick={handleNext} variant="primary" className="mt-4">
            {currentQuestionIndex + 1 < questions.length ? text.next : text.finish}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Quiz;