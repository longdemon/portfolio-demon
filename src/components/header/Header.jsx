import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/image/me.png";
import HeaserSocials from "./HeaserSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__container-name">
          <div>
            <h5>Hello I'm</h5>
            <h1>Vu Long</h1>
            <h5 className="text-light">Fullstack Developer</h5>
          </div>

          <div>
            <h5 className="text-japanese">こんにちは、私の名前は</h5>
            <h1 className="text-japanese">雨龍</h1>
            <h5 className="text-light text-japanese">フルスタック 開発者</h5>
          </div>
        </div>
        <CTA />
        <HeaserSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
