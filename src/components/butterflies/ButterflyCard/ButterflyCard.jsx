import React from "react";
// Importar todas las imágenes
import iconNoche from "../../../assets/img/icon-noche-o.png";
import iconDia from "../../../assets/img/icon-dia-o.png";
import iconEstable from "../../../assets/img/icon-estable-o.png";
import iconVulnerable from "../../../assets/img/icon-vulnerable-o.png";
import iconCritico from "../../../assets/img/icon-critico-o.png";

function ButterflyCard({ butterfly }) {
  // Función para obtener el ícono de actividad
  const getActivityIcon = (activity) => {
    return activity === "0" ? iconNoche : iconDia;
  };
  // Función para obtener el ícono de status
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
    <div className="bg-light-green-0 rounded-3xl p-6 max-w-sm mx-auto shadow-lg shadow-light-green-600/30">
      {/* Imagen de la mariposa */}
      <div className="relative mb-6">
        <img src={butterfly.imageUrl} alt={butterfly.imageAlt} className="w-full rounded-[20px]"/>
      </div>
      <h2 className="font-bold text-2xl text-mint-green-700" style={{fontFamily: 'Segoe UI, sans-serif'}}>{butterfly.name}</h2>
      <h2 className="italic text-2xl text-mint-green-700 mb-4" style={{fontFamily: 'Segoe UI, sans-serif'}}>{butterfly.sciname}</h2>
            {/* Actividad y Status con ícono */}
  <div className="pb-6 flex gap-3">
  <img
    src={butterfly.activity === "0" ? iconNoche : iconDia}
    alt="Activity icon"
    className="w-10 h-10"
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
    className="w-10 h-10"
  />
</div>
      <p className="text-mint-green-700 mb-4" style={{fontFamily: 'Segoe UI, sans-serif'}}>{butterfly.shortDescription}</p>
      <h3 className="pb-6 text-lg text-mint-green-700 mb-4" style={{fontFamily: 'Segoe UI, sans-serif'}}>📍 {butterfly.location?.join(", ")}</h3>

<button className="mx-auto block bg-light-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-mint-green-700 transition-colors duration-200 font-['Segoe_UI']" Link to={/butterflydetails/${bfly.id}} >
  Leer más :
</button>
    </div>
  );
}

export default ButterflyCard;
