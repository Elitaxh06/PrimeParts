import React from "react";
import { Button } from "../../Components/Button/Button";

function Welcome() {
    return(
        <section className="bg-slate-100 mt-24 pb-24 pt-24 w-full flex justify-center items-center flex-col ">
                <h1 className="text-center font-bold text-5xl">Bienvenido a PrimeParts</h1>
            <div className="lg:w-full w text-center mt-2">
            <span className="lg:text-xl text-md">Descubre nuestra colección única de productos de alta calidad</span>
            </div>
            <Button text="Ver Productos" url="/products"/>
        </section>
    )
}

export { Welcome }