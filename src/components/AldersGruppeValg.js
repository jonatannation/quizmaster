import React, { useMemo } from 'react';
import Button from './Button';

const aldersgrupper = ['18-25', '26-35', '36-50', '50+'];

function AldersGruppeValg({ setAldersgruppe, nextStep }) {
  const minButtonWidth = useMemo(() => {
    const longestText = aldersgrupper.reduce((a, b) => a.length > b.length ? a : b);
    return `${longestText.length * 10 + 48}px`;
  }, []);

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Velg aldersgruppe</h2>
      <div className="space-y-4">
        {aldersgrupper.map((gruppe) => (
          <Button
            key={gruppe}
            onClick={() => {
              setAldersgruppe(gruppe);
              nextStep();
            }}
            minWidth={minButtonWidth}
          >
            {gruppe}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default AldersGruppeValg;