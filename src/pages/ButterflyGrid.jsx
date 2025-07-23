import React, { useState, useEffect } from "react";
import ButterflyCard from "../components/butterflies/ButterflyCard/ButterflyCard";
import { getAllButterflies } from "../services/ButterflyServices"; // ← Importa el servicio
import TitleSection from "../components/TitleSection";
import Buttons from "../components/Buttons";

const ButterflyGrid = () => {
  // useSTATE
  const [butterflies, setButterflies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const butterflyData = await getAllButterflies();
        setButterflies(butterflyData);
        setError(null);
      } catch (error) {
        console.error("Error:", error);
        setError("Error cargando las mariposas");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // cuando se monta, se ejecuta. Es la CLAVE: array vacío para que solo se ejecute una vez

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
    <section >
      <TitleSection title="Las mariposas en Asia" />
      {/* Grid para mostrar múltiples cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {/* map para renderizar cada mariposa */}
        {butterflies.map((butterfly) => (
          <ButterflyCard key={butterfly.id} butterfly={butterfly} />
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Buttons
          styleType="primary"
          text="+ Crear nueva"
          className="mt-8 ml-6"
          linkTo={`/newbutterfly`}
        />
      </div>
    </section>
  );
};

export default ButterflyGrid;
