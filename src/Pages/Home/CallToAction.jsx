import React from "react";

function CallToAction () {
    return (
        <section>
            <div className="flex flex-col justify-center items-center mt-6">
                <h3 className="font-bold text-3xl">Listo para comprar?</h3>
                <span>Únete a miles de clientes satisfechos y comienza a disfrutar de nuestros productos</span>
                <button className="mt-5 rounded-xl bg-blue-500 text-white w-36 h-9 hover:bg-blue-600">Ver Productos</button>
                
            </div>
        </section>
    )
}

export { CallToAction }