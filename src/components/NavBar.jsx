import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav
                className={`bg-mint-green-700 text-white font-segoe p-6 pl-2 flex flex-row justify-between items-center font-bold 
                ${isOpen ? "rounded-b-none" : "rounded-b-4xl"} md:rounded-b-4xl`}>
                <h1 className=" ps-6 text-2xl">Asian Butterflies</h1>
                <button className="md:hidden text-2xl px-4 py-2 hover:bg-mint-green-800 rounded-xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFF">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFF">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                )}</button>
                <ul className="hidden md:flex gap-8 justify-items-end text-lg">
                    <li><Link to="/" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Inicio</Link></li>
                    <li><Link to="/ButterflyGrid" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Galería</Link></li>
                    <li><Link to="/newbutterfly" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Crear nueva</Link></li>
                    <li><Link to="/contact" className="hover:bg-mint-green-800 px-4 py-2 rounded-4xl">Contacto</Link></li>
                </ul>
            </nav>
            {isOpen && (
                <ul className="md:hidden absolute top-22 left-0 right-0 flex flex-col text-lg z-50 bg-mint-green-700 text-white font-segoe font-bold rounded-b-4xl pt-4 pb-4">
                    <li><Link to="/" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 hover:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Inicio</Link></li>
                    <li><Link to="/ButterflyGrid" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 hover:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Galería</Link></li>
                    <li><Link to="/newbutterfly" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 hover:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Crear nueva</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)} className="active:bg-mint-green-800 hover:bg-mint-green-800 block w-full text-center px-4 py-2 rounded-4xl">Contacto</Link></li>
                </ul>
            )}
        </>
    )
}
export default NavBar; 