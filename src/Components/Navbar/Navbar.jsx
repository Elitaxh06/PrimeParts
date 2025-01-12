import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import "./Navbar.css"
import { NavLink } from 'react-router';
function Navbar() {
    const { cart } = useCart()
    const [menuOpen, setMenuOpen] = useState(true)
    return(
        <header className="flex justify-between items-center bg-white fixed top-0 left-0 w-full h-20 border-b border-slate-300 shadow-sm">
            <h2 className="ml-5 font-bold text-3xl">PrimeParts</h2>
            
            <ul id="navbar" className="flex mb-6">
                <li className="ml-5"><NavLink to="/" end>Inicio</NavLink></li>
                <li className="ml-5"><NavLink to='/products' end>Productos</NavLink></li>
                <li className="ml-5">Nostros</li>
                <li className="ml-5">Contacto</li>
                <li className='ml-5 mr-3' id='cart'>
                    <NavLink to="/cart" end>
                        <div className="flex mr-4">
                            {/* Ícono SVG del carrito */}
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-6 h-6 text-gray-600"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                            <span id='number' className="absolute ml-3 top-0 mt-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{cart.length}</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export{ Navbar }