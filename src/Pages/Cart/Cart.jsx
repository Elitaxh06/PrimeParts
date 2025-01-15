import React, { useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import { NavLink } from "react-router";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
import { Order } from "./Order";
function Cart () {
    const { cart, addToCart, removeItem, removeFromCart, clearCart } = useCart()

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', // Desplazamiento suave
        });
    }, []);
    

    return (
        <section className="mt-28 mb-12">
            <div className="ml-5">
                <h1 className="text-4xl font-bold">Tu Carrito</h1>
            </div>
            {console.log(cart, `elemento`)}

            {cart.length > 0 && (
                <article className="flex flex-col md:flex-row pt-5">
                <div className="w-full md:w-1/1 p-4 ">
                    <h3 className="font-bold text-xl">Resumen del pedido</h3>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <p>{item.name} - {item.price} x </p>
                        </div>
                    ))}
                </div>
                <Order />
            </article>
            )}
            {cart.length === 0 && (
                <div className="flex flex-col justify-center items-center mt-10">
                    <h2 className="text-2xl">Tu carrito está vacío</h2>
                    <NavLink to="/products">
                        <button className="bg-black text-white mt-4 h-8 hover:bg-neutral-700 w-40 rounded-md">Ir a la tienda</button>
                    </NavLink>
                </div>
            )}
            
        </section>
    )
}   

export { Cart }