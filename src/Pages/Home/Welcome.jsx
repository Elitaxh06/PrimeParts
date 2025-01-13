import React, { useState} from "react";
import { Button } from "../../Components/Button/Button";

function Welcome({title, text, button}) {
    return(
        <section className="bg-slate-100 mt-24 pb-24 pt-24 w-full flex justify-center items-center flex-col">
                <h1 className="text-center font-bold text-5xl">{title}</h1>
            <div className="lg:w-full w text-center mt-2">
            <span className="lg:text-xl text-md">{text}</span>
            </div>
            {button && (
                <Button text="Ver Productos" url="/products"/>
            )}
           
        </section>
    )
}

export { Welcome }