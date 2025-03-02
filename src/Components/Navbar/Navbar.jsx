import React, { useEffect, useState } from 'react';
import { useCart } from '../../Context/CartContext';
import "./Navbar.css"
import { NavLink } from 'react-router';
function Navbar() {


    const { cart } = useCart()

    const [isOpen, setIsOpen ] = useState(false)
    const openMenu = () => {
        setIsOpen(!isOpen)
    }
    return(
        <header className={`flex justify-between items-center bg-white fixed top-0 left-0 w-full h-20 border-b border-slate-300 shadow-sm z-50`}>
            <NavLink to="/" end className="sm:pointer-events-auto pointer-events-none">
                <h2 className="ml-5 font-bold text-3xl titulo">PrimeParts</h2>
            </NavLink>
            
            {/* <button onClick={openMenu} className='md:hidden p-2 text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Abrir menú'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button> */}
            <nav 
            // className={`md:block ${isOpen ? 'block' : 'hidden'}`}
            >
                <ul className='flex items-center mb-6 font-bold'>
                    
                    <li className="ml-5 li hover:text-blue-500 hover:scale-110 active:text-blue-500"> 
                        <NavLink to="/" end>Inicio</NavLink>
                    </li>
                    <li className="ml-5 li hover:text-blue-500 hover:scale-110 active:text-blue-500">
                        <NavLink to='/products' end>Productos</NavLink>
                    </li>
                    <li className="ml-5 li hover:text-blue-500 hover:scale-110 active:text-blue-500">
                        <NavLink to='/about' end>Nosotros</NavLink>
                    </li>
                    <li className="ml-5 li hover:text-blue-500 hover:scale-110 active:text-blue-500">
                        <NavLink to='/contact' end>Contacto</NavLink>
                    </li>
                    <li className={`hidden lg:block md:block sm:hidden ml-5 li hover:text-blue-500 hover:scale-110 active:text-blue-500`}>
                        <NavLink to='/affiliates' end>Afiliados</NavLink>
                    </li>
                    <li className='ml-5 li hover:bg-white mr-3' id='cart'>
                        <NavLink to="/cart" end>

                            <div className="flex mr-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"    strokeLinejoin="round" className="lucide lucide-shopping-cart w-6 h-6 text-gray-600"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21"     r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                            {cart.length !== 0 && (
                                <>
                                <span id='number' className="absolute ml-3 top-0 mt-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                {cart.length}</span>
                               </>
                            )}
                            </div>
                        </NavLink>
                    </li>
                </ul>
                {/* <NavLink className='ml-5 li hover:text-blue-500 hover:scale-110 active:text-blue-500' to='/affiliates'>
                    Afiliados
                </NavLink> */}
            </nav>
        </header>
    )
}

export{ Navbar }