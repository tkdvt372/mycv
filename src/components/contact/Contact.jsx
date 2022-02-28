import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {SiZalo} from "react-icons/si";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uqbd8qa', 'template_aqzpt7s', form.current, 'lkCiDC2_sx-AJMH1H')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>duongvantuan372@gmail.com</h5>
            <a href="mailto:duongvantuan372@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Tutorial</h5>
            <a href="https://www.facebook.com/dvt372/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <SiZalo className="contact__option-icon"/>
            <h4>Zalo</h4>
            <h5>0366974520</h5>
            <a href="https://zalo.me/84366974520" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="emial" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required rows="7"></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>  
      </div>
    </section>
  );
};

export default Contact;
