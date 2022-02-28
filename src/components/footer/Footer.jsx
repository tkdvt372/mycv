import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiTwitter,FiGithub} from 'react-icons/fi';
const Footer = () => {
  return (
    <footer>
    <a href="#" className="footer__logo">DVT</a> 
    
    <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.facebook.com/dvt372/"><FaFacebookF/></a>
      <a href="https://github.com/tkdvt372"><FiGithub/></a>
      <a href="https://twitter.com/dvt372"><FiTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>
      &copy;DVT Tutorials. All rights reserved.
      </small>
    </div>
    </footer>
  )
}

export default Footer