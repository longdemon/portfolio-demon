import React from "react";
import "./about.css";
import ME from "../../assets/image/demon.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import { Spring } from "react-spring";

const AboutJapanese = (props) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(_props) => (
        <section style={_props} id="about" className="about">
          <h5 className="text-japanese">知り合う</h5>
          <h2>
            <p className="text-japanese">私について</p>
          </h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About" />
              </div>
            </div>

            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5 className="text-japanese">経験</h5>
                  <small className="text-japanese">卒業したばかり</small>
                </article>

                <article className="about__card">
                  <FiUser className="about__icon" />
                  <h5 className="text-japanese">来客</h5>
                  <small className="text-japanese">未だ</small>
                </article>

                <article className="about__card">
                  <BsFolderCheck className="about__icon" />
                  <h5 className="text-japanese">プロジェクト</h5>
                  <small className="text-japanese">10+ 出来る</small>
                </article>
              </div>

              <p className="text-japanese">
                新卒者として、私は自分の熱意を使って仕事の経験の不足を補います。
                情報技術の実践的な知識を高めたいと考えています。
                できれば日本で働く機会が欲しいです。
              </p>
              <div className="about__content-btn">
                <a href="#contact" className="btn btn-primary text-japanese">
                  接続
                </a>
                <small
                  className="btn text-japanese"
                  onClick={() => props.toggle()}
                >
                  日本語
                </small>
              </div>
            </div>
          </div>
        </section>
      )}
    </Spring>
  );
};

export default AboutJapanese;
