import React, { useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import { NavLink } from "react-router";
import { Order } from "./Order";
function Cart () {
    const { cart, addToCart, removeItem, removeFromCart } = useCart()

    const agregatedCart = cart.reduce((acc,item) => {
        const foundItem = acc.find((i) => i.id === item.id)
        if(foundItem){
            foundItem.length += 1
            
        }else{
            acc.push({...item,length:1})
        }
        return acc
    }, [])
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


            {cart.length > 0 && (
                <article className="flex flex-col md:flex-row pt-5">
                <div className="w-full md:w-1/1 p-4 ">
                    
                    {agregatedCart.map((item) => (
                        <div key={item.id} className="border-b pb-2 border-bg-slate-400 flex justify-between items-center">
                            <div className="flex gap-2">
                                <img src={item.image} alt={`Imagen de ${item.name}`} className="w-12 h-12 object-cover border border-b-gray-700 rounded-md" />
                                <p> <span className="font-bold">{item.name} </span><br /> 
                                    <span className="text-slate-500">₡{item.price}</span>
                                </p>
                            </div>
                            <div className="flex gap-2">
                                {item.length === 1 ? (
                                    <button disabled onClick={() => removeItem(item)} className="bg-slate-50 border border-slate-600 text-black flex items-center justify-center w-8 rounded-md font-bold text-xl">-</button>

                                ): (
                                    <button onClick={() => removeItem(item)} className="bg-slate-50 border border-slate-600 text-black flex items-center justify-center hover:bg-slate-200 w-8 rounded-md font-bold text-xl">-</button>
                                )}
                                <p className="font-bold">{item.length}</p>
                                {item.stock !== item.length ? (
                                <button onClick={() => addToCart(item)} className="bg-slate-50 border border-slate-600 text-black flex items-center justify-center hover:bg-slate-200 w-8 h-7 rounded-md font-bold text-xl">+</button>

                                ):
                                <button disabled onClick={() => addToCart(item)} className="bg-slate-50 border border-slate-600 text-black flex items-center justify-center hover:bg-slate-200 w-8 h-7 rounded-md font-bold text-xl">+</button>

                                }
                                
                                <button className="hover:scale-110 ml-3 hover:text-red-500" onClick={() => removeFromCart(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                                </button>
                            </div>
                            
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