import { Link } from "react-router-dom";

function NavBar() {

    return (
        <>
            <nav className="bg-mint-green-700 text-white font-segoe p-8  rounded-b-4xl flex flex-row gap-6 justify-between items-center font-bold">
                <h1 className=" ps-6 text-2xl">Asian Butterflies</h1>
                <div className="flex gap-10 justify-items-end text-lg">
                    <Link to="/" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Inicio</Link>
                    <Link to="/ButterflyGrid" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Galería</Link>
                    <Link to="/newbutterfly" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Crear nueva</Link>
                    <Link to="/contact" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Contacto</Link>
                </div>
            </nav>
        </>
    )
}
export default NavBar; 