import { useState, useEffect } from "react";
import "../index.css";
import Createform from "../components/Createform";


const CreateButterfly = () => {
  //Poniendome a pensar, creo que colocare aqui son los datos que los voy a mandar al metodo POST
  // Aqui se escribe la pare de react jsx, es decir, las animaciones

  const [newButterfly, setNewButterfly] = useState({ // inicializando el estado vacio
    name: "", // Tutto los dato que estan dentro del JSON
    sciname: "",
    shortDescription: "",
    longDescription: "",
    activity: "",
    status: "",
    region: "",
    location: ""
  });

  const controlarInput = (e)=>{ //paramentro e
    const {name ,value } = e.target; //
      setNewButterfly(  {
        ...newButterfly, // Me evita escribir como todo el objeto de los inputs otra vez
        [name]: value 
      });
  }

  const manejarEnvio = (e) =>{
    e.preventDefault() // Evita que recargue la pagina
  }

  return (
    <>
      <header className="pt-7 m-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#28422B] mb-4">
          🦋¡Añade una nueva especie!
          <hr className="w-300 border-[#28422B] rounded-md border-2 mb-6 sm:mb-8" />
        </h2>
      </header>

       
      <Createform 
       formData={newButterfly} // el estado con todos los valores
      onChange={controlarInput} //Manejar cambios en los inputs
      onSubmit={manejarEnvio} // La funcion para manejar el envio del formulario
      />
    </>
  );
};

export default CreateButterfly;
