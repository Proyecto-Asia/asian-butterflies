// src/pages/TestCard.jsx
import React from 'react';
import ButterflyCard from '../components/butterflies/ButterflyCard/ButterflyCard';

const TestCard = () => {
  // Datos de prueba basados en tu JSON
  const testButterfly = {
    "id": "1",
    "name": "La Mariposa cardera",
    "sciname": "Vanessa cardui",
    "image-url": "https://www.birdsandblooms.com/wp-content/uploads/2022/11/spicebush-swallowtail-butterfly-milkweed.jpg?fit=680%2C454",
    "description": "Una especie cosmopolita, lo que significa que está presente en todo el mundo.",
    "activity": "1",
    "status": "0",
    "location": ["Japón", "China"]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-sm mx-auto">
        <ButterflyCard butterfly={testButterfly} />
      </div>
    </div>
  );
};

export default TestCard;