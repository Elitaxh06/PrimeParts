import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactConfirmation } from '../Contact/ContactConfirmation';
import "./FormAffiliates.css"
function FormAffiliates() {
  const [state, handleSubmit] = useForm("movjgdno");
  if (state.succeeded) {
      return <ContactConfirmation />;
  }
  return (
    <section className='flex flex-col justify-center items-center w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center form'>
            <label htmlFor="name" className='font-semibold'>Nombre Completo</label>
            <input
              id="name"
              type="text"
              name="name"
              className='border border-slate-300 rounded-md p-2'
              required
              />
            <ValidationError 
              prefix="Nombre" 
              field="name"
              errors={state.errors}
              />
            <label htmlFor="email" className='font-semibold mt-5'>Correo Electrónico</label>
            <input
              id="email"
              className='border border-slate-300 rounded-md p-2'
              type="email" 
              name="email"
              required
              />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />

            <label htmlFor="socialNetwork" className='font-semibold mt-5'>Sitio web o red social</label>
            <input 
              id='socialNetwork'
              type="text"
              placeholder='Ej: instagram o tiktok'
              name="socialNetwork"
              className='border border-slate-300 rounded-md p-2' 
              required
            />
            <ValidationError 
              prefix='SocialNetwork'
              field='socialNetwork'
              errors={state.errors}

            />

            <label htmlFor="promoCode" className='font-semibold mt-5'>Código Promocional Deseado</label>
            <input
              id="promoCode"
              className='border border-slate-300 rounded-md p-2'
              type="text"
              placeholder='Ej: TUCODIGO10'
              name="promoCode"
              required
              />
            <ValidationError 
              prefix="Código" 
              field="promoCode"
              errors={state.errors}
            />


            <label htmlFor="message" className='font-semibold mt-5'>¿Por qué quieres ser parte de nuestro programa de afiliados?</label>
            <textarea
              id="message"
              className='border border-slate-300 rounded-md p-2'
              name="message"
              placeholder='Cuéntanos sobre cómo planeas promocionar nuestros productos'
              required
              />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              />
            <div className='text-center mt-5 mb-5'>
                <button type="submit" className='bg-black w-full h-10 rounded-md text-white  hover:bg-slate-800 font-semibold' disabled={state.submitting}>
                  Enviar Solicitud
                </button>
            </div>
        </form>
    </section>
  );
}

export { FormAffiliates }