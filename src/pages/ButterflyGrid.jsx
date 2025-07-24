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

    // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Máximo 6 cards por página

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

  // Desplazamiento al inicio cada vez que se cambia de página
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}, [currentPage]);

  // Calcular elementos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentButterflies = butterflies.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular número total de páginas
  const totalPages = Math.ceil(butterflies.length / itemsPerPage);

  // Funciones de navegación
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // gestionar estados de carga y error
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
        {currentButterflies.map((butterfly) => (
          <ButterflyCard key={butterfly.id} butterfly={butterfly} />
        ))}
      </div>
      
      {/* Controles de paginación */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 my-8 px-4">
          {/* Botón Anterior */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`py-3 px-6 rounded-lg font-segoe font-semibold border-2 outline transition-colors duration-200 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-300 cursor-not-allowed"
                : "bg-mint-green-600 text-white cursor-pointer"
            }`}
          >
            ← Anterior
          </button>

          {/* Números de página */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-segoe font-semibold cursor-pointer border-2  transition-colors duration-200 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ${
                  currentPage === index + 1
                    ? "bg-mint-green-600 text-white"
                    : "bg-white text-mint-green-600"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`py-3 px-6 rounded-lg font-segoe font-semibold border-2 outline transition-colors duration-200 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-300 cursor-not-allowed"
                : "bg-mint-green-600 text-white cursor-pointer"
            }`}
          >
            Siguiente →
          </button>
        </div>
      )}

      {/* Información de paginación */}
      <div className="text-center text-gray-600 mb-4">
        Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, butterflies.length)} de {butterflies.length} mariposas
      </div>

      <div className="flex justify-center my-8">
        <Buttons //Componente botón de Mariany
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
