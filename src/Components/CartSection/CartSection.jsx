import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { PayPalButton } from "../PayPalButton/PayPalButton";
import { NavLink } from "react-router";
function CartSection() {
    const { cart, addTocart, removeFromCart, clearCart, removeItem } = useCart()
    const [open, setOpen] = useState(false)
    return (
        <>
        {cart.length !== 0 && (
            <div>
                <button onClick={() => setOpen(!open)} className="fixed top-16 lg:top-20  right-2 bg-red-500 z-50 font-bold text-sm text-white mt-4 h-8 hover:bg-red-600 hover:scale-110  w-20 rounded-md">    {open ? 'Cerrar' : 'Ver Pedido'}
                </button>

            {open && (

                <section className="mt-20 mb-12 fixed top-0  w-44 right-0 border-l border-slate-600 shadow-lg bg-white h-full">
            <div className="flex justify-start place-items-start">
            </div>
                <div className="lg:mt-14 mt-8">
                <h1 className="text-4xl font-bold">Tu Carrito</h1>
            </div>
           

            <article className="flex flex-col md:flex-row pt-2">
                <div className="w-full md:w-1/1 p-4 ">
                    <h3 className="font-bold text-xl">Resumen del pedido {cart.length}</h3>
                    <div className="flex justify-between">
                        <p>Subtotal: </p>
                        <p>$45</p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p>Envio</p>
                        <p>Envio gratis</p>
                    </div>
                    <div className="flex justify-between border-t border-slate-300 mt-2">
                        <p>Total</p>
                        <p>$45</p>
                    </div>
                </div>
            </article>
            <div className="flex flex-col justify-center items-center">
                <NavLink to="/cart">
                    <button className="bg-black text-white mt-5 h-8 hover:bg-neutral-700 w-40 rounded-md">Ver mi carrito</button>
                </NavLink>
                    {/* <PayPalButton /> */}
            </div>
        </section>
            )}
            
            </div>
    )}
        </>
    )
}      

export { CartSection }