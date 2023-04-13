import React, { useRef }from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'
import emailjs from 'emailjs-com';

import './contact.css';

function Contacts(){
  const form = useRef();
  const emailKey = process.env.REACT_APP_EMIALJS_KEY;
  const emailTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE;
  const emailId = process.env.REACT_APP_EMAILJS_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(emailId, emailTemplate, form.current, emailKey);
    e.target.reset();
  };

  return <section id="contact">
      <h5 className="container_title">Get in Touch</h5>
      <h5 className="container_message" >Contact me</h5>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>ipho.77johero@gmail.com</h5>
            <a href="mailto:ipho.77johero@gmail.com" rel="noopener noreferrer" target="_blank" >Send a Email</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Josey Sekine</h5>
            <a href="https://m.me/jocelyne.garciaarmenta" rel="noopener noreferrer" target="_blank" >Send a Message</a>
          </article>
          <article className="contact_option">
            <RiWhatsappFill/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+523313460896" rel="noopener noreferrer" target="_blank" >Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required></input>
          <input type="email" name="email" placeholder='Your Email address' required></input>
          <textarea name="message" id="" placeholder="Your Message" cols="30" rows="7" required/>
          <button type="sumbit" className='neon_button'>Send message</button>
        </form>
      </div>
    </section>
}

export default Contacts;
