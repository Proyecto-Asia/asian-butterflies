import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-mint-green-700 text-white font-segoe p-8 rounded-b-4xl flex flex-row justify-between items-center font-bold">
                <h1 className=" ps-6 text-2xl">Asian Butterflies</h1>
                <button className="md:hidden text-2xl px-4" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "x" : "="}</button>
                <div className="hidden md:flex gap-8 justify-items-end text-lg">
                    <Link to="/" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Inicio</Link>
                    <Link to="/ButterflyGrid" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Galería</Link>
                    <Link to="/newbutterfly" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Crear nueva</Link>
                    <Link to="/contact" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Contacto</Link>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden absolute top-17 left-0 right-0 flex flex-col text-lg z-50 bg-mint-green-700 text-white font-segoe font-bold rounded-b-4xl pt-4 pb-4">
                    <Link to="/" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Inicio</Link>
                    <Link to="/ButterflyGrid" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Galería</Link>
                    <Link to="/newbutterfly" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Crear nueva</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Contacto</Link>
                </div>
            )}
        </>
    )
}
export default NavBar; 