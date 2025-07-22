
import {  MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';


// function MapaINaturalist() {
//     return (
//         <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-lg"> 
//             <iframe 
//             src="https://www.inaturalist.org/projects/butterflies-of-southeast-asian-forests" 
//              width={"100%"}
//              height={"100%"}
//              style={{border : "none"}}
//              loading="lazy" /*Hace que cargue solo cuando lo necesitas*/
//              allowFullScreen  /*Permite hacer zoom o pantalla completa si lo quieres*/

//             ></iframe>

//         </div>

//     );
// }
// export default MapaINaturalist;

 function MapaINaturalist () {
  //observations: almacena las observaciones de mariposas que vienen del API.
  //setObservations: función para actualizar ese estado.
   const [observations, setObservations] = useState([]);//Inicialmente está vacío ([]), porque aún no hemos hecho la petición.

   useEffect(() => {
    // Usamos la API de iNaturalist con el taxon_id=47157 (mariposas) y place_id=97394 (Asia)
  fetch('https://api.inaturalist.org/v1/observations?taxon_id=47157&has[]=geo&per_page=200&page=1&swlat=0&swlng=90&nelat=36&nelng=146')
     .then(res => res.json())//convertimos la respuesta en JSON
       .then(data => setObservations(data.results));//Guardamos los resultados (data.results) dentro del estado observations.


   }, []);//El array vacío [] indica que este efecto se ejecuta solo una vez, cuando el componente se monta, si no se repetiria muchas veces.

  return (
    <div className='flex justify-center items-center mb-10 h-[600px] w-[80%] max-w-5xl mx-auto'>
   <MapContainer center={[20, 100]} zoom={4} className='h-full w-full rounded-lg shadow-lg'>
     <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
     /> 
        {/* Recorremos el array de observaciones con .map() para crear un marcador (CircleMarker) para cada mariposa. */}
      {observations.map(obs => (  
        <CircleMarker
          key={obs.id}
           center={[obs.geojson.coordinates[1], obs.geojson.coordinates[0]]}
           radius={6}
         pathOptions={{ color: 'purple', fillColor: 'orange', fillOpacity: 0.6 }}
        >
          <Popup>
            <strong>{obs.taxon?.preferred_common_name || "Butterfly"}</strong><br />
            <em>{obs.taxon?.name}</em><br />
          <a href={obs.uri} target="_blank" rel="noreferrer">Ver en iNaturalist</a>
        </Popup>
       </CircleMarker>
      ))}
     </MapContainer>
 </div>
  );
 }

 export default MapaINaturalist;



