import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "../../Components/Button/Button";
import { BannerContact } from "./BannserContact";
import { WhatsAppButton } from "../../Components/WhatsAppButton/WhatsAppButton";
import "./Contact.css"
function Contact() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', // Desplazamiento suave
        });
      }, []);
    const [state, handleSubmit] = useForm("xyzzoezd");
    if (state.succeeded) {
        return <div className="mb-48 mt-48 flex flex-col justify-center items-center"><p className="text-center text-2xl font-bold">¡Gracias por contactarnos! Te responderemos pronto.</p> <Button text="Volver a la tienda" url="/"/></div>;
    }
    return (
        <>
        <BannerContact title="Contáctanos" text="Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o sugerencia."/>
        <section className="mt-28 ml-6 mb-16">
            <WhatsAppButton />
            <h2 className="font-bold text-4xl mt-3">Envíanos un mensaje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <form className="" onSubmit={handleSubmit}>
                    <label className="" htmlFor="name">Nombre</label>
                    <input
                        className="border border-bg-gray-200 mt-2 rounded-md mb-4 p-2 block text-sm font-medium text-gray-700"
                        id="name"
                        type="text"
                      name="name"
                      placeholder="Ingresa tu nombre"
                      required
                      />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="border border-bg-gray-200 mb-4 mt-2 rounded-md p-2 block text-sm font-medium text-gray-700"
                    placeholder="Email"
                    id="email"
                    type="email" 
                    name="email"
                    />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    className="border border-bg-gray-200 mt-2 rounded-md p-2 block mb-4 text-sm font-medium text-gray-700"
                    id="message"
                    name="message"
                    />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    />
                  <button className="bg-black w-32 h-7 rounded-md text-white hover:bg-slate-800" type="submit" disabled={state.submitting}>
                    Enviar Mensaje
                  </button>
                </form>
                <div>
                    <h3 className="font-bold text-xl mb-3">Información de Contacto</h3>
                    <p className="mb-3">info@primeparts.com</p>
                    <p className="mb-3">(+506) 83745484</p>
                    <p className="font-bold text-xl">Horario de Atención</p>
                    <p>
                        Lunes a viernes de 9:00 AM - 10:00 PM <br />
                        Sábado de 9:00 AM - 8:00 PM <br />
                        Domingo de 9:00 AM - 5:00 PM
                    </p>
                </div>
            </div>
        </section>
        </>
    );
  }
  
  

export { Contact }