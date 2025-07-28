import React from 'react'

function EditForm() {// CARGAR datos guardados al iniciar el componente
  useEffect(() => {
    const savedStatus = localStorage.getItem('butterflyStatus');
    if (savedStatus) {
      setStatusButterfly(savedStatus);
      console.log("Estado cargado:", savedStatus);
    }
  }, []);

  return (
    <div>hola</div>
  )
}

export default EditForm