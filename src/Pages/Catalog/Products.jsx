import React, {useState} from "react";
import { Search } from "./Search";
import products from "../../Services/Products.json"
import { BlackButton } from "../../Components/BlackButton/BlackButton";
function Products () {
    const [search, setSearch] = useState("") // es lo que escribe el usuario
    const [selectedCategory, setSelectedCategory] = useState([]) // son las casillas de las categorias

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
        <h1 className="text-4xl text-center font-bold">Todos Los Productos</h1>
        <section className="flex flex-col md:flex-row p-5">
            <Search 
            search={search} 
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            filterByCategory={filterByCategory}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {filterBySearch && filterBySearch.map((product) => (
                    <div key={product.id} className="border p-4 rounded-3xl shadow hover:shadow-lg">
                        <img 
                            src={product.image}
                            alt={`Imagen de ${product.name}`} 
                            />
                        <p className="mt-4 ml-2 font-bold text-xl">{product.name}</p>
                        <p className="ml-2">${product.price}</p>
                        <BlackButton text="Agregar al carrito"/>
                    </div>
                ))}
                {filterBySearch.length === 0 && <h2 className="text-center text-2xl font-bold">No hay productos que coincidan con tu búsqueda</h2>}
            </div>
        </section>
        </>
    )
}

export { Products }