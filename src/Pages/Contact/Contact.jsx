import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { BannerContact } from "./BannserContact";
import { WhatsAppButton } from "../../Components/WhatsAppButton/WhatsAppButton";
import { CartSection } from"../../Components/CartSection/CartSection";
import { ContactConfirmation } from "./ContactConfirmation";
import "./Contact.css"
function Contact() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          // behavior: 'smooth', // Desplazamiento suave
        });
      }, []);
    const [state, handleSubmit] = useForm("mpwwvobj");
    if (state.succeeded) {
        return <ContactConfirmation />
    }
    return (
        <>
        <CartSection />
        <BannerContact title="Contáctanos" text="Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o sugerencia."/>
        <section className="mt-28 ml-6 mb-16">
            <WhatsAppButton />
            <h2 className="font-bold text-4xl mt-3">Envíanos un mensaje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <form className="" onSubmit={handleSubmit}>
                    <label className="" htmlFor="name">Nombre</label>
                    <input
                        className="in border border-bg-gray-200 mt-2 rounded-md mb-4 p-2 block text-sm font-medium text-gray-700"
                        id="name"
                        type="text"
                      name="name"
                      placeholder="Ingresa tu nombre"
                      required
                      />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                  <label htmlFor="email">
                    Correo Electronico
                  </label>
                  <input
                    className="in border border-bg-gray-200 mb-4 mt-2 rounded-md p-2 block text-sm font-medium text-gray-700"
                    placeholder="Ingresa tu correo electronico"
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
                    className="in border border-bg-gray-200 mt-2 rounded-md p-2 block mb-4 text-sm font-medium text-gray-700"
                    id="message"
                    placeholder="Escribe tu mensaje"
                    name="message"
                    />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    />
                  <button className="bg-black w-32 h-8 rounded-md text-white hover:bg-slate-800 btnSubmit" type="submit" disabled={state.submitting}>
                    Enviar Mensaje
                  </button>
                </form>
                <div>
                    <h3 className="font-bold text-xl mb-3">Información de Contacto</h3>
                   
                    <p className="flex items-center font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                      </svg>
                      Correo Electronico
                      </p>
                      <p className="mb-3 ml-6 text-sm text-slate-500">pizarroteb06@outlook.com</p>
                      {/* <p className="flex items-center font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg>
                        Teléfono</p>
                    <p className="mb-3 ml-6 text-sm text-slate-500">(+506) 83745484</p> */}

                    <p className="flex items-center font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                    </svg>
                      WhatsApp
                    </p>
                    <p href="https://wa.me/50683745484" target="_blank" className="mb-3 ml-6 text-sm text-slate-500">+506 87051600</p>
                    <p className="font-bold text-xl">Horario de Atención</p>
                    <p>
                        Lunes a viernes de 9:00 AM - 11:00 PM <br />
                        Sábado y Domingo de 9:00 AM - 9:00 PM <br />
                    </p>
                </div>
            </div>
        </section>
        </>
    );
  }
  
  

export { Contact }