import React, {useState} from "react";
import products from "../../Services/Products.json"
import { useCart } from "../../Context/CartContext";
function BlackButton ({text}){
    const { addToCart } = useCart()
     const [added, setAdded] = useState(false)
        const handleAddToCart = (product) => {
            addToCart(product)
            setAdded(true)
            setTimeout(() => setAdded(false), 1000)
        }
    return(
        <div className="text-center">
            <button onClick={handleAddToCart} disabled={added} className="btn mb-3 bg-black text-white mt-3 h-8 hover:bg-neutral-800">
                {added ? '¡Agregado!' : `${text}`}    
            </button>
        </div>
    )
}


export { BlackButton }