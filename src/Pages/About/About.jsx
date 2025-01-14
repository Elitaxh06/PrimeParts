import React, { useEffect } from "react";
import { Welcome } from "../Home/Welcome";
import { History } from "./History";	
import { Valores } from "./Valores";
import { Team } from "./Team";
import { ViewProducts } from "./ViewProducts";
function About() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        //   behavior: 'smooth', // Desplazamiento suave
        });
    }, []);
    return (
        <section>
            {/* <Team /> */}
            <Welcome 
                title="Sobre nosotros" 
                text="Conoce nuestra historia y nuestro compromiso con la calidad" 
                button={false}
            />
            <History />
            <Valores />
            <Team />
            <ViewProducts />
        </section>
    )
}

export { About }