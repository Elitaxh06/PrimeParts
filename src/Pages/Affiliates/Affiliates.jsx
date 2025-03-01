import React, { useEffect } from "react";
import { FormAffiliates } from "./FormAffiliates";
import { Funcionality } from "./Funcionality";
function Affiliates() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
    }, []);
    return (
        <>
            <section className="pb-24 pt-36 w-full flex justify-center items-center flex-col banner">
                <div>
                    <h1 className="text-center font-bold text-5xl mainTitle">Programa de Afiliados</h1>
                    <p className="text-center font-semibold text-white text-xl">Únete a nuestro programa y gana comisiones por cada venta que generes</p>
                </div>
            </section>
            <section className="flex justify-center items-center flex-col border pt-10 pb-10">
                <div className="cardForm border border-slate-200 shadow-xl hover:shadow-2xl rounded-lg">
                    <h2 className="text-2xl font-bold text-center pt-5 pb-5">Solicita tu Código Promocional</h2>
                    <FormAffiliates />
                </div>
            </section>
            <section>
                <Funcionality />
            </section>
        </>
    )

}

export { Affiliates } 