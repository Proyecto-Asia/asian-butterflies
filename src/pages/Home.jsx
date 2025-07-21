import React from "react";
import "../index.css" // aqui ya se importa tailwind
import ButterflyIntro from "../components/ButterflyIntro";



const Home = () => {
  return (

<>
<ButterflyIntro/>
<section className="p-4">
  <h2 style={{ fontFamily: "var(--font-segoe)" }} className="text-1xl sm:text-2xl md:text-3xl font-bold mb-4 px-4">Mapa de observaciones</h2>

  {/* <MapaINaturalist/> */}
</section>

</>


  )
}

export default Home