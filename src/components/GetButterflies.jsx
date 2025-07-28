import React from "react";
import { getButterflies } from "../services/ButterflyServices";
import { useState, useEffect } from "react";

const GetButterflies = () => {

    const [butterflies, setButterflies] = useState([]); // aquí guardamos las mariposas

    useEffect(() => {
        getButterflies()
            .then((res) => {
                setButterflies(res.data); // guardamos las mariposas en el estado
                console.log("Mariposas cargadas", res.data)
            })
            .catch((err) => console.error("Error al cargar mariposas:", err));
    }, []);

return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🐛 Lista de Mariposas</h1>
      <ul>
        {butterflies.map((mariposa) => (
          <li key={mariposa.id} className="mb-2">
            <strong>{mariposa.name}</strong> - {mariposa["short-description"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetButterflies;


//METODO GET QUE CELIA NOS ENVIA PARA APLICARLO ES LA MANERA MAS SENCILLA Y MEJOR 

// export const getAnimals = async () => {
//     const response = await fetch('http://localhost:3000/animals');
//     if (!response.ok) {
//       throw new Error('Error al obtener los datos');
//     }
//     const result = await response.json();
//     return result;
// }
//AQUI SE LLAMA A LA FUNCION DEL METODO GET

  // useEffect(() => {
  //   const fetchData = async () => { //aqui hay que hacer esa constante fechData porque React no acepta el async//
  //     try {
  //       const animalData = await getAnimals();
  //       setData(animalData);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);  //cuando se monta, se ejecuta//

  