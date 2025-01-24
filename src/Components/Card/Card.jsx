import React from "react";
import { BlackButton } from "../BlackButton/BlackButton";
import { NavLink } from "react-router";
import { ButtonMoreInfo } from "../ButtonMoreInfo/ButtonMoreInfo";
import './Card.css'
function Card ({name, price, image, product}) {
   
    return (
        <div>
            <NavLink to={`/info-product/${product.url}`}>
                <img 
                    id="destaque-image"
                    src={image}
                    alt={`Imagen de ${name}`} 
                />
            </NavLink>
            <p className="mt-4 ml-2 font-bold text-xl">{name}</p>
            <p className="ml-2">₡{price}</p>
            <BlackButton text="Agregar al carrito" product={product}/>
            <NavLink to={`/info-product/${product.url}`}>
                <ButtonMoreInfo text="Ver más"/>
            </NavLink>
        </div>
    )
}

export { Card}