
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getOneButterfly } from "../services/ButterflyServices";
import TitleSection from "../components/TitleSection";

// useState - Estados del componente
const ButterflyDetail = () => {
    const {id} = useParams(); // Obtener el ID de los parámetros de la URL
    const [butterfly, setButterfly] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
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

        fetchData()
    }, [id]);// Se ejecuta cuando cambia el ID

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

          <TitleSection title="Ficha de Mariposa"/>
            <section className="flex flex-col xl:flex-row justify-center items-center xl:gap-30 p-8">
                <div>
                    <img src={butterfly.image} alt={butterfly.name}  className="max-w-[100px] mb-6 md:max-w-[200px] lg:max-w-[300px]"/>
                    {/* Muestra la imagen de la mariposa con alt descriptivo */}
                </div>
                <div className="max-w-2xl order-1 md:order-2 text-center md:text-left ml-4 xl:ml-26 mr-2 md:mr-4" >
                    <h1 className="font-segoe text-mint-green-700 text-1xl sm:text-2xl xl:text-3xl font-bold">{butterfly.name}</h1>
                    {/* Muestra el nombre de la mariposa */}

                    <p className="font-segoe text-mint-green-700 text-sm lg:text-lg">{butterfly.longDescription}</p>
                    {/* Muestra la descripción de la mariposa */}
                </div>
            </section>
        </>
    );
}

export default ButterflyDetail;