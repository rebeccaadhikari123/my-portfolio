import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'

const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  

  e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      <div className=" contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>rebicca2016@gmail.com</h5>
          <a href="mailto:rebicca2016@gmail.com" target=" _blank ">Send a mail</a>

        </article>

        <article className="contact__option">
          <FaFacebookMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Rebecca Adhikari</h5>
          <a href="https://m.me/rebecca.adhikari.96" target=" _blank ">Send a message</a>

        </article>

        <article className="contact__option">
          <RxLinkedinLogo className='contact__option-icon'/>
          <h4>linkedin</h4>
          <h5>Rebecca Adhikari</h5>
          <a href="https://www.linkedin.com/in/rebecca-adhikari-654879222" target=" _blank ">Send a message</a>

        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+9779848857327</h5>
          <a href="https://api.whatsapp.com/send?phone+9779848857327/" target=" _blank ">Send a message</a>

        </article>

      </div>
       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className="btn btn-primary">Send message</button>
       </form>

      </div>
    </section>
  )
}

export default Contact
