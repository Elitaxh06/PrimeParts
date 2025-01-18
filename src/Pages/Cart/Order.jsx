import React from "react";
import { useCart } from "../../Context/CartContext";
import { PayPalButton } from "../../Components/PayPalButton/PayPalButton";
function Order () {
    const { cart } = useCart()
    const total = cart.reduce((total, item) => total + item.price, 0)
    const messageWhatsApp = () => {
        // const total = cart.reduce((total, item) => total + item.price, 0)
        const groupedCart = cart.reduce((acc, item)=>{
            if(acc[item.id]){
                acc[item.id].cantidad += 1
            }else{
                acc[item.id] = { ...item, cantidad: 1}
            }
            return acc
        },{})
        const cartMessage = Object.values(groupedCart)
            .map((item)=>
                item.cantidad > 1
                ? `${item.name} x ${item.cantidad} - ₡${item.price * item.cantidad}`
                : `${item.name} - ₡${item.price}`)
        .join('\n')
        const total = Object.values(groupedCart).reduce(
            (total, product) => total + product.price * product.cantidad,
            0
        );

        let message = cart.length === 1
        ? `¡Hola! Estoy interesado en el siguiente producto:\n\n${cartMessage}\n\nTotal: $${total}\n\nGracias!`
        : `¡Hola! Estoy interesado en los siguientes productos:\n\n${cartMessage}\n\nTotal: $${total}\n\nGracias!`;
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