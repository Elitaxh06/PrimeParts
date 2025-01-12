import React from "react";
import "./CardValores.css"
function CardValores({title, text}) {
    return(
        <>
            <div>
                <div className="bg-white rounded-lg shadow-md p-4 mt-10 cardVal">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="mt-2">{text}</p>
                </div>
            </div>
        </>
    )
}

export { CardValores }