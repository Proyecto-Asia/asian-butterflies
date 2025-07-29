import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EditForm from "../components/EditForm";
import { EditButterfly, getOneButterfly } from "../services/ButterflyServices";
import CountrySelect from "../components/CountrySelect";

const EditedButterfly = () => {
  const [FormData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simula cargar una mariposa específica por su ID
 // Esto es para la url, hace que que aparezca el id en el url
  const { id } = useParams();
  console.log("ID obtenido de la URL:", id);

  useEffect(() => {
    const fetchButterfly = async () => {
      try {
        const butterfly = await getOneButterfly(id);
        console.log("Mariposa obtenida:", butterfly);

        // Para evitar undefined, asignamos con spread y valores por defecto
        setFormData({
          name: butterfly.name || "",
          sciname: butterfly.sciname || "",
          shortDescription: butterfly.shortDescription || "",
          longDescription: butterfly.longDescription || "",
          status: butterfly.status || "",
          activity: butterfly.activity || "",
          region: butterfly.region || "",
          imageUrl: butterfly.imageUrl || "",
          id: butterfly.id || id, // aseguramos id
        });

        setIsLoading(false);
      } catch (err) {
        console.error("Error al cargar mariposa:", err);
        setIsLoading(false); // para evitar loading infinito
      }
    };

    fetchButterfly();
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSelectionChange = (e) => {
    setFormData({ ...FormData, region: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await EditButterfly(FormData);
      alert("¡Mariposa actualizada con éxito!");
    } catch (error) {
      alert("Error al actualizar mariposa.");
    }
  };

  if (isLoading || !FormData) return <p>Cargando datos...</p>;

  return (
    <EditForm
      FormData={FormData}
      onChange={onChange}
      onSubmit={onSubmit}
      data={setFormData.region}
      handleSelectionChange={handleSelectionChange}
      buttonLabel="Actualizar"
    />
  );
};

export default EditedButterfly;
