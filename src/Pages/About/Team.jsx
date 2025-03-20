import React from "react";

function Team() {
    return(
        <section className="team mt-10">
            <h2 className="text-3xl text-center font-bold">Conoce Nuestro Equipo</h2>
            <div className="team-container mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 px-4"> 
                <div className="team-member text-center">
                  <h3 className="text-xl font-semibold">Esteban</h3>
                  <p className="text-lg text-gray-500 mt-2">Desarrollador Web</p>
                  <p className="mt-4 text-gray-700">Soy el desarrollador de PrimeParts y me encargo de asegurar que nuestra plataforma sea funcional, fácil de usar y ofrezca una experiencia de compra accesible y segura.</p>
                </div>

                <div className="team-member text-center">
                  <h3 className="text-xl font-semibold">Juanjo</h3>
                  <p className="text-lg text-gray-500 mt-2">Socio</p>
                  <p className="mt-4 text-gray-700">Juanjo aporta con ideas clave sobre el mercado y ha sido fundamental en el apoyo económico, impulsando el crecimiento de PrimeParts desde el inicio.</p>
                </div> 

                <div className="team-member text-center">
                  <h3 className="text-xl font-semibold">Derek</h3>
                  <p className="text-lg text-gray-500 mt-2">Repartidor </p>
                  <p className="mt-4 text-gray-700">Derek es el repartidor de PrimeParts, asegurándose de que tus productos lleguen rápido y en perfecto estado.</p>
                </div>  
            </div>
        </section>

    )
}

export { Team }