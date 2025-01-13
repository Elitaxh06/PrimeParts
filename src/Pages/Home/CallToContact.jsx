import React from "react";
import { NavLink } from "react-router";
function CallToContact() {
    return(
        <section className="bg-slate-800 text-white pb-24 pt-24 w-full flex justify-center items-center flex-col">
                <h1 className="text-center font-bold text-3xl">¿Tienes alguna duda?</h1>
            <div className="lg:w-full w text-center mt-2">
            <span className="text-md">Estamos aquí para ayudarte. No dudes en contactarnos.</span>
            </div>
            <div className="flex justify-center items-center mt-10">
                <NavLink to="/contact">
                    <button className="bg-white text-black mt-4 h-8 hover:bg-neutral-300 w-40 rounded-md">Contáctanos</button>
                </NavLink>
            </div>  
        </section>
    )
}

export { CallToContact }