import { useState } from "react"; // Importamos el hook useState de React para manejar estado

function StatusSelector({FormData, value, onChange}) {
 
  const statusData = {
    "status": [
      { value: "0", label: "Estable" },     // value: lo que se guarda, label: lo que ve el usuario
      { value: "1", label: "Vulnerable" }, 
      { value: "2", label: "Crítico" }
    ]
  };
  
  return (
    <select
      id="butterfly-status"
      name="status" // tiene que coincidir con el nombre que esta en el json
      value={value}
      onChange={onChange}
      className="border border-gray-300 h-10 w-60 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">--Seleccione una opción--</option>
      {statusData.status.map((status) => (
        <option key={status.value} value={status.value}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
export default StatusSelector