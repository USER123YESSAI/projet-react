import React from "react";
import logo_red from "../assets/logo_red.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <img className="footer-logo" src={logo_red} alt="logo kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
