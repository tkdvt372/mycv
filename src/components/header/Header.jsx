import React from "react";
import "./header.css";
import ME from '../../assets/avatar3.jpg';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Duong Van Tuan</h1>
        <h5 className="text-light">Dai Nam university</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
