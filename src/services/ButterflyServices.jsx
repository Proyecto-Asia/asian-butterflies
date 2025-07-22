import axios from "axios";

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

    const response = await axios.post(URL_API, data) ;
        return response.data; // para uqe devueleva algun dato
}


// Metodo PUT para actualizar


// MEtodo DELETE para eliminar

export const deleteButterfly = async (id) => {
    try {
        const response = await axios.delete(URL_API + id);
        return response.data;
    } catch (error) {
        console.log(`Error al borrar una mariposa en ButterflyServices: ${error}.`);
    }
}
