import React, {useState} from "react";
import products from "../../Services/Products.json"
import { useCart } from "../../Context/CartContext";


function Card ({name, price, }) {
    const [added, setAdded] = useState(false)
    const handleAddToCart = (product) => {
        addToCart(product)
        setAdded(true)
        setTimeout(() => setAdded(false), 1000)
    }
    const { addToCart } = useCart()
    return (
        <div>
            <img 
                src="https://autorepuestoschacon.com/wp-content/uploads/2023/05/cropped-clutch-basket-disc-gearbox-car-isolated-white-scaled-1.jpg"
                alt={`Imagen de ${name}`} 
            />
            <p className="mt-4 ml-2 font-bold text-xl">{name}</p>
            <p className="ml-2">${price}</p>
            <div className="text-center">
                <button onClick={handleAddToCart} disabled={added} className="btn mb-3 bg-black text-white mt-3 h-8 hover:bg-neutral-800">
                    {added ? '¡Agregado!' : 'Agregar al carrito'}    
                </button>
            
            </div>
        </div>
    )
}

export { Card}