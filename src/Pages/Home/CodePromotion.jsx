import React from "react";
import { NavLink } from "react-router";

function CodePromotion() {
    return(
        <section className="pt-28 pb-28">
            <h2 className="font-bold text-3xl mb-5 text-center">¿Quieres ganar con nosotros?</h2>
            <p className="text-center text-slate-600 text-xl">Únete a nuestro programa de afiliados y obtén códigos de promoción exclusivos para compartir. <br />
                <span className="font-semibold">
                    ¡Gana comisiones por cada venta realizada con tu código!
                </span>
            </p>    
            <div className="flex justify-center items-center gap-3 mt-3">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift w-12 h-12 text-primary"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
                </span>
                <NavLink to='affiliates' className="bg-black w-64 h-10 rounded-md text-white hover:bg-slate-800 font-semibold flex justify-center items-center">
                    Obtener mi código promocional
                </NavLink>

            </div>
        </section>
    )
}

export { CodePromotion } 