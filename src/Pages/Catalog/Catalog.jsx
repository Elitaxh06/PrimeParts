import React from "react";
import { useState, useEffect } from "react";
import { Products } from "./Products";
import { CartSection } from"../../Components/CartSection/CartSection";

function Catalog () {
  const {isVisible, setIsVisible} = useState(false)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
    return (
        <section className="mt-28 mb-12">

            <CartSection />
            <Products />
           
        </section>
    )
}

export { Catalog }