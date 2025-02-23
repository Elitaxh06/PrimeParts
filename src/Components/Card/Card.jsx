import React from "react";
import { BlackButton } from "../BlackButton/BlackButton";
import { NavLink } from "react-router";
import { ButtonMoreInfo } from "../ButtonMoreInfo/ButtonMoreInfo";
import './Card.css'
function Card ({name, price, image, product, stock}) {
   
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
            <div className="flex justify-between">
                <p className="ml-2">₡{price}</p>
                {stock === 1 ? (
                    <p className="ml-2 text-slate-500">{stock} unidad</p>

                ):(
                    <p className="ml-2 text-slate-500">{stock} unidades</p>
                )}
            </div>
            <BlackButton text="Agregar al carrito" product={product} texto1={product.stock === 1 ? "Máximo " + product.stock + " unidad" : 'Máximo ' + product.stock + ' unidades'}/>
            <NavLink to={`/info-product/${product.url}`}>
                <ButtonMoreInfo text="Ver más"/>
            </NavLink>
        </div>
    )
}

export { Card}