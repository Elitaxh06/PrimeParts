import React, {useState} from "react";
import { useCart } from "../../Context/CartContext";
import "./BlackButton.css"
function BlackButton ({text, product}){
    const { cart, addToCart, getProductQuantity } = useCart()
    const [added, setAdded] = useState(false)
    const [texto, setTexto] = useState(text);

    const quantityInCart = getProductQuantity(product.id)
    const isOutOfStock = product.stock === 0
    const isMaxReached = quantityInCart >= product.stock;
    const isDisabled = quantityInCart >= product.stock
    const handleAddToCart = () => {
        
        if(!product){
            console.log("El producto no fue proporcionado")
            return;
        }
        if(isOutOfStock){
            alert('¡Ups! Este producto está agotado. Pero estamos trabajando para traerlo de vuelta pronto.')
            return;
        }
        addToCart(product)
        setAdded(true)
        setTimeout(() => {
            setTexto(text)
            setAdded(false)
        }, 2000)
    }
    return(
        <div className="text-center">
            {cart.stock !== cart.length && (
                <button onClick={handleAddToCart} disabled={isDisabled || added} className="btn mb-3 bg-black h-8 text-white mt-3 hover:bg-neutral-800">
                {added && (
                    <div className="cart-animation">
                     {/* Carrito SVG */}
                     <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/></svg>

                     <div className="product-falling font-bold">+1</div>
                   </div>
                )} 
    
                {!added && (
                    <p>{isOutOfStock ? "Agotado" : isMaxReached ? "Máximo alcanzado" : texto}</p>
                )}
            </button>
            )}
        </div>
    )
}


export { BlackButton }