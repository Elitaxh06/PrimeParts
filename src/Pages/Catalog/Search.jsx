import React, {useState} from "react";

function Search ({search, setSearch, selectedCategory, filterByCategory}) {
    
    return(
        <aside className=" w-full p-4 border-r border-gray-300 ">
            <h2 className="text-2xl font-bold mb-4">Búsqueda</h2>
            <input 
              type="text" 
              value={search}
              placeholder="Buscar producto..." 
              className="w-full p-2 border rounded-md mb-4"
              onChange={(e) => setSearch(e.target.value)}
            />
            
            <h2 className="text-2xl font-bold mb-4">Categoria</h2>
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
        </aside>
    )
}

export { Search }