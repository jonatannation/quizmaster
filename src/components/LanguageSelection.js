import React from 'react';
import Button from './Button';

function LanguageSelection({ setLanguage, nextStep }) {
  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    nextStep();
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Select Language</h2>
      <div className="space-y-4">
        <Button onClick={() => handleLanguageSelect('en')} variant="primary">
          English
        </Button>
        <Button onClick={() => handleLanguageSelect('no')} variant="primary">
          Norsk
        </Button>
      </div>
    </div>
  );
}

export default LanguageSelection;