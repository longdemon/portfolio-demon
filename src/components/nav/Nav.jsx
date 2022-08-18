import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiProjectorLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [actveNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={actveNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={actveNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={actveNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={actveNav === "#portfolio" ? "active" : ""}
      >
        <RiProjectorLine />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={actveNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
