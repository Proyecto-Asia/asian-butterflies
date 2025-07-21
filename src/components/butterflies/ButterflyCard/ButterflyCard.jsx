

function ButterflyCard({butterfly}) {
  // Estado para controlar si la imagen se ha cargado
  // const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <div className="bg-light-green-0 rounded-3xl p-6 max-w-sm mx-auto shadow-lg">
      {/* Imagen de la mariposa */}
      <div className="relative mb-6">
        <img src={butterfly.imageUrl} alt={butterfly.imageAlt} />
      </div>
      <h2>{butterfly.name}</h2>
      <h2>{butterfly.sciname}</h2>
      <p>
        {butterfly.shortDescription}
      </p>
      <h3>📍 location</h3>
      <h3>status</h3>
      <h3>activity</h3>
      <button className="w-full bg-olive-green-500 text-white py-3 px-6 rounded-2xl font-medium hover:bg-olive-green-600 transition-colors duration-200">
        Leer más
      </button>
    </div>
  );
}

export default ButterflyCard;
