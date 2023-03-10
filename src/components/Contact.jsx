import React from 'react';
import '../components/Css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className='Contact'>
      <div className='contact-us'>
        <h1>CONTACT</h1>

        <form className='contact-form'>
          <label htmlFor="Name"> <FontAwesomeIcon className='icon' icon={faUser} /> Your Name *</label>
          <input
            type="text"
            className='Name'
          />
          <label htmlFor="Email"> <FontAwesomeIcon className='icon' icon={faEnvelope} /> Your e-mail address *</label>
          <input 
            type="email"
            className='Email'
          />
          <label htmlFor="Number"> <FontAwesomeIcon className='icon' icon={faPhone} /> Your number *</label>
          <input 
            type="number"
            className='Number'
          />
          <label htmlFor="Message" className='Message'> <FontAwesomeIcon className='icon' icon={faMessage} /> Your message *</label>
          <textarea name="Message" ></textarea>
          <button> <FontAwesomeIcon className='icon' icon={faEnvelope} /> SEND</button>
        </form>
      </div>
    </section>
  )
}

export default Contact