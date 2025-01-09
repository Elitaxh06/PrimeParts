import React from "react";


function Welcome() {
    return(
        <section className="bg-slate-100 mt-24 h-80 w-full flex justify-center items-center flex-col ">
            <div className="text center">
                <h1 className="font-bold text-5xl">Bienvenido a PrimeParts</h1>
            </div>
            <span className="mt-1 text-xl text-center flex-wrap">Descubre nuestra colección única de productos de alta calidad</span>
            <button className="mt-5 rounded-xl bg-blue-500 text-white w-36 h-9 hover:bg-blue-600">Ver Productos</button>
        </section>
    )
}

export { Welcome }