import React, { useState } from 'react';
import Button from './Button';

const questionCounts = [5, 10, 20];

const translations = {
  en: {
    title: "Select Number of Questions",
    questionCountTitle: "Number of Questions",
    startQuiz: "Start Quiz"
  },
  no: {
    title: "Velg antall spørsmål",
    questionCountTitle: "Antall spørsmål",
    startQuiz: "Start Quiz"
  }
};

function QuestionCount({ setQuestionCount, nextStep, language }) {
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(null);

  const text = translations[language];

  const handleStart = () => {
    if (selectedQuestionCount) {
      setQuestionCount(selectedQuestionCount);
      nextStep();
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{text.questionCountTitle}</h3>
        <div className="grid grid-cols-3 gap-2">
          {questionCounts.map((count) => (
            <Button
              key={count}
              onClick={() => setSelectedQuestionCount(count)}
              variant={selectedQuestionCount === count ? "primary" : "secondary"}
            >
              {count}
            </Button>
          ))}
        </div>
      </div>
      <Button
        onClick={handleStart}
        variant="primary"
        disabled={!selectedQuestionCount}
      >
        {text.startQuiz}
      </Button>
    </div>
  );
}

export default QuestionCount;