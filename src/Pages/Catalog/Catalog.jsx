import React from "react";
import { useState, useEffect } from "react";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
import { Products } from "./Products";
function Catalog () {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', // Desplazamiento suave
        });
      }, []);
    return (
        <section className="mt-28">
            <Products />
            <div className="flex justify-center items-center mt-10">
                <PayPalButton />
            </div>
        </section>
    )
}

export { Catalog }