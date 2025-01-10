import React, {useState} from "react";
import { useCart } from "../../Context/CartContext";
import { BlackButton } from "../BlackButton/BlackButton";

function Card ({name, price, image}) {
   
    return (
        <div>
            <img 
                src={image}
                alt={`Imagen de ${name}`} 
            />
            <p className="mt-4 ml-2 font-bold text-xl">{name}</p>
            <p className="ml-2">${price}</p>
            <BlackButton text="Agregar al carrito"/>
            
        </div>
    )
}

export { Card}