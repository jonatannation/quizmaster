import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Samtalestartere from './Aktiviteter/Samtalestartere';
import Drikkeleker from './Aktiviteter/Drikkeleker';
import Konkurranser from './Aktiviteter/Konkurranser';
import LoadingSpinner from './LoadingSpinner';
import useAktiviteter from '../hooks/useAktiviteter';
import Button from './Button';
import { FaArrowRight, FaList, FaRedo } from 'react-icons/fa';

function Aktiviteter({ type, festType, aldersgruppe, kjonn, goToKategoriValg, refreshAktivitet, startOver }) {
  const [aktivitet, setAktivitet] = useState(null);
  const { hentAktivitet } = useAktiviteter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lastAktivitet = async () => {
      setIsLoading(true);
      const nyAktivitet = await hentAktivitet(type, festType, aldersgruppe, kjonn);
      
      setTimeout(() => {
        setAktivitet(nyAktivitet);
        setIsLoading(false);
      }, 2000);
    };
    lastAktivitet();
  }, [type, festType, aldersgruppe, kjonn, hentAktivitet]);

  const minButtonWidth = useMemo(() => {
    const texts = ['Neste aktivitet', 'Velg ny kategori', 'Begynn på nytt'];
    const longestText = texts.reduce((a, b) => a.length > b.length ? a : b);
    return `${longestText.length * 10 + 48}px`;
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!aktivitet) {
    return <div className="text-center text-2xl font-bold text-gray-800">Ingen aktivitet funnet.</div>;
  }

  const AktivitetKomponent = {
    samtalestartere: Samtalestartere,
    drikkeleker: Drikkeleker,
    konkurranser: Konkurranser
  }[type] || Samtalestartere;

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="bg-white rounded-3xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          {aktivitet.tittel}
        </h2>
        <AktivitetKomponent beskrivelse={aktivitet.beskrivelse} />
        <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            onClick={refreshAktivitet}
            minWidth={minButtonWidth}
            backgroundColor="#4ade80"
            className="flex items-center justify-center"
          >
            <FaArrowRight className="mr-2" /> Neste aktivitet
          </Button>
          <Button 
            onClick={goToKategoriValg}
            minWidth={minButtonWidth}
            backgroundColor="#60a5fa"
            className="flex items-center justify-center"
          >
            <FaList className="mr-2" /> Velg ny kategori
          </Button>
        </div>
        <Button 
          onClick={startOver}
          backgroundColor="#6b7280"
          className="flex items-center justify-center text-sm mt-4"
        >
          <FaRedo className="mr-2" /> Begynn på nytt
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

export default Aktiviteter;