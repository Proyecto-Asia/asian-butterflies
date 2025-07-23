import React from "react";
import Buttons from "../../../components/Buttons";
// Importar todas las imágenes de los iconos
import iconNoche from "../../../assets/img/icon-noche-o.png";
import iconDia from "../../../assets/img/icon-dia-o.png";
import iconEstable from "../../../assets/img/icon-estable-o.png";
import iconVulnerable from "../../../assets/img/icon-vulnerable-o.png";
import iconCritico from "../../../assets/img/icon-critico-o.png";

function ButterflyCard({ butterfly }) {
  // Función para obtener el icono de actividad
  const getActivityIcon = (activity) => {
    return activity === "0" ? iconNoche : iconDia;
  };
  // Función para obtener el icono de status
  const getStatusIcon = (status) => {
    switch (status) {
      case "0":
        return iconEstable;
      case "1":
        return iconVulnerable;
      case "2":
        return iconCritico;
      default:
        return iconEstable; // fallback
    }
  };

  return (
    <div className="bg-light-green-0 rounded-3xl p-4 sm:p-6 max-w-sm mx-auto shadow-lg shadow-light-green-600/30 flex flex-col h-full">
      {/* Imagen de la mariposa */}
      <div className="relative mb-6">
        <img
          src={butterfly.imageUrl}
          alt={butterfly.imageAlt}
          className="w-full rounded-[20px]"
        />
      </div>
      <h2
        className="font-bold text-lg sm:text-xl text-mint-green-700"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        {butterfly.name}
      </h2>
      <h2
        className="italic text-lg sm:text-xl text-mint-green-700 mb-4"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        {butterfly.sciname}
      </h2>
      <p
        className="text-mint-green-700 mb-8 text-sm sm:text-base"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        {butterfly.shortDescription}
      </p>
      {/* Actividad y Status con ícono */}
      <div className="pb-3 flex gap-3">
        <img
          src={butterfly.activity === "0" ? iconNoche : iconDia}
          alt="Activity icon"
          className="w-12 h-12"
        />
        <img
          src={
            butterfly.status === "0"
              ? iconEstable
              : butterfly.status === "1"
              ? iconVulnerable
              : iconCritico
          }
          alt="Status icon"
          className="w-12 h-12"
        />
      </div>

      <h3
        className="pb-4 sm:pb-3 text-base sm:text-lg text-mint-green-700 mb-4"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        📍 {butterfly.location}
      </h3>
      <div className="flex justify-center my-8 mx-auto block mt-auto">
        <Buttons
          styleType="tertiary"
          text="Leer más"
          linkTo={`/butterflydetails/${butterfly.id}`}
        />
      </div>
    </div>
  );
}

export default ButterflyCard;
