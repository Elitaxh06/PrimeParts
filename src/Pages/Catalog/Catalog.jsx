import React from "react";
import { useState, useEffect } from "react";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
import { NavLink } from "react-router";
import { Products } from "./Products";
import { BlackButton } from "../../Components/BlackButton/BlackButton";
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
            
            <div className="flex justify-center items-center mt-10">
                <NavLink to="/cart">
                    <button className="bg-black text-white mt-4 h-8 hover:bg-neutral-700 w-40 rounded-md">Ver mi carrito</button>
                </NavLink>
            </div>
        </section>
    )
}

export { Catalog }