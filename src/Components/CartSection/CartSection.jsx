import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { NavLink } from "react-router"
import { PayPalButton } from "../PayPalButton/PayPalButton";
import "./CartSection.css"
function CartSection() {
    const { cart, addToCart, removeFromCart, clearCart, removeItem } = useCart()
    const [open, setOpen] = useState(false)
    const total = cart.reduce((acc, item) => acc + item.price, 0)
    const agregatedCart = cart.reduce((acc,item) => {
        const foundItem = acc.find((i) => i.id === item.id)
        if(foundItem){
            foundItem.length += 1
            
        }else{
            acc.push({...item,length:1})
        }
        return acc
    }, [])
    return (
        <>
        {cart.length !== 0 && (
            <div>
                <button onClick={() => setOpen(!open)} className={`fixed  top-16 lg:top-20  right-2  z-50 font-bold text-sm text-white mt-4 h-8 ${!open ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}  hover:scale-110  w-20 rounded-md`}>    {open ? 'Cerrar' : 'Ver Pedido'}
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
                    
                    {agregatedCart.map((item, index)=>(
                        <div key={index}>
                            <div className="flex flex-col bg-slate-100 mb-1 rounded-lg">
                                <div className="flex justify-between">
                                    <p>
                                        <span className="font-bold">{item.name}</span> <br />
                                        <span className="text-slate-600">₡{item.price} </span>
                                     </p>

                                </div>
                                <div className="flex justify-around items-center mb-1 mt-2 rounded-md">
                                    {item.length === 1 ?(
                                        <button disabled className="bg-blue-400 w-5 rounded-lg hover:bg-blue-500 text-white font-bold" onClick={() => removeItem(item)}>-</button>
                                    ):(
                                        <button className="bg-blue-400 w-5 rounded-lg hover:bg-blue-500 text-white font-bold" onClick={() => removeItem(item)}>-</button>  
                                    )}
                                    <p className="">{item.length}</p>
                                    <button className="w-5 bg-blue-400 rounded-lg hover:bg-blue-500 text-white font-bold" onClick={() => addToCart(item)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-5">
                        <p>Subtotal: </p>
                        <p>₡{total}</p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p>Envio</p>
                        <p>Envio gratis</p>
                    </div>
                    <div className="flex justify-between border-t border-slate-300 mt-2">
                        <p>Total</p>
                        <p>₡{total}</p>
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