import React, {useEffect} from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import products from "../../Services/Products.json"
import { Button } from "../Button/Button";
import { BlackButton } from "../BlackButton/BlackButton";
function InfoProducts() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
    }, []);
    const  { itemId } = useParams()
    const item = products.find(product => product.id === parseInt(itemId))
    if(!item){
        return(
            <>
            <h2 className="mt-40 p-4 font-bold text-center text-3xl">Producto no encontrado</h2>
            <NavLink to="/products">
                <div className="flex justify-center items-center mb-5">
                    <button className="bg-black text-white mt-5 h-8 hover:bg-neutral-700 w-40 rounded-md">Volver</button>
                </div>
            </NavLink>
        </>
        )
    }
    return (
        <section className="mt-24 mb-28 ml-4 mr-4">
            <Button text="Volver" url="/products"/>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="border boder-slate-600">
                    <img src={item.image} alt={`Imagen de ${item.name}`} className="w-full h-full object-cover" />
                </div>
                <div className="ml-3 max-w-96">
                    <h2 className="font-bold text-2xl">{item.name}</h2>
                    <p className="font-bold text-xl mt-1">₡{item.price}</p>
                    <p className="mt-2"><span className="font-bold">Categoría:</span> {item.category}</p>
                    <p className="text-sm text-slate-600 mt-2">{item.description}</p>
                    <BlackButton text="Agregar al carrito" product={item}/>
                </div>
            </div>
        </section>
    )
}

export { InfoProducts }