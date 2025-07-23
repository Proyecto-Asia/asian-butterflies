import { getOneButterfly } from "../services/ButterflyServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ButterflyDetail() {
  const { id } = useParams();
  const [butterfly, setButterfly] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const butterflyData = await getOneButterfly(id);
        setButterfly(butterflyData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]);

return(

    <>
      <h1>Hola</h1>
      </>
);

}
export default ButterflyDetail; // Sintaxis basico de un componente