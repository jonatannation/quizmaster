import React, { useMemo } from 'react';
import Button from './Button';

const kategorier = ['Samtalestartere', 'Drikkeleker', 'Konkurranser'];

function KategoriValg({ setKategori, nextStep }) {
  const minButtonWidth = useMemo(() => {
    const longestText = kategorier.reduce((a, b) => a.length > b.length ? a : b);
    return `${longestText.length * 10 + 48}px`;
  }, []);

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Velg kategori</h2>
      <div className="space-y-4">
        {kategorier.map((kategori) => (
          <Button
            key={kategori}
            onClick={() => {
              setKategori(kategori.toLowerCase());
              nextStep();
            }}
            minWidth={minButtonWidth}
          >
            {kategori}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default KategoriValg;