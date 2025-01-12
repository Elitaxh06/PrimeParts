import React from "react";
import { NavLink } from "react-router";
import "./Footer.css"

function Footer() {
    return (
        <footer className="bg-slate-800 w-full pt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-colds-1 lg:grid-cols-3 ml-16">
                <div className="ml-4">
                    <h4 className="text-white">Sobre Nosotros</h4>
                    <span className="span">PrimeParts es tu destine en linea para productos de alta calidad a precios increibles</span>
                </div>

                <div className="ml-4">
                    <h4 className="text-white">Enlaces Rapidos</h4>
                    <ul id="quick">
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to='/products'>Productos</NavLink></li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                </div>

                <div className="ml-4 mb-5">
                    <h4 className="text-white">Contacto</h4>
                    <span className="span">Email:info@PrimeTest.com <br />Telefono: (+505) 83745323</span>
                </div>
            </div>
            <div className="border-y border-slate-600 ml-36 mr-36 mt-5" id="line"></div>
            <div>
                <p id="der" className="text-center mt-2 text-sm pb-5 pt-4">© 2025 PrimeParts. Todos los derechos reservados.</p>
            </div>
            
        </footer>
    )
}

export { Footer }