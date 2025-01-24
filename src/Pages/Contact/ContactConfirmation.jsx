import React from "react";
import { Button } from "../../Components/Button/Button";

function ContactConfirmation() {
    return (
        <div className="mb-48 mt-48 flex flex-col justify-center items-center">
            <p className="text-center text-2xl font-bold">¡Gracias por contactarnos! Te responderemos pronto.</p> 
            <Button text="Ir al inicio" url="/"/>
        </div>
    )
}

export { ContactConfirmation}