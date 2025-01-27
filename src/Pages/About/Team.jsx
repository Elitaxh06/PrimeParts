import React from "react";

function Team() {
    return(
        <section className="team mt-10">
            <h2 className="text-3xl text-center font-bold">Conoce Nuestro Equipo</h2>
            <div className="team-container mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10 px-4"> 
                <div className="team-member text-center">
                  <h3 className="text-xl font-semibold">Esteban</h3>
                  <p className="text-lg text-gray-500 mt-2">Fundador | Desarrollador Web</p>
                  <p className="mt-4 text-gray-700">Soy el creador de PrimeParts y me encargo de dar vida a nuestra plataforma, asegurándome de que cada detalle de la tienda sea funcional y fácil de usar. Desde la concepción de la idea hasta su desarrollo y lanzamiento, he trabajado para ofrecer una experiencia de compra en línea accesible y segura, con productos de calidad para talleres y particulares</p>
                </div>

                <div className="team-member text-center">
                  <h3 className="text-xl font-semibold">Juanjo</h3>
                  <p className="text-lg text-gray-500 mt-2">Cofundador | Socio</p>
                  <p className="mt-4 text-gray-700">Juanjo es clave en la generación de ideas y decisiones estratégicas. Con su apoyo económico y visión, aseguró el crecimiento inicial de PrimeParts y ha sido esencial en la elección de productos, ayudando a dar forma al futuro de la tienda.</p>
                </div>  
            </div>
        </section>

    )
}

export { Team }