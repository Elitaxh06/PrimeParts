import React from "react";
import { Search } from "./Search";
import products from "../../Services/Products.json"
import { BlackButton } from "../../Components/BlackButton/BlackButton";
function Products () {
    return (
        <>
        <h1 className="text-4xl text-center font-bold">Todos Los Productos</h1>
        <section className="flex flex-col md:flex-row p-5">
            <Search />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {products.map(product =>(
                    <div key={product.id} className="border p-4 rounded-3xl shadow hover:shadow-lg">
                        <img 
                            src={product.image}
                            alt={`Imagen de ${product.name}`} 
                            />
                        <p className="mt-4 ml-2 font-bold text-xl">{product.name}</p>
                        <p className="ml-2">${product.price}</p>
                        <BlackButton text="Agregar al carrito"/>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export { Products }