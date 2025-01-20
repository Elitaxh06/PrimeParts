import React from "react";

function Pluses () {
    return (
        <section className="pt-6 ml-5 mr-5 pb-6">
            <h2 className="text-center font-bold text-3xl mt-4">Nuestras Características</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 md:gap-y-16 cursor-default">

              <div className="bg-white shadow-lg rounded p-4 flex items-center flex-col justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag w-10 h-10 text-blue-500"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <h4 className="font-bold text-xl">Amplia selección</h4>
              <span>Decenas de productos para elegir.</span>
              </div>

              <div className="bg-white shadow-lg rounded p-4 flex items-center flex-col justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-10 h-10 text-blue-500"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
              <h4 className="font-bold text-xl">Envío Seguro</h4>
              <span>Entrega en 24-64 horas.</span>
              </div>

              <div className="bg-white shadow-md rounded p-4 flex items-center flex-col justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-10 h-10 text-blue-500"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                <h4 className="font-bold text-xl">Pago seguro</h4>
                <span>Transacciones 100% seguras.</span>
              </div>

              <div className="bg-white shadow-lg rounded p-4 flex items-center flex-col justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones w-10 h-10 text-blue-500"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
              <h4 className="font-bold text-xl">Atención al cliente</h4>
              <span>Atención rápida y personalizada.</span>
              </div>
            </div>
        </section>
    )
}

export { Pluses }