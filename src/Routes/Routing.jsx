import React from "react";
import { Routes, Route} from "react-router"
import { CartProvider } from "../Context/CartContext";
import { Home  } from "../Pages/Home/Home";
import { Catalog } from "../Pages/Catalog/Catalog";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
export const Routing = () => {
    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
            <Footer />
        </CartProvider>
    )
}