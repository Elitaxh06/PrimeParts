import React,{useState} from "react";
import products from "../../Services/Products.json"
import { Card } from "../../Components/Card/Card";
import "./FeaturedProducts.css"
function FeaturedProducts () {
    const featured = products
    const [loading, setLoading] = useState(true)
    return(
        <section className="bg-slate-100 mt-14 pt-10 pb-10">
           
            <h2 className="font-bold text-3xl  mb-5 text-center">Productos Destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10">
            {featured.map(product =>
            <div key={product.id} className="border p-4 rounded-3xl shadow hover:shadow-lg">
                <Card name={product.name} price={product.price}/>        
            </div>
        )}
        </div>
            <div className="flex items-center justify-center">
                <button className="bg-white text-black w-56 h-9 rounded-md hover:bg-slate-200 hover:shadow-xl shadow-lg">Ver todos los productos</button>
            </div>
          
        </section>
    )
}

export { FeaturedProducts }