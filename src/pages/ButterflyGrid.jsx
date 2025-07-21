import React, { useState, useEffect } from "react";
import axios from "axios";
import ButterflyCard from "../components/butterflies/ButterflyCard/ButterflyCard";

const ButterflyGrid = () => {
  // useSTATE
  const [butterfly, setButterfly] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Traer la info de tu JSON - Método Get
    axios
      .get("http://localhost:3000/butterfly")
      .then(function (response) {
        // Todo bien success
        console.log(response);
        const testButterfly = response.data[0];
        setButterfly(testButterfly);
        setError(null);
        setLoading(false);
      })
      .catch(function (error) {
        // Todo mal error
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

  if (!butterfly) {
    return <div>No hay mariposa 😢</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-sm mx-auto">
        <ButterflyCard butterfly={butterfly} />
      </div>
    </div>
  );
};

export default ButterflyGrid;
