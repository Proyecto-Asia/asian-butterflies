import { useState, useEffect } from "react";
import "../index.css";
import CreateForm from "../components/CreateForm";
import { createNewButterfly } from "../services/ButterflyServices";
import TitleSection from "../components/TitleSection";

const CreateButterfly = () => {
  //Poniendome a pensar, creo que colocare aqui son los datos que los voy a mandar al metodo POST
  // Aqui se escribe la pare de react jsx, es decir, las animaciones

  const [newButterfly, setNewButterfly] = useState({
    // inicializando el estado vacio
    name: "", // Tutto los dato que estan dentro del JSON
    sciname: "",
    shortDescription: "",
    longDescription: "",
    activity: "",
    status: "",
    region: "",
    location: "",
    imageUrl: "",
  });

  //Esto es para los input
  const controlarInput = (e) => {
    //actuliza el input que le das click
    const { name, value } = e.target; //
    setNewButterfly({
      ...newButterfly, // Me evita escribir como todo el objeto de los inputs otra vez
      [name]: value,
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault(); // Evita que recargue la pagina

    try {
      await createNewButterfly(newButterfly);
      alert("🦋 Mariposa creada con éxito");
      setNewButterfly({
        name: "", // Tutto los dato que estan dentro del JSON
        sciname: "",
        shortDescription: "",
        longDescription: "",
        activity: "",
        status: "",
        region: "",
        location: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error al crear mariposa: ", error);
      alert("⚠️ Ocurrió un error al crear la mariposa.");
    }
  };
  // ahora viene lo de agarrar el valor de los dropdown de los paises

  const [data, setData] = useState([]); // Al colocar algo nuevo, se debe colocar ajuro el useState
  useEffect(() => {
    fetch("http://localhost:3000/butterfly")
      .then((res) => res.json()) // Corregido: era
      .then((data) => {
        setData(data);
        console.log("Datos cargados:", data);
      })
      .catch((err) => console.error("Error al cargar:", err));
  }, []); // Dependencias vacías para evitar loop infinito

  // Manejar cambios en el dropdown de países - AQUÍ SE GUARDAN EN newButterfly
  const handleSelectionChange = ({ region, location }) => {
    setNewButterfly({
      ...newButterfly,
      region: region,
      location: location,
    });
    console.log("Región y ubicación actualizadas:", { region, location });
  };

  return (
    <>
      <section>
        <TitleSection title="¡Añade una nueva especie!" />
        <div className="mx-8">
          <CreateForm
            FormData={newButterfly} // el estado con todos los valores
            onChange={controlarInput} //Manejar cambios en los inputs
            onSubmit={manejarEnvio} // La funcion para manejar el envio del formulario
            data={data}
            handleSelectionChange={handleSelectionChange}
          />
        </div>
      </section>
    </>
  );
};

export default CreateButterfly;
