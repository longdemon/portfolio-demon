import React from "react";
import "./footer.css";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        DEMON
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/long.demon.0311/" target="_blank" rel="noopener noreferrer">
          <SiFacebook />
        </a>

        <a href="https://www.instagram.com/long.demon/" target="_blank" rel="noopener noreferrer">
          <SiInstagram />
        </a>

        <a href="https://www.linkedin.com/in/long-demon/" target="_blank" rel="noopener noreferrer">
          <SiLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Web was created depending on the tutorials of EGATOR</small> <br/>
        <a href="https://www.youtube.com/watch?v=G-Cr00UYokU" target="_blank" rel="noopener noreferrer">Tutorial Video</a>
      </div>
    </footer>
  );
};

export default Footer;
