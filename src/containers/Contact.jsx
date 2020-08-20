import React from 'react';
import '../assets/styles/components/Contact.scss';

const Contact = () => {

  return (

    <section className='main'>
      <h2 className='main__title'>Contáctanos</h2>
      <div className='input--doble'>
        <input type='text' className='input' placeholder='Nombre completo...' />
        <input type='text' className='input' placeholder='Correo electronico...' />
      </div>
      <input type='text' className='input--asunto' placeholder='Asunto...' />
      <input type='text' className='input--cuentanos' placeholder='Cuentanos...' />
      <button type='submit' className='button'>Enviar</button>

    </section>

  );
};

export default Contact;
