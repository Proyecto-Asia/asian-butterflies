import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
// Este componente carga y anima la mariposa
function Butterfly (){
 const ref = useRef();
 const { scene } = useGLTF('src/assets/img/butterfly.glb')
 // userfram se ejecuta en cada fotograma del canvas
 useFrame((state) => {
    if(ref.current){
         // Animamos la mariposa para que vuele hacia la cámara
      ref.current.position.z += 0.15; // velocidad hacia delante
       ref.current.rotation.y += 0.03; // rotación horizontal suave
       ref.current.rotation.x = Math.sin(ref.current.position.z * 2) * 0.4; // aleteo leve
      

    
    
    }

 });

 return (
   <primitive
      ref={ref}
      object={scene}
      scale={0.3} // más pequeña
      position={[0, 0, -30]} // empieza más lejos
    />
 )

}

export default function ButerflyScene () {
    return (
<div className="flex items-center justify-center min-h-screen bg bg-white">
  {/* 🔲 Contenedor principal blanco y redondeado */}
  <div className="w-[1200px] h-[1200px]  bg-white shadow-2xl relative flex items-center justify-center">

    {/* 🎯 Imagen recortada como objetivo, más pequeña y centrada */}
    <div className="w-[600px] h-[600px] rounded-full shadow-2xl overflow-hidden relative z-0">
      <img 
        src="src/assets/img/view-natural-water-lillies.jpg"
        alt="fondo"
        className="w-full h-full object-cover object-center blur-[1px] brightness-105 saturate-150"
      />
    </div>

    {/* 🦋 Canvas 3D encima, ajustado al mismo tamaño que la imagen circular */}
    <div className="absolute w-[700px] h-[700px] rounded-full overflow-hidden z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        className="w-full h-full"
      >
             
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 5]} intensity={1.5} />
        <Butterfly />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} enablePan={false}/>
      </Canvas>
         </div>

  </div>
</div>

    )
}
