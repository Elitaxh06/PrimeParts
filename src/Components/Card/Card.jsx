import React, {useState} from "react";

import { BlackButton } from "../BlackButton/BlackButton";
import './Card.css'
function Card ({name, price, image, product}) {
   
    return (
        <div>
            <img 
                id="destaque-image"
                src={image}
                alt={`Imagen de ${name}`} 
            />
            <p className="mt-4 ml-2 font-bold text-xl">{name}</p>
            <p className="ml-2">${price}</p>
            <BlackButton text="Agregar al carrito" product={product}/>
            
        </div>
    )
}

export { Card}