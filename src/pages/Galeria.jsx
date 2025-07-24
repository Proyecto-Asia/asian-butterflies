import { useEffect, useState } from "react"
import { getAllButterflies } from "../services/ButterflyServices"
//import iconDia from "../public/img-dia-noche/PNG/iconDia.png";
//import iconNoche from "../public/img-dia-noche/PNG/iconNoche.png";
import { useNavigate } from "react-router-dom";
const Galeria = () => {

    const [butterflies, setButterflies] = useState([]);

    useEffect (()=>{
        async function fetchData() {

            const data = await getAllButterflies();
            setButterflies(data)


        }
        fetchData();
    },[]) 


    /*function ButterflyCard({ butterfly }) {
  const navigate = useNavigate();
  // Función para obtener el icono de actividad
  const getActivityIcon = (activity) => {
    return activity === "0" ? iconNoche : iconDia;
  };*/
  return (
    <>

        <div>
            {
                butterflies.map(butterfly =>(
                    <div key={butterfly.id}>
                    <div className="bg-light-green-0 rounded-3xl p-4 sm:p-6 max-w-sm mx-auto shadow-lg shadow-light-green-600/30 flex flex-col h-full">
      {/* Imagen de la mariposa */}
      <div className="relative mb-6">
        <img
          src={butterfly.imageUrl}
          alt={butterfly.imageAlt}
          className="w-full rounded-[20px]"
        />
      </div>
      <h2
        className="font-bold text-lg sm:text-xl text-mint-green-700"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        {butterfly.name}
      </h2>
      <h2
        className="italic text-lg sm:text-xl text-mint-green-700 mb-4"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        {butterfly.sciname}
      </h2>
      <p
        className="text-mint-green-700 mb-8 text-sm sm:text-base"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        {butterfly.shortDescription}
      </p>
      {/* Actividad y Status con ícono */}
      <div className="pb-3 flex gap-3">
        <img
          src={butterfly.activity === "0" ? iconNoche : iconDia}
          alt="Activity icon"
          className="w-12 h-12"
        />
          </div>
        {/*<img
          src={
            butterfly.status === "0"
              ? iconEstable
              : butterfly.status === "1"
              ? iconVulnerable
              : iconCritico
          }
          alt="Status icon"
          className="w-12 h-12"
        />
    

      <h3
        className="pb-4 sm:pb-3 text-base sm:text-lg text-mint-green-700 mb-4"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        📍 {butterfly.location}
      </h3>
      {/*<div className="justify-center my-8 mx-auto block mt-auto">
        <Buttons
          styleType="tertiary"
          text="Leer más"
          linkTo={`/butterflydetails/${butterfly.id}`}
        />
      </div>*/}
    </div>
   
                        
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Galeria