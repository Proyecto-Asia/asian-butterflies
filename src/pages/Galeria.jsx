import { useEffect, useState } from "react"
import { getAllButterflies } from "../services/ButterflyServices"

const Galeria = () => {

    const [butterflies, setButterflies] = useState([]);

    useEffect (()=>{
        async function fetchData() {

            const data = await getAllButterflies();
            setButterflies(data)


        }
        fetchData();
    },[]) 
  return (
    <>

        <div>
            {
                butterflies.map(butterfly =>(
                    <div key={butterfly.id}>
                        <h3>
                            {butterfly.name}
                        </h3>

                        
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Galeria