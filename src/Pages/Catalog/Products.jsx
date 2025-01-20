import React, {useState} from "react";
import { Search } from "./Search";
import products from "../../Services/Products.json"
import { BlackButton } from "../../Components/BlackButton/BlackButton";
import {ButtonMoreInfo} from "../../Components/ButtonMoreInfo/ButtonMoreInfo";
import "./Product.css"
import { NavLink } from "react-router";
function Products () {
    const [search, setSearch] = useState("") // es lo que escribe el usuario
    const [selectedCategory, setSelectedCategory] = useState([]) // son las casillas de las categorias
    const [loading, setLoading] = useState(false)
    console.log(loading)
    const handleImageLoad = () => {
        console.log("Imagen cargada")
        setLoading(false)
    }
    const filterBySearch = products.filter((product) => {
        
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()); // filtra por nombre 
        const matchesCategory = selectedCategory.length === 0 || selectedCategory.includes(product.category); // filtra por categoria
        return matchesSearch && matchesCategory; // retorna ambas condiciones
    })
    
    const filterByCategory = (category) => {
        setSelectedCategory(prevState =>
            prevState.includes(category) // si ya esta seleccionada la elimina de la lista
            ? prevState.filter(cat => cat !== category) // si ya esta seleccionada la elimina de la lista
            : [...prevState, category] // si la categoria no esta seleccionada la agrega al array
        )
    }
    return (
        <>
        <h1 className="text-4xl text-center font-bold">Catálogo de Productos</h1>
        <section className="flex flex-col md:flex-row p-5">
            <Search 
            search={search} 
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            filterByCategory={filterByCategory}
            />
            {loading ? (
                <div className="flex justify-center items-center">
                    <h3 className="text-center font-bold text-3xl">Cargando....</h3>
                </div>
            ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 cardContainer">
                {filterBySearch && filterBySearch.map((product) => (
                    <div key={product.id} className="border p-4 rounded-3xl shadow hover:shadow-lg">
                        <NavLink to={`/info-product/${product.url}`}  end>
                            <img 
                                onLoad={() => setLoading(false)}    
                                id="product-image"
                                src={product.image}
                                alt={`Imagen de ${product.name}`} 
                                />
                        </NavLink>
                        <p className="mt-4 ml-2 font-bold text-xl">{product.name}</p>
                        <p className="ml-2">${product.price}</p>
                        <BlackButton text="Agregar al carrito" product={product}/>
                        <NavLink to={`/info-product/${product.url}`}>
                            <ButtonMoreInfo text="Ver más"/>    
                        </NavLink>
                    </div>
                    
                ))}
                {filterBySearch.length === 0 && <h2 className="text-center text-2xl font-bold">No hay productos que coincidan con tu búsqueda</h2>}
            </div>
            )}
        </section>
        </>
    )
}

export { Products }