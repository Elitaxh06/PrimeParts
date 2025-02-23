import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { NavLink } from "react-router"
import "./CartSection.css"
function CartSection() {
    const { cart, addToCart, removeFromCart, removeItem } = useCart()
    const [ overlay, setOverlay ] = useState(false)
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
                <button onClick={() => setOpen(!open)} className={`fixed  top-16 lg:top-20  right-2 xl:right-5   z-50 font-bold text-sm mt-4 h-8 ${!open ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}  hover:scale-110  w-20 rounded-md`}> {open ? 'Cerrar' : 'Ver Pedido'}
                </button>
            {open && (
                <div
                className="fixed inset-0 bg-black opacity-50 z-40 h-full"
                onClick={() => {
                    setOpen(false);
                    setOverlay(false); // Cerrar la vista previa y la capa oscura si se hace clic fuera
                }}
            ></div>
            )}
            {open && (

            <section className="fixed top-8 z-40 w-48 lg:w-56 md:w-56 right-0 h-full border-l-2 border-l-black shadow-lg bg-white overflow-y-auto scrol cart-window">
            <div className="flex justify-start place-items-start mt-20">
            </div>
                <div className="lg:mt-10 mt-8">
                <h1 className="text-4xl font-bold text-center">Tu Carrito</h1>
            </div>
           

            <article className="flex flex-col md:flex-row pt-2">
                <div className="w-full md:w-1/1 p-4">
                    
                    {agregatedCart.map((item, index)=>(
                        <div key={index}>
                            <div className="flex flex-col bg-slate-100 mb-5 pb-2 rounded-lg">
                                <div className="flex flex-col">
                                    <p className="flex justify-between">
                                        <span className="font-bold ml-1">{item.name}</span>
                                        <button className=" hover:text-red-500 mr-1" onClick={() => removeFromCart(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                            </svg>
                                        </button>
                                     </p>
                                     <div className="flex justify-between items-center mr-2">
                                        <p className="text-slate-600 ml-2">₡{item.price} </p>
                                        <p className="text-slate-600 ml-2">{item.stock}.u </p>
                                    </div>
                                </div>
                                <div className="flex justify-around items-center mb-1 mt-2 rounded-md">
                                    {item.length === 1 ?(
                                        <button disabled className="bg-blue-400 w-5 rounded-lg hover:bg-blue-500 text-white font-bold" onClick={() => removeItem(item)}>-</button>
                                    ):(
                                        <button className="bg-blue-400 w-5 rounded-lg hover:bg-blue-500 text-white font-bold" onClick={() => console.log(removeItem(item))}>-</button>  
                                    )}
                                    <p>{item.length}</p>
                                    {item.stock === item.length ? (
                                        <button disabled className="w-5 bg-blue-400 rounded-lg hover:bg-blue-500 text-white font-bold" onClick={() => console.log(addToCart(item))}>+</button>

                                    ): (
                                        <button className="w-5 bg-blue-400 rounded-lg hover:bg-blue-500 text-white font-bold" onClick={() => console.log(addToCart(item))}>+</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-5">
                        <p>Subtotal: </p>
                        <p>₡{total}</p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p>Descuento:</p>
                        <p>₡0</p>
                    </div>
                    <div className="flex justify-between border-t border-slate-300 mt-2">
                        <p className="font-bold">Total:</p>
                        <p>₡{total}</p>
                    </div>
                </div>
            </article>
            <div className="flex flex-col justify-center items-center mb-12">
                <NavLink to="/cart">
                    <button className="bg-black text-white mt-5 h-8 hover:bg-neutral-700 w-40 rounded-md">Ver mi carrito</button>
                </NavLink>
            </div>
        </section>
            )}
            
            </div>
    )}
        </>
    )
}      

export { CartSection }