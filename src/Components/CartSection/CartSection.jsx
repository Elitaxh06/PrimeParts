import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { NavLink } from "react-router"
import "./CartSection.css"
function CartSection() {
    const { cart, addTocart, removeFromCart, clearCart, removeItem } = useCart()
    const [open, setOpen] = useState(false)
    const total = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        <>
        {cart.length !== 0 && (
            <div>
                <button onClick={() => setOpen(!open)} className="fixed  top-16 lg:top-20  right-2 bg-red-500 z-50 font-bold text-sm text-white mt-4 h-8 hover:bg-red-600 hover:scale-110  w-20 rounded-md">    {open ? 'Cerrar' : 'Ver Pedido'}
                </button>

            {open && (

            <section className="mt-20 mb-12 fixed top-0 z-40 w-44 right-0 border-l border-slate-600 shadow-lg bg-white overflow-y-auto scrol">
            <div className="flex justify-start place-items-start">
            </div>
                <div className="lg:mt-14 mt-8">
                <h1 className="text-4xl font-bold">Tu Carrito</h1>
            </div>
           

            <article className="flex flex-col md:flex-row pt-2">
                <div className="w-full md:w-1/1 p-4">
                    <h3 className="font-bold text-xl">Resumen del pedido</h3>
                    {cart.map((item, index)=>(
                        <div key={index}>
                            <p>{item.name} {item.price} </p>
                        </div>
                    ))}
                    <div className="flex justify-between mt-5">
                        <p>Subtotal: </p>
                        <p>${total}</p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p>Envio</p>
                        <p>Envio gratis</p>
                    </div>
                    <div className="flex justify-between border-t border-slate-300 mt-2">
                        <p>Total</p>
                        <p>${total}</p>
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