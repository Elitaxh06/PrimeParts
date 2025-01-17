import React from "react";
import { Routes, Route} from "react-router"
import { CartProvider } from "../Context/CartContext";
import { Home  } from "../Pages/Home/Home";
import { Cart } from "../Pages/Cart/Cart";
import { Catalog } from "../Pages/Catalog/Catalog";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { About } from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import { InfoProducts } from "../Components/InfoProducts/InfoProducts";

export const Routing = () => {
    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/info-product/:itemId" element={<InfoProducts />} />
            </Routes>
            <Footer />
        </CartProvider>
    )
}