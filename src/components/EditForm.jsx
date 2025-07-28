import React from 'react'

function EditForm() {// CARGAR datos guardados al iniciar el componente
  

  return (
     <>

     
      <form onSubmit={onSubmit}>
        <div className="font-segoe flex justify-center min-h-screen p-4">
          <div className="w-400 p-4 sm:p-6 lg:p-8 pt-6 sm:pt-8 text-lg sm:text-xl bg-white rounded-md shadow-lg shadow-gray-700">
            <div className="space-y-4 sm:space-y-6">
              {/* Nombre */}
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

              {/* Nombre científico */}
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
                  placeholder="Nombre científico..."
                  className="rounded-md w-full h-10 sm:h-12 bg-white px-3 border border-gray-300 focus:border-[#3D5B43] focus:outline-none"
                  required
                />
              </div>

              {/* Selección de país */}
              <div>
                <label className="text-[#28422B]">
                  Seleccione el país de origen: <br />
                  <Countryselect
                    datos={data}
                    onChange={handleSelectionChange}
                  />
                </label>
              </div>

              {/* Descripción corta */}
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

              {/* Descripción larga */}
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
                  placeholder="Algo más que quieras agregar..."
                  value={FormData.longDescription}
                  onChange={onChange}
                  className="rounded-md h-32 sm:h-40 w-full bg-white px-3 py-2 border border-gray-300 focus:border-[#3D5B43] focus:outline-none resize-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="butterflies-status">
                  Estado actual de la mariposa: <br />
                  <StatusSelector
                    value={FormData.status}
                    onChange={onChange}
                  />
                </label>
              </div>

              {/* Actividad (radio buttons) */}
              <div className="flex flex-col">
                <label className="text-[#3D5B43] mb-2 font-medium">
                  ¿Diurna o nocturna?
                </label>
                <label htmlFor="radio-diurno">
                  <input
                    type="radio"
                    name="activity"
                    value="1"
                    checked={FormData.activity === "1"}
                    onChange={onChange}
                    className=""
                  />{" "}
                  Diurno
                </label>
                <label htmlFor="radio-nocturno">
                  <input
                    type="radio"
                    name="activity"
                    value="0"
                    checked={FormData.activity === "0"}
                    onChange={onChange}
                    className="mr-2 accent-[#28422B]"
                  />
                  Nocturno
                </label>
              </div>

              {/* Subir imagen */}
              <Imageselector
                onUploadUrl={(url) =>
                  onChange({ target: { name: "imageUrl", value: url } })
                }
              />

              {/* Vista previa */}
              {FormData.imageUrl && (
                <img
                  src={FormData.imageUrl}
                  alt="Vista previa"
                  className="mt-4 w-48 h-auto rounded shadow-md border"
                />
              )}

              {/* Botón enviar */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="rounded-md bg-[#ABBF60] w-full sm:w-28 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#9AAF50] transition-colors"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditForm