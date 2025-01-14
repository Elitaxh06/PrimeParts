import React, { useEffect } from "react";
import "./BannerContact.css"
function BannerContact({title, text}) {
    return(
        <section className="bg-slate-100 pb-24 pt-36 w-full flex justify-center items-center flex-col banner">
                <h1 className="text-center font-bold text-5xl mainTitle">{title}</h1>
            <div className="lg:w-full text-center mt-2">
            <span className="lg:text-xl text-md span">{text}</span>
            </div>
            
           
        </section>
    )
}

export { BannerContact }