import React, { useState} from "react";
import { Button } from "../../Components/Button/Button";
import "./Welcome.css"
function Welcome({title, text, button}) {
    return(
        <section className="bg-slate-100 pt-36 pb-24 w-full flex justify-center items-center flex-col mainBanner">
            <h1 className="text-center font-bold text-5xl titleAnimation">{title}</h1>
            <div className="lg:w-full w text-center mt-2">
            <span className="lg:text-xl text-md titleAnimation">{text}</span>
            </div>
            {button && (
                <div className="titleAnimation">
                    <Button text="Ver Productos" url="/products"/>
                </div>
            )}
           
        </section>
    )
}

export { Welcome }