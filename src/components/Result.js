import React from 'react';
import Button from './Button';

const getScoreIcon = (percentage) => {
  if (percentage > 80) return '🏆'; // Trophy for >80%
  if (percentage >= 50) return '👍'; // Thumbs up for 50-80%
  return '😢'; // Sad face for <50%
};

const getScoreMessage = (percentage, language) => {
  const messages = {
    en: {
      high: "Excellent job!",
      medium: "Good effort!",
      low: "Keep practicing!"
    },
    no: {
      high: "Utmerket jobb!",
      medium: "God innsats!",
      low: "Fortsett å øve!"
    }
  };

  if (percentage > 80) return messages[language].high;
  if (percentage >= 50) return messages[language].medium;
  return messages[language].low;
};

function Result({ score, totalQuestions, restart, language }) {
  const percentage = (score / totalQuestions) * 100;
  const icon = getScoreIcon(percentage);
  const message = getScoreMessage(percentage, language);

  const translations = {
    en: {
      result: "Quiz Completed!",
      score: "Your score:",
      outOf: "out of",
      startNew: "Start New Quiz"
    },
    no: {
      result: "Quiz fullført!",
      score: "Din poengsum:",
      outOf: "av",
      startNew: "Start ny quiz"
    }
  };

  const text = translations[language];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">{text.result}</h2>
      <div className="text-6xl mb-4">{icon}</div>
      <p className="mb-2">
        {text.score} {score} {text.outOf} {totalQuestions}
      </p>
      <p className="mb-4">{message}</p>
      <Button onClick={restart} variant="primary">
        {text.startNew}
      </Button>
    </div>
  );
}

export default Result;