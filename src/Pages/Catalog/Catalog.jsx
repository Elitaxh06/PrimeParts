import React from "react";
import { useState, useEffect } from "react";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
import { NavLink } from "react-router";
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
        <section className="mt-28 mb-12">
            <Products />
           
        </section>
    )
}

export { Catalog }