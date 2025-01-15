import React from "react";
import { useCart } from "../../Context/CartContext";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
function Order () {
    const { cart } = useCart()
    const total = cart.reduce((acc, item) => acc + item.price, 0)
    return(
        <section className="w-6/12">
        {cart.length > 0 && (
                <div className="bg-slate-100 p-4 ">
                    <h3 className="font-bold text-xl">Resumen del pedido</h3>
                <div className="flex justify-between">
                    <p>Subtotal: ${total}</p>
                    <p></p>
                 </div>
                 <div className="flex justify-between mt-1">
                    <p>Envio</p>
                    <p>Envio gratis</p>
                 </div>
                 <div className="flex justify-between border-t border-slate-300 mt-2">
                    <p>Total</p>
                    <p>${total}</p>
                 </div>
                 <div className="flex justify-center flex-col items-center gap-1">
                    <button className="bg-black w-full mt-4 h-8 rounded-md text-white hover:bg-slate-800">Procesar Pago</button>
                    <PayPalButton />
                 </div>
                </div>
        )}
        </section>
    )
}

export { Order }