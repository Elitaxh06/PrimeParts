import React from "react";
import { useState } from "react";
function ViewProduct() {
    const [open, setOpen] = useState(null)
    const [inputPassword, setInputPassword] = useState("")
    const myPassword = 'secret'

    const handlePassword = (e) => {
        e.preventDefault()
        if(inputPassword === myPassword){
          setOpen(true)
        }else{
          setOpen(false)
        }
    }
    const handleInputChange = (event) => {
        setInputPassword(event.target.value); // Actualiza el estado con el valor del input
      };
    return (
        <>
        <div>
        <form onSubmit={handlePassword}>
          <label htmlFor="">Ingreasa la contraseña:</label>
          <input
            type="password"
            id="passwordInput"
            value={inputPassword}
            onChange={handleInputChange}
            placeholder="Ingresa tu contraseña"
            />
          <button type="submit">Ingresar</button>
        </form>
       </div>
       <div>
                {open == true && (
                    <p>Bienvenido a la seccion del pedido</p>
                )}

                {open === false && (
                    <p>Contraseña incorrecta intenta de nuevo</p>
                )}
              </div>
    </>
    )
}


export { ViewProduct }