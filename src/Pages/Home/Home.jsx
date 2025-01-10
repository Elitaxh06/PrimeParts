import React from "react";
import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar"
import { Welcome } from "./Welcome"
import { Pluses } from "./Pluses"
import { FeaturedProducts } from "./FeaturedProducts";
import { CallToAction } from "./CallToAction";
function Home () {
    useEffect(() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth', // Desplazamiento suave
            });
          }, []);
    return(
        <main>
            <Navbar />
            <Welcome />
            <Pluses />
            <FeaturedProducts />
            <CallToAction />
        </main>
    )
}

export { Home }