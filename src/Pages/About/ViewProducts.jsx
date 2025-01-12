import React from "react";
import { Button } from "../../Components/Button/Button";

function ViewProducts() {
    return (
        <section className="mt-10 bg-slate-100 pb-14 pt-14 ">
            <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold text-3xl text-center">¿Listo para unirte a nuestra comunidad?</h2>
                <p className="text-center mt-3">Descubre nuestra amplia selección de productos y experimenta nuestro servicio de primera clase</p>
                <Button text="Explorar Productos" className="mt-10" url="/products"/>
            </div>
        </section>
    )
}

export { ViewProducts }