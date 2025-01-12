import React from "react";
import { CardValores } from "./CardValores";
function Valores() {
    return (
        <section className="bg-slate-100 mt-5">
            <div className="flex justify-center items-center">
                <h2 className="font-bold text-3xl mt-5">Nuestros Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 mr-5 ml-5">
                <CardValores 
                    title="Calidad" 
                    text="Nos comprometemos a ofrecer solo productos de la más alta calidad, cuidadosamente seleccionados para nuestros clientes." 
                />
                <CardValores 
                    title="Servicio al Cliente" 
                    text="Nos esforzamos por brindar atención personalizada, garantizando que cada cliente reciba la mejor experiencia y encuentre lo que necesita." 
                />
                <CardValores 
                    title="Adaptabilidad" 
                    text="Estamos siempre dispuestos a adaptarnos a las necesidades cambiantes del mercado, ofreciendo soluciones que evolucionan con tu taller y vehículo." 
                />
            </div>
        </section>
    )
}               

export { Valores }