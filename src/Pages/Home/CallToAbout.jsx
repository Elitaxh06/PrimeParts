import React from "react";
import { NavLink } from "react-router";
import { Button } from "../../Components/Button/Button";
function CallToAbout () {
    return(
        <section className="pb-10 pt-10 bg-slate-200">
            <div className="flex flex-col justify-center items-center mt-6">
                <h3 className="font-bold text-3xl">Conoce a nuestro equipo</h3>
                <span className="mt-3 text-center">Conoce a nuestro equipo, comprometido a ofrecerte la mejor experiencia de compra en línea con productos de calidad.</span>
                <Button text="Conoce más" url="/about"/>
            </div>
        </section>
    )
}

export { CallToAbout }