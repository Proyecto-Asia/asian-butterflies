import Countryselect from "./CountrySelect";
import Imageselector from "./Imageselector";
import StatusSelector from "./StatusSelector";

const EditForm = ({
  FormData,
  onChange,
  onSubmit,
  data = [], // datos para países, por defecto array vacío
  handleSelectionChange,
  buttonLabel = "Guardar cambios",
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="font-segoe flex justify-center min-h-screen p-4">
        <div className="w-400 p-4 sm:p-6 lg:p-8 pt-6 sm:pt-8 text-lg sm:text-xl bg-white rounded-md shadow-lg shadow-gray-700">
          <div className="space-y-4 sm:space-y-6">
            {/* Nombre */}
            <div className="flex flex-col">
              <label className="text-[#28422B] mb-2 font-medium">Nombre:</label>
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
              <label className="text-[#28422B] mb-2 font-medium">
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

            {/* País */}
            <div>
              <label className="text-[#28422B]">
                Seleccione el país de origen: <br />
                <Countryselect datos={data} onChange={handleSelectionChange} value={{ region: FormData.region, location: FormData.location }} />
              </label>
            </div>

            {/* Descripciones */}
            <div className="flex flex-col">
              <label className="text-[#3D5B43] mb-2 font-medium">
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
              <label className="text-[#28422B] mb-2 font-medium">
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

            {/* Estado */}
            <div>
              <label>
                Estado actual: <br />
                <StatusSelector value={FormData.status} onChange={onChange} />
              </label>
            </div>

            {/* Actividad */}
            <div className="flex flex-col">
              <label className="text-[#3D5B43] mb-2 font-medium">
                ¿Diurna o nocturna?
              </label>
              <label>
                <input
                  type="radio"
                  name="activity"
                  value="1"
                  checked={FormData.activity === "1"}
                  onChange={onChange}
                />{" "}
                Diurna
              </label>
              <label>
                <input
                  type="radio"
                  name="activity"
                  value="0"
                  checked={FormData.activity === "0"}
                  onChange={onChange}
                />{" "}
                Nocturna
              </label>
            </div>

            {/* Imagen */}
            <Imageselector
              onUploadUrl={(url) =>
                onChange({ target: { name: "imageUrl", value: url } })
              }
            />
            {FormData.imageUrl && (
              <img
                src={FormData.imageUrl}
                alt="Vista previa"
                className="mt-4 w-48 h-auto rounded shadow-md border"
              />
            )}

            {/* Botón */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="rounded-md bg-[#ABBF60] w-full sm:w-32 h-10 sm:h-12 text-base sm:text-lg font-medium hover:bg-[#9AAF50] transition-colors"
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
