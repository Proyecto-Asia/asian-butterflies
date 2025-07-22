


const Createform = () => {




  return (
    <>
    <form action="">
      <div className=" font-segoe flex justify-center bg-[#FFFFFF] min-h-screen p-4 w-200">
        <div className="w-full max-w-2xl p-4 sm:p-6 lg:p-8 pt-6 sm:pt-8 text-lg sm:text-xl bg-[#FFFF] rounded-md shadow-lg shadow-gray-700 ">


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
                name="name-butterfly-input"
                maxLength="25"
                placeholder="Nombre de la mariposa..."
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
                name="sci-name-butterfly-input"
                maxLength="40"
                placeholder=" Nombre cientifico..."
                className="rounded-md w-full h-10 sm:h-12 bg-white px-3 border border-gray-300 focus:border-[#3D5B43] focus:outline-none"
                required
              />
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
                name="description-butterfly-input"
                maxLength="166"
                placeholder="Describe a la mariposa..."
                className="rounded-md w-full h-20 sm:h-24 bg-white px-3 py-2 border border-gray-300 focus:border-[#3D5B43] focus:outline-none"
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
              //
              <select
                name="choice-one-day"
                className="bg-white h-10 sm:h-12 w-full sm:w-48 px-3 rounded-md border border-gray-300 focus:border-[#3D5B43] focus:outline-none"
              >
                <option value="none">Seleccione:</option>
                <option value="day-butterfly">Diurna</option>
                <option value="night-butterfly">Nocturna</option>
              </select>
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
                  required
                />
                Elegir archivo
              </label>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="long-description-butterfly-input"
                className="text-[#28422B] mb-2 font-medium"
              >
                Más información relevante:
              </label>
              <textarea
                name="long-description-butterfly-input"
                maxLength="600" 
                className="rounded-md h-32 sm:h-40 w-full bg-white px-3 py-2 border border-gray-300 focus:border-[#3D5B43] focus:outline-none resize-none"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button
                type="submit"
                className="rounded-md bg-[#ABBF60] w-full sm:w-28 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#9AAF50] transition-colors"
              >
                Agregar
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#D4D941] w-full sm:w-28 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#C4C941] transition-colors"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    </>

  )
}

export default Createform