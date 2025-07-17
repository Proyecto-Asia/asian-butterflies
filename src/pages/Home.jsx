import React from "react"
import "../index.css" // aqui ya se importa tailwind
import introbutterflyg from "../assets/img/intro-butterfly-g.png"


const Home = () => {
  return (
    <>
      <h1 
      style={{ fontFamily: "var(--font-segoe)" }}
      className="text-5xl font-bold mb-4 text-center">Descubre las <strong className="bg-gradient-to-r from-[#9cc7ab] via-[#abbf60] to-[#957112] bg-clip-text text-transparent drop-shadow-md"> Mariposas</strong> Asiaticas</h1>
      <section  
        style={{ fontFamily: "var(--font-segoe)" }}
        className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
        <div className="flex justify-center items-center">
          <img src={introbutterflyg} alt="butterfly" className="w-full max-w-[200px] md:max-w-[500px] lg:max-w-[700px] h-auto animate-flotar"/>
        </div>
        
        <div className="max-w-xl text-center md:text-left">
        {/* <h1 className="text-5xl font-bold mb-4">Descubre las Mariposas Asiaticas</h1> */}
        <div className="bg-white p-6 rounded-2xl shadow-2xl  max-w-xl w-full text-center md:text-left">
        <p className="w-full p-6 text-md leading-relaxed opacity-0 animate-fade-in animation-delay-500 ">Las mariposas desempeñan un <strong className="text-green-700">papel fundamental como polinizadores.</strong><br />
          Al buscar néctar para alimentarse, sus grandes alas les ayudan a transferir el polen entre plantas lejanas,
          lo que las convierte en polinizadores activos de las flores silvestres. Cuando se posan en las flores, transfieren
          el polen entre las partes masculinas y femeninas de las plantas, facilitando la reproducción y el crecimiento de semillas y frutos.
          <strong className="text-green-700"> Asia es un continente con una extraordinaria riqueza en diversidad de mariposas diurnas</strong>, donde se pueden encontrar más de 500 especies,
          muchas de ellas destacadas por sus vibrantes colores y gráciles formas. Estas mariposas habitan una amplia gama de entornos, desde bosques tropicales
          hasta áreas templadas, y son esenciales para el equilibrio de los ecosistemas y la producción de alimentos.
          La diversidad de polinizadores es crucial para asegurar una buena polinización de los cultivos alimentarios y 
          las flores silvestres en toda Europa, y esta importancia se extiende a Asia. 
          Depender de una sola especie implica un gran riesgo si factores como el cambio climático o las enfermedades la afectaran.
          <strong className="text-green-700"> Por lo tanto, el mantenimiento de una amplia variedad 
          de mariposas y otros polinizadores
          es esencial para la salud ambiental y la producción de alimentos. </strong></p>
          </div>
     </div>
      </section>
    </>
  )
}

export default Home