import React, { useState, useEffect } from "react";
import axios from "axios";
import ButterflyCard from "../components/butterflies/ButterflyCard/ButterflyCard";

const ButterflyGrid = () => {
  // useSTATE
  const [butterflies, setButterflies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Traer la info de tu JSON - Método Get
    axios
      .get("http://localhost:3000/butterfly")
      .then(function (response) {
        // Tutto bien success
        console.log(response);
        setButterflies(response.data); //guardamos todo el array
        setError(null);
        setLoading(false);
      })
      .catch(function (error) {
        // Tutto mal error
        console.log(error);
        setError("Error cargando la mariposa");
        setLoading(false);
      });
  }, []); // ← Esto es lo CLAVE: array vacío para que solo se ejecute una vez
  
  // gestionar qué hacer si hay error
  if (loading) {
    return <div>Cargando mariposa... 🦋</div>;
  }

  if (error) {
    return <div>Error: {error} 🤦🏻‍♀️</div>;
  }

  if (!butterflies || butterflies.length === 0) {
    return <div>No hay mariposas 😢</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Cambié a grid para mostrar múltiples cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Aquí está el map para renderizar cada mariposa */}
        {butterflies.map((butterfly) => (
          <ButterflyCard 
            key={butterfly.id} 
            butterfly={butterfly} 
          />
        ))}
      </div>
    </div>
  );
};

export default ButterflyGrid;