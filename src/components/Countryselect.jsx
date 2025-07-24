import React from "react";
import { useState } from "react";

const Countryselect = ({data, onChange}) => {
  const [regionSeleccionada, setRegionSeleccionada] = useState();
  const [paisSeleccionado, setPaisSeleccionado] = useState();
  const regionData = {
    "Asia del Norte": [
      "China",
      "Mongolia",
      "Corea del Norte",
      "Corea del Sur",
      "Japón",
    ],
    "Asia del Sur": [
      "India",
      "Pakistán",
      "Bangladesh",
      "Sri Lanka",
      "Nepal",
      "Bután",
      "Maldivas",
      "Afganistán",
    ],
    "Asia Occidental": [
      "Turquía",
      "Irán",
      "Irak",
      "Siria",
      "Líbano",
      "Israel",
      "Jordania",
      "Arabia Saudí",
      "Emiratos Árabes Unidos",
      "Kuwait",
      "Qatar",
      "Bahréin",
      "Omán",
      "Yemen",
    ],
    "Asia Oriental": [ // Esto es una key
      "China",
      "Japón",
      "Corea del Sur",
      "Corea del Norte",
      "Mongolia",
      "Taiwán",
    ],
  }; // Final de los objetos

  const regiones = Object.keys(regionData); // seleccionando las keys ej. Asia Oriental
  function cambiarRegion(evento) {
    setRegionSeleccionada(evento.target.value);
    setPaisSeleccionado(""); // Limpiar pais cuando cambia de region
  onChange({ region, location: "" }); // Llama a CreateButterfly
}

  function cambiarPais(evento) {
    const location = evento.target.value;
  setPaisSeleccionado(location);
  onChange({ region: regionSeleccionada, location }); // Llama a CreateButterfly
}

  return (
    <>
      <select
        name="region"
        id="region"
        value={regionSeleccionada}
        onChange={cambiarRegion}
        className="border border-gray-300 h-10 w-60"
      >
        <option value=""> --Seleccione una region--</option>
        <option value="">-- Elige una región --</option>
        {regiones.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <br /><br />
      {/* Aqui se esta recorriendo el valor de lo que esta dentro del regionData*/}
      {regionSeleccionada && (
        <select 
        value={paisSeleccionado} 
        onChange={cambiarPais}
         className="border border-gray-300 h-10 w-60">
          <option value="">-- Elige un país --</option>
          {regionData[regionSeleccionada].map((pais) => ( 
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Countryselect;

/*<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
        <button type="submit" className="rounded-md bg-[#ABBF60] w-full sm:w-28 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#9AAF50] transition-colors">
          Agregar
        </button>
        <button type="submit" className="rounded-md bg-[#D4D941] w-full sm:w-28 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#C4C941] transition-colors">
          Limpiar
        </button>
      </div> */
