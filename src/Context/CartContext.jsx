import React, { createContext, useContext, useState} from "react";
const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const getProductQuantity = (productId) => {
        return cart.filter(item => item.id === productId).length;
    };
    const addToCart = (product) => {
        const quantityInCart = getProductQuantity(product.id)
        if(quantityInCart >= product.stock){
            console.log("No hay mas stock disponible")
            return;
        }  
        setCart((prevCart)=>[...prevCart, product])
        return product
    }

    const removeFromCart = (productId) => setCart((prev) => prev.filter((item) => item.id !== productId));

    const clearCart = () => setCart([])

    const removeItem = (product) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex(item => item.id === product.id);
            if (index !== -1) {
                const newCart = [...prevCart];
                newCart.splice(index, 1);
                return newCart;
            }
            console.log("")
            return prevCart;
        });
    };
    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, removeFromCart, clearCart, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext);