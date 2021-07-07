import React from "react";
import "./style.scss";
import { ReactComponent as TopbarLogoWhite } from "../../assets/pixelmate-logo-white.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="footer__copyright">
        © All rights reserved 2013-2019. Pixelmate s.r.o.
      </span>
      <Link to="/" className="footer__logo">
        <TopbarLogoWhite />
      </Link>
      <a href="#" className="footer__link">
        Zásady ochrany osobních údajů
      </a>
    </footer>
  );
};

export default Footer;
