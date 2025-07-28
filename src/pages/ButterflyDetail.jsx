import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getOneButterfly,
  deleteButterfly,
} from "../services/ButterflyServices";
import TitleSection from "../components/TitleSection";
import Buttons from "../components/Buttons";

// useState - Estados del componente
const ButterflyDetail = () => {
  const { id } = useParams(); // Obtener el ID de los parámetros de la URL
  const navigate = useNavigate(); // Hook para navegar programáticamente
  const [butterfly, setButterfly] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  //Variables de Actividad y Estado a texto
  const getActivityText = (activity) => {
    return activity === "0" ? "Nocturna" : "Diurna";
  };

  const getStatusText = (status) => {
    switch (status) {
      case "0":
        return "Estable";
      case "1":
        return "Vulnerable";
      case "2":
        return "Crítico";
      default:
        return "Estable";
    }
  };

  // Función para ELIMINAR
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      //poner aquí alertas mariany??
      `¿Estás segura de que quieres eliminar la mariposa "${butterfly.name}"? Esta acción no se puede deshacer.`
    );
    if (!confirmDelete) {//la exclamación lo que hace es invertir el valor de la constante
      return; //Si el usuario cancela no se hace nada
    }
    try {
      setDeleting(true); //Activa estado de eliminación
      await deleteButterfly(id); //llama al servicio de eliminación - metodo delete en services
      alert(`La mariposa "${butterfly.name}" ha sido eliminada.`);
      navigate("/butterflygrid");
    } catch {
      alert(
        "Hubo un error al eliminar la mariposa. Por favor intántalo de nuevo."
      );
    } finally {
      setDeleting(false); //Desactiva el estado de eliminación
    }
  };

  // useEffect - Efecto para cargar los datos cuando se monta el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const butterflyData = await getOneButterfly(id);
        setButterfly(butterflyData);
        setError(null);
      } catch (error) {
        setError(`Error cargando la mariposa: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Se ejecuta cuando cambia el ID

  //gestionar los estados de carga y error
  if (loading) {
    return <div>Cargando ficha de Mariposa... 🦋</div>;
  }
  if (error) {
    return <div>{error} 🤦🏻‍♀️ </div>;
  }
  if (!butterfly) {
    return <div>Mariposa no encontrada 😢</div>;
  }

  return (
    <>
      <section className="mx-8">
        <TitleSection title={`Ficha de ${butterfly.name}`} />
        <div className="relative mb-6">
          <img
            src={butterfly.imageUrl}
            alt={butterfly.imageAlt}
            className="w-full rounded-[20px]"
          />
        </div>
        <p className="text-mint-green-700 mb-2 text-xl sm:text-xl font-segoe">
          <span className="font-bold">Nombre científico:</span>{" "}
          <span className="italic">{butterfly.sciname}</span>
        </p>
        <p className="text-mint-green-700 mb-2 text-xl sm:text-xl font-segoe">
          <span className="font-bold">Periodo de Actividad:</span>{" "}
          <span>{getActivityText(butterfly.activity)}</span>
        </p>
        <p className="text-mint-green-700 mb-4 text-xl sm:text-xl font-segoe">
          <span className="font-bold">Estado de Conservación:</span>{" "}
          <span>{getStatusText(butterfly.status)}</span>
        </p>
        <p className="text-mint-green-700 mb-1 text-xl sm:text-xl font-segoe">
          {butterfly.longDescription}
        </p>
        <div className="flex justify-center my-8">
          <Buttons 
            styleType="primary"
            text="Editar Ficha"
            className="mt-8 ml-6"
            linkTo={`/editbutterfly:id`}
          />
          <Buttons //Componente botón de Mariany
            styleType="secondary"
            text={deleting ? "Eliminando..." : "Eliminar"}
            className="mt-8 ml-6"
            onClick={handleDelete} // Pasar la función como prop
            disabled={deleting} // Deshabilitar mientras se elimina
          />
        </div>
      </section>
    </>
  );
};

export default ButterflyDetail;

