import React, { useEffect } from "react";
import "./BannerContact.css"
function BannerContact({title, text}) {
    return(
        <section className="bg-slate-100 mt-24 pb-24 pt-24 w-full flex justify-center items-center flex-col banner">
                <h1 className="text-center font-bold text-5xl">{title}</h1>
            <div className="lg:w-full w text-center mt-2">
            <span className="lg:text-xl text-md">{text}</span>
            </div>
            
           
        </section>
    )
}

export { BannerContact }