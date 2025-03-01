import React from "react";
import { useEffect, useState } from "react";
import { Welcome } from "./Welcome"
import { Pluses } from "./Pluses"
import { FeaturedProducts } from "./FeaturedProducts";
import { CallToAction } from "./CallToAction";
import { CallToContact } from "./CallToContact";
import { CartSection } from"../../Components/CartSection/CartSection";
import { CodePromotion } from "./CodePromotion";
function Home () {
  const [isVisible, setIsVisible] = useState(false)
  
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
        <CodePromotion />
        <CallToContact />
        <CallToAction />
      </main>
  )
}

export { Home }