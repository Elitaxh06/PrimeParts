import React, { useEffect } from "react";
import { BlackButton } from "../../Components/BlackButton/BlackButton";
import { useCart } from "../../Context/CartContext";
import { NavLink } from "react-router";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
function Cart () {
    const { cart, addTocart, removeFromCart, clearCart, removeItem } = useCart()
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', // Desplazamiento suave
        });
    }, []);
    // const agregatedCart = cart.reduce((acc, item) => {
    //     const foundItem = acc.find((i) => i.id === item.id)
    //     if (foundItem) {
    //         foundItem.length
    //     }
    // })

    return (
        <section className="mt-28">
            <div className="ml-5">
                <h1 className="text-4xl font-bold">Tu Carrito</h1>
            </div>

            {cart.length !== 0 && (

                <article className="flex flex-col md:flex-row pt-5">
                <div className="w-full md:w-1/1 p-4 ">
                    <h3 className="font-bold text-xl">Resumen del pedido</h3>
                    {cart.map((item,index) => (
                        <div key={index}>
                            <p>Producto: {cart.length - index}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-100 w-full md:w-1/2 p-4 ">
                   <h3 className="font-bold text-xl">Resumen del pedido</h3>
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
            )}
            {cart.length === 0 && (
                <div className="flex flex-col justify-center items-center mt-10">
                    <h2 className="text-2xl">Tu carrito está vacío</h2>
                    <NavLink to="/products">
                        <button className="bg-black text-white mt-4 h-8 hover:bg-neutral-700 w-40 rounded-md">Ir a la tienda</button>
                    </NavLink>
                </div>
            )}
            {cart.length !== 0 && (

                <div className="flex justify-center items-center mt-10">
                <PayPalButton />
            </div>
            )}
        </section>
    )
}   

export { Cart }