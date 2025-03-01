import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import products from "../../Services/Products.json"
import { Button } from "../Button/Button";
import { BlackButton } from "../BlackButton/BlackButton";
import { CartSection } from "../CartSection/CartSection";
import "./InfoProducts.css"
function InfoProducts() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          // Desplazamiento suave
        });
      }, []);
    const  { itemId } = useParams()
    const item = products.find(product => product.id === parseInt(itemId))
    if(!item){
        return(
            <>
            <h2 className="mt-40 p-4 font-bold text-center text-3xl">Producto no encontrado</h2>
            <NavLink to="/products">
                <div className="flex justify-center items-center mb-5">
                    <button className="bg-black text-white mt-5 h-8 hover:bg-neutral-700 w-40 rounded-md">Volver</button>
                </div>
            </NavLink>
        </>
        )
    }
    const [index, setIndex ] = useState(0)
    const images = [item.image, item.image2].filter(Boolean) // Filtra imágenes no definidas

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
    return (
        <section className="mt-24 mb-28 ml-4 mr-4">
            <CartSection />
            <Button text="Volver" url={-1}/>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="relative w-full" data-carousel="static">
                    <div className="relative h-56 md:h-96 overflow-hidden">
                        {images.map((image, i) => (
                            <div key={i} className={`duration-200 ease-linear flex items-center justify-center ${i === index ? 'block' : 'hidden'}`} data-carousel-item>
                                <img src={image} className="max-w-full object-contain max-h-52 lg:max-h-96 md:max-h-64 sm:max-h-56 imagen" alt="" />
                            </div>
                        ))}
                    </div>
                    
                    {images.length > 1 && (
                        <>
                            <button onClick={prevImage} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button onClick={nextImage} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </>
                    )}
                </div>
                <div className="ml-3 max-w-96">
                    <h2 className="font-bold text-2xl">{item.title}</h2>
                    <p className="font-bold text-xl mt-1">₡{item.price}</p>
                    <p className="mt-2"><span className="font-bold">Categoría:</span> {item.category}</p>
                    <p className="text-sm text-slate-600 mt-2">{item.description}</p>
                    <BlackButton text="Agregar al carrito" product={item} texto1={'Maximo alcanzado'}/>
                </div>
            </div>
        </section>
    )
}

export { InfoProducts }