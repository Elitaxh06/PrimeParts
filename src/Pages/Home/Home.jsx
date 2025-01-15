import React from "react";
import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar"
import { Welcome } from "./Welcome"
import { Pluses } from "./Pluses"
import { FeaturedProducts } from "./FeaturedProducts";
import { CallToAction } from "./CallToAction";
import { CallToContact } from "./CallToContact";
import { CartSection } from"../../Components/CartSection/CartSection";
function Home () {
    useEffect(() => {
            window.scrollTo({
              top: 0,
              left: 0,
              // Desplazamiento suave
            });
          }, []);
    return(
        <main>
            <CartSection />
            <Welcome 
              title="Bienvenido a PrimeParts" 
              text="Descubre nuestra colección única de productos de alta calidad" 
              button={true}
            />
            <Pluses />
            <FeaturedProducts />
            <CallToContact />
            <CallToAction />
        </main>
    )
}

export { Home }