import React from "react";
import { useCart } from "../../Context/CartContext";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
function Order () {
    const { cart } = useCart()
    const total = cart.reduce((total, item) => total + item.price, 0)
    const messageWhatsApp = () => {
        // const total = cart.reduce((total, item) => total + item.price, 0)
        const cartMessage = cart
        .map((product)=> `${product.name} - $${product.price}`)
        .join('\n')
        let message
        if(cart.length === 1){
            message = `¡Hola! Estoy interesado en el siguiente producto:\n\n${cartMessage}\n\n Total: $${total}\n\nGracias!`
        }else{
            message = `¡Hola! Estoy interesado en los siguientes productos:\n\n${cartMessage}\n\n Total: $${total}\n\nGracias!`
        }
        const url = `https://wa.me/50683745485?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
        }
        
    
    return(
        <section className="w-full">
        {cart.length > 0 && (
                <div className="bg-slate-100 p-4 ">
                    <h3 className="font-bold text-xl">Resumen del pedido</h3>
                <div className="flex justify-between mt-2">
                    <p>Subtotal:</p>
                    <p className="font-bold">₡{total}</p>
                 </div>
                 <div className="flex justify-between mt-1">
                    <p>Envio</p>
                    <p>Gratis</p>
                 </div>
                 <div className="flex justify-between border-t border-slate-300 mt-2">
                    <p>Total:</p>
                    <p className="font-bold">₡{total}</p>
                 </div>
                 <div className="flex justify-center flex-col items-center gap-1">
                    <button onClick={messageWhatsApp} className="bg-black w-full mt-4 h-8 rounded-md text-white hover:bg-slate-800">Confirmar Pedido</button>
                    <PayPalButton />
                 </div>
                </div>
        )}
        </section>
    )
}

export { Order }