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
                  <small className="text-japanese">6ヶ月</small>
                </article>

                <article className="about__card">
                  <FiUser className="about__icon" />
                  <h5 className="text-japanese">来客</h5>
                  <small className="text-japanese">２</small>
                </article>

                <article className="about__card">
                  <BsFolderCheck className="about__icon" />
                  <h5 className="text-japanese">プロジェクト</h5>
                  <small className="text-japanese">5+ 出来る</small>
                </article>
              </div>

              <p className="text-japanese">
              私はIT業界で働いている経験6ヶ月の若いプログラマーです。論理的思考力と新しい技術への好奇心があり、常に自分のスキルを学び、開発しようと努めています。
              <br /><br />
              私が取り組んできたプロジェクトでは、パフォーマンスの最適化、セキュリティの向上、ユーザーエクスペリエンスの改善に重点を置いてきました。Java、JavaScript、HTML/CSSなどの言語、React、NodeJs、NestJS、NextJS、VueJS、Angularなどのフレームワークを使用して、デスクトップおよびWebソフトウェアのプログラミングの経験があります。
              <br /><br />
              また、私はチームでの作業とGitなどのプロジェクト管理ツールの使用経験もあります。
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
