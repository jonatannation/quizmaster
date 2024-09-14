import React, { useState } from 'react';
import Home from './components/Home';
import LanguageSelection from './components/LanguageSelection';
import CategorySelection from './components/CategorySelection';
import QuestionCount from './components/QuestionCount';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState(null);
  const [category, setCategory] = useState(null);
  const [questionCount, setQuestionCount] = useState(null);
  const [score, setScore] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const restart = () => {
    setStep(1);
    setLanguage(null);
    setCategory(null);
    setQuestionCount(null);
    setScore(0);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return <Home nextStep={nextStep} language={language} />;
      case 2:
        return <LanguageSelection setLanguage={setLanguage} nextStep={nextStep} />;
      case 3:
        return <CategorySelection setCategory={setCategory} nextStep={nextStep} language={language} />;
      case 4:
        return <QuestionCount 
          setQuestionCount={setQuestionCount} 
          nextStep={nextStep}
          language={language}
        />;
      case 5:
        return <Quiz 
          category={category}
          questionCount={questionCount}
          setScore={setScore}
          finishQuiz={() => setStep(6)}
          language={language}
        />;
      case 6:
        return <Result score={score} totalQuestions={questionCount} restart={restart} language={language} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">QuizMaster</h1>
      {renderStep()}
      {step > 2 && step < 6 && (
        <div className="w-full max-w-md mt-4">
          <button onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            {language === 'no' ? 'Tilbake' : 'Back'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
