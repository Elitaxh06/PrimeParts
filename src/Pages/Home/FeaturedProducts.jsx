import React,{useState} from "react";
import products from "../../Services/Products.json"
import "./FeaturedProducts.css"
function FeaturedProducts () {
    const [loading, setLoading] = useState(true)
    const featured = products.filter(product => product.isFeatured)
    return(
        <section className="bg-slate-100 mt-14 pt-10 pb-10">
           
            <h2 className="font-bold text-3xl  mb-5 text-center">Productos Destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10">
            {featured.map(product =>
                <div key={product.id} className="border p-4 rounded-3xl shadow hover:shadow-lg">

                        <div className="bg-slate-100 rounded-xl">
                            <img 
                            src="https://autorepuestoschacon.com/wp-content/uploads/2023/05/cropped-clutch-basket-disc-gearbox-car-isolated-white-scaled-1.jpg"
                            alt={`Imagen de ${product.name}`}
                            className="w-full h-full object-cover rounded"
                            />
                            <p className="mt-4 ml-2 font-bold text-xl">{product.name}</p>
                            <p className="ml-2">${product.price}</p>
                            <div className="text-center">
                                <button className="btn mb-3 bg-black text-white mt-3 h-8 hover:bg-neutral-800">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
            )}
            </div>
          
        </section>
    )
}

export { FeaturedProducts }