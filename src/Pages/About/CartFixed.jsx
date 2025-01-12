import React, {useState} from "react";
import { useCart } from "../../Context/CartContext";
import { BlackButton } from "../../Components/BlackButton/BlackButton";

function Team() {
    const { cart } = useCart()
    const [cartOpen, setCartOpen] = useState(false)
    return(
        <>
            {cart.length !== 0 &&(
            <div className="mt-5 ml-5 mr-5 fixed top-32 right-0  bg-slate-400 h-screen">
            <button onClick={() => setCartOpen(!cartOpen)}>{cartOpen ? "Cerrar" : "Ver Carrito"}</button>
                {cartOpen && (

                    <section className="">
                    <h2 className="text-center font-bold text-3xl">Tu Pedido</h2>
                    <button className="bg-black text-white mt-4 h-8 hover:bg-neutral-700 w-40 rounded-md" onClick={() => setCartOpen(!cartOpen)}>Ver Carrito</button>
                    </section>  
            )}
            </div>
            )}
            
        </>
    )

}

export { Team }