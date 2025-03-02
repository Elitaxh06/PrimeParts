import React,{useState} from "react";
import products from "../../Services/Products.json"
import { NavLink } from "react-router";
import { Card } from "../../Components/Card/Card";
import { useCart } from "../../Context/CartContext";
import "./FeaturedProducts.css"
function FeaturedProducts () {
    const { addToCart, getProductQuantity } = useCart()
    const featured = products.filter(product => product.isFeatured)
    return(
        <section  className="bg-slate-100 mt-14 pt-10 pb-10">
           
            <h2 className="font-bold text-3xl mb-5 text-center">Productos Destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10 ">
            {featured.map(product =>
                <div  key={product.id} className="border p-4 rounded-3xl shadow hover:shadow-lg">
                <Card name={product.name} price={product.price} image={product.image} product={product} stock={product.stock}/>        
            </div>
        
        )}
        </div >
            <div id="uff" className="flex items-center justify-center">
               <NavLink to="/products">
                    <button  className="bg-white text-black w-56 h-9 rounded-md hover:bg-slate-200 hover:shadow-xl shadow-lg">Ver todos los productos</button>
                </NavLink>
            </div>
        </section>
    )
}

export { FeaturedProducts }