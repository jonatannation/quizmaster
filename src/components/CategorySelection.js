import React from 'react';
import Button from './Button';

const categories = ['Sport', 'Geography', 'History', 'Science', 'Music', 'Godt og blandet'];

const translations = {
  en: {
    title: "Select a Category",
    categories: {
      Sport: "Sport",
      Geography: "Geography",
      History: "History",
      Science: "Science",
      Music: "Music",
      "Godt og blandet": "Mixed"
    }
  },
  no: {
    title: "Velg en kategori",
    categories: {
      Sport: "Sport",
      Geography: "Geografi",
      History: "Historie",
      Science: "Vitenskap",
      Music: "Musikk",
      "Godt og blandet": "Blandet"
    }
  }
};

function CategorySelection({ setCategory, nextStep, language }) {
  const text = translations[language];

  const handleCategorySelect = (category) => {
    setCategory(category);
    nextStep();
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategorySelect(category)}
            variant="secondary"
          >
            {text.categories[category]}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CategorySelection;
