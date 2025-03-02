import React from "react";
import { MiniCards } from "../../Components/MiniCards/MiniCards";
function Funcionality() {
    const svg1 = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift w-12 h-12 text-primary mx-auto mb-4"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
    )
    const svg2 = (
        <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
    )
    const sv3 = (
        <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
    const svg4 = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-12 h-12 text-primary mx-auto mb-4"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    )
    return(
        <section className="bg-slate-100 pt-7 pb-36 w-full flex justify-center items-center flex-col">
            <MiniCards 
            title="¿Cómo funciona?"
            svg1={svg1}
            title1="Obtén tu código"
            text1="Rellena el formulario y te enviaremos tu código promocional único via correo electrónico."
            svg2={svg2}
            title2="Comparte"
            text2="Promociona nuestros productos usando tu código en tus redes y sitio web."
            svg3={sv3}
            title3="Gana"
            text3="Recibe comisiones por cada venta realizada con tu código promocional."
            svg4={svg4}
            title4="Sube de Nivel"
            text4="Aumenta tus ventas para subir de nivel. Obtén mejores comisiones y beneficios exclusivos a medida que avanzas."
            />
        </section>
    )
}

export { Funcionality}