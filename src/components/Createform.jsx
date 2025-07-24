import Countryselect from "./Countryselect";

const Createform = ({ FormData, onChange, onSubmit, data, handleSelectionChange, controlarInput }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className=" font-segoe flex justify-center bg-mint-green-0 min-h-screen p-4 ">
          <div className=" w-400 p-4 sm:p-6 lg:p-8 pt-6 sm:pt-8 text-lg sm:text-xl bg-[#FFFF] rounded-md shadow-lg shadow-gray-700 ">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name-butterfly-input"
                  className="text-[#28422B] mb-2 font-medium"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  name="name"
                  maxLength="25"
                  placeholder="Nombre de la mariposa..."
                  value={FormData.name}
                  onChange={onChange}
                  className="rounded-md w-full h-10 sm:h-12 bg-white px-3 border border-gray-300 focus:border-[#28422B] focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="sci-name-butterfly-input"
                  className="text-[#28422B] mb-2 font-medium"
                >
                  Nombre científico:
                </label>
                <input
                  type="text"
                  name="sciname"
                  maxLength="40"
                  value={FormData.sciname}
                  onChange={onChange}
                  placeholder=" Nombre cientifico..."
                  className="rounded-md w-full h-10 sm:h-12 bg-white px-3 border border-gray-300 focus:border-[#3D5B43] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor=""
                className="text-[#28422B]">
                  Seleccione el pais de origen: <br />
                  <Countryselect 
                  datos={data}
                  onChange={handleSelectionChange}/>
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="description-butterfly-input"
                  className="text-[#3D5B43] mb-2 font-medium"
                >
                  Descripción:
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  maxLength="166"
                  placeholder="Describe a la mariposa..."
                  value={FormData.shortDescription}
                  onChange={onChange}
                  className="rounded-md w-full h-20 sm:h-24 bg-white px-3 py-2 border border-gray-300 focus:border-[#3D5B43] focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="long-description-butterfly-input"
                  className="text-[#28422B] mb-2 font-medium"
                >
                  Más información relevante:
                </label>
                <textarea
                  name="longDescription"
                  maxLength="600"
                  placeholder="Algo mas que quieras agregar..."
                  value={FormData.longDescription}
                  onChange={onChange}
                  className="rounded-md h-32 sm:h-40 w-full bg-white px-3 py-2 border border-gray-300 focus:border-[#3D5B43] focus:outline-none resize-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="day-night"
                  className="text-[#3D5B43] mb-2 font-medium"
                >
                  ¿Diurna o nocturna?
                </label>
                {/* Aqui tengo que ver como es con el select para vincularlo */}

                <label htmlFor="radio-diurno">
                  <input
                    type="radio"
                    name="activity"
                    value="diurno"
                    checked={FormData.activity === "diurno"}
                    onChange={controlarInput}
                    className=""
                  />{" "}
                  Diurno
                </label>
                <label htmlFor="radio-nocturno">
                  <input type="radio" 
                  name="activity"
                  value="nocturno"
                  checked={FormData.activity === "nocturno"} 
                    onChange={controlarInput} 
                  className="" />
                  Nocturno
                </label>
                <br />

                <label
                  htmlFor="img-butterfly"
                  name="img-text"
                  className="text-[#28422B]"
                >
                  Imagen:
                </label>
                <label
                  htmlFor="img-butterfly"
                  name="img-text"
                  className=" border-gray-300 rounded-md h-10 items-center bg-white border w-40 flex justify-center"
                >
                  <input
                    type="file"
                    name="img-butterfly"
                    className="hidden"
                    accept="image/jpeg,image/png,image/webp"
                  
                  />
                  Elegir archivo
                </label>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="rounded-md bg-[#ABBF60] w-full sm:w-28 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#9AAF50] transition-colors"
                >
                  Agregar
                </button>
                {/*<button
                type="submit"
                className="rounded-md bg-[#D4D941] w-full sm:w-28 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#C4C941] transition-colors"
              >
                Limpiar
              </button>*/}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Createform;
