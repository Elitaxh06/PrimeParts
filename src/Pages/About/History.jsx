import React from "react";
import "./History.css"
import taller from "../../assets/img/taller.webp";
function History() {
    return (
        <section className="mt-2 lg:ml-20 md:ml-140 sm:ml-5 ml-2 mr-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-10 mb-10">
                <div className="flex flex-col justify-center items-start">
                <h2 className="text-3xl font-bold">Nuestra Historia</h2>
                <p className="mt-4">PrimeParts nació en 2025 con el objetivo de ofrecer repuestos, herramientas y accesorios de calidad, tanto para talleres automotrices como para conductores particulares. <br /> <br />Somos una tienda completamente virtual en crecimiento, enfocada en brindar productos confiables a precios accesibles y ofrecer un servicio cercano y personalizado. Desde nuestros inicios, nos hemos dedicado a apoyar a talleres y a individuos con productos adecuados a sus necesidades, manteniéndonos al tanto de las últimas tendencias del sector. Nuestro compromiso es crecer de manera constante, siempre buscando ofrecer lo mejor a nuestros clientes.</p>
                </div>
                <div className="flex justify-center items-start">
                    <img src={taller} alt="taller" className="w-auto object-cover taller" />
                </div>
            </div>
        </section>
    )
}

export { History }