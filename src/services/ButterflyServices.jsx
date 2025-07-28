import axios from "axios";
import { data } from "react-router-dom";

const URL_API = "http://localhost:3000/butterfly/";

export const getAllButterflies = async () => {
    try {
        const response = await axios.get(URL_API);
        return response.data;
    } catch (error) {
        console.log(`Error al sacar las mariposas en ButterflyServices: ${error}.`);
    }

};

export const getOneButterfly = async (id) => {
    try {
        const response = await axios.get(URL_API + id);
        return response.data;
    } catch (error) {
        console.log(`Error al sacar una mariposa en ButterflyServices: ${error}.`);
    }
}

// Metodo POST para el create

export const createNewButterfly = async(data) =>{
console.log("hola")
    const response = await axios.post(URL_API, data) ;
        return response.data; // para uqe devueleva algun dato

       
    }
// Metodo PUT para actualizar

export const EditButterfly = async (data) => {
  
  try {
    // Mostramos por consola los datos que intentamos actualizar (útil para depurar)
    console.log("Intentando actualizar mariposa:", data);

    // Hacemos una petición PUT a la URL con el ID específico de la mariposa que queremos actualizar
    // Por ejemplo, si data.id = 3, se hace PUT a "http://localhost:3000/butterflies/3"
    // El segundo argumento es el objeto "data", que contiene los nuevos datos que queremos guardar
    const response = await axios.put(`${URL_API}/${data.id}`, data);

    // Devolvemos los datos que nos responde el servidor (ya actualizados)
    return response.data;
  } catch (error) {
    // Si ocurre un error en la petición, lo mostramos por consola
    console.error("Error al actualizar la mariposa:", error);

    // Re-lanzamos el error para que quien use esta función lo pueda manejar
    throw error; // Es como cuando hay un error grande lo detecta inmediatamente 
  }
};

// Metodo DELETE para eliminar

export const deleteButterfly = async (id) => {
    try {
        const response = await axios.delete(URL_API + id);
        return response.data;
    } catch (error) {
        console.log(`Error al borrar una mariposa en ButterflyServices: ${error}.`);
    }
}
