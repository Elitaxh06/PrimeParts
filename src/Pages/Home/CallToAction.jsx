import React from "react";
import { Button } from "../../Components/Button/Button";
function CallToAction () {
    return (
        <section className="pb-14 pt-10">
            <div className="flex flex-col justify-center items-center mt-6">
                <h3 className="font-bold text-3xl">¿Listo para comprar?</h3>
                <span className="mt-3 text-center">Únete a decenas de clientes satisfechos y comienza a disfrutar de nuestros productos.</span>
                <Button text="Ver Productos" url="/products"/>
            </div>
        </section>
    )
}

export { CallToAction }