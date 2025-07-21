import React, { useState } from "react";
import axios from "axios";
import ButterflyCard from "../components/butterflies/ButterflyCard/ButterflyCard";

const ButterflyGrid = () => {
  // Traer la info de tu JSON - Método Get
  const [butterfly, setButterfly] = useState(null);
  axios
    .get("http://localhost:3000/butterfly")
    .then(function (response) {
      // handle success
      console.log(response);
      const testButterfly = response.data[0];
      setButterfly(testButterfly);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    // gestionar qué hacer si hay error
    if(!butterfly) {
      return <div>No hay mariposa 😢</div>
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
