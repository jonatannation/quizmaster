import React from 'react';
import Button from './Button';

function Home({ nextStep }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to QuizMaster!</h2>
      <Button onClick={nextStep} variant="primary">
        Start Quiz
      </Button>
    </div>
  );
}

export default Home;