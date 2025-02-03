import React from "react";
import { NavLink } from "react-router";
import "./Search.css"
function Search ({search, setSearch, selectedCategory, filterByCategory}) {
    
    return(
        <aside className=" w-full p-4 border-r border-gray-300 asidee z-20">
            <h2 className="text-2xl font-bold mb-4">Búsqueda</h2>
            <input 
              type="text" 
              id="searching"
              value={search}
              placeholder="Buscar producto..." 
              className="w-full p-2 border rounded-md mb-4"
              onChange={(e) => setSearch(e.target.value)}
              />
            
            <h2 className="text-2xl font-bold mb-4">Categoría</h2>
            <div>
                <label className="block">
                    <input type="checkbox" 
                    checked={selectedCategory.includes('Repuestos')}
                    onChange={() => filterByCategory('Repuestos')}
                    className="mr-2" />Repuestos
                </label>
                <label className="block">
                    <input 
                    checked={selectedCategory.includes('Accesorios')}
                    onChange={() => filterByCategory('Accesorios')}
                    type="checkbox" className="mr-2" />Accesorios
                </label>
                <label className="block">
                    <input 
                    checked={selectedCategory.includes('Herramientas')}
                    onChange={() => filterByCategory('Herramientas')}
                    type="checkbox" className="mr-2" />Herramientas
                </label>
            </div>
            <NavLink to="/cart">
                    <button className="bg-black text-white mt-5 h-8 hover:bg-neutral-700 w-40 rounded-md">Ver mi carrito</button>
                </NavLink>
        </aside>
    )
}

export { Search }