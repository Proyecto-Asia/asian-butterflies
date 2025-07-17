import React,{ useState }  from "react";

const ButterflyCard = ({butterfly}) => {
    // Estado para controlar si la imagen se ha cargado
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className= "bg-white rounded-2xl p-6 shadow-lg mx-w-sm">
            <h3 className="text-xl font-bold text-gray-800">Hola, soy una tarjeta de {butterfly.name}</h3>
            <p className="text-sm italic text-gray-600">{butterfly.sciname}</p>
        </div>
    );
};

export default ButterflyCard;