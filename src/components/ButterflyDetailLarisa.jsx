import { useParams } from "react-router-dom";
// Importa useParams para obtener parámetros de la URL (como el id)

import { useEffect, useState } from "react";
// Importa useEffect para efectos secundarios y useState para manejar estados

import { getOneButterfly } from "../services/ButterflyServices";
// Importa la función que obtiene los datos de una mariposa según su id (la ruta puede variar)

function ButterflyDetailLarisa() {
    const { id } = useParams();
    // Obtiene el parámetro 'id' de la URL, que identifica qué mariposa mostrar

    const [butterfly, setButterfly] = useState(null);
    // Estado para guardar los datos de la mariposa (inicialmente null porque no hay datos)

    const [loading, setLoading] = useState(true);
    // Estado para controlar si está cargando la información (inicialmente true)

    const [error, setError] = useState(null);
    // Estado para guardar posibles errores (inicialmente no hay)

    useEffect(() => {
        getOneButterfly(id)
            // Llama a la función que obtiene la mariposa por id
            .then(data => {
                setButterfly(data);
                // Guarda los datos en el estado butterfly
                 console.log("Datos de la mariposa recibidos:", data); // 👈 Verifica si llegan datos
                setLoading(false);
                // Cambia el estado de carga a false porque ya terminó
            })
            .catch(err => {
                setError("Ошибка загрузки бабочки");
                // Si hay error, guarda mensaje de error ("Error cargando la mariposa")
                setLoading(false);
                // Cambia carga a false igual para que deje de mostrar loading
            });
    }, [id]);
    // El efecto se ejecuta cada vez que cambia el id (cuando se carga una mariposa diferente)

    if (loading) return <p>Загрузка...</p>;
    // Si está cargando, muestra "Cargando..."

    if (error) return <p>{error}</p>;
    // Si hay error, muestra el mensaje de error

    if (!butterfly) return <p>Mariposa no encontrada</p>;
    // Si no encontró la mariposa, muestra "Mariposa no encontrada"

    return (
        <>
            <section>
                <div>
                    <img src={butterfly.image} alt={butterfly.name} />
                    {/* Muestra la imagen de la mariposa con alt descriptivo */}
                </div>
                <div>
                    <h1>{butterfly.name}</h1>
                    {/* Muestra el nombre de la mariposa */}

                    <p>{butterfly.longDescription}</p>
                    {/* Muestra la descripción de la mariposa */}
                </div>
            </section>
        </>
    );
}

export default ButterflyDetailLarisa;
// Exporta el componente para usarlo en otros archivos
