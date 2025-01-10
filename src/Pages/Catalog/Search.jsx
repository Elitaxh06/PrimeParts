import React from "react";

function Search () {
    return(
        <aside className="w-full md:w-1/2 p-4 border-r border-gray-300">
            <h2 className="text-2xl font-bold mb-4">Búsqueda</h2>
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full p-2 border rounded-md mb-4"
            />

            <h2 className="text-2xl font-bold mb-4">Categoria</h2>
            <div>
                <label className="block">
                    <input type="checkbox" className="mr-2" />Repuestos
                </label>
                <label className="block">
                    <input type="checkbox" className="mr-2" />Accesorios
                </label>
                <label className="block">
                    <input type="checkbox" className="mr-2" />Herramientas
                </label>
            </div>
        </aside>
    )
}

export { Search }