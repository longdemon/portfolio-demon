import React from "react";
import "./about.css";
import ME from "../../assets/image/demon.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import { Spring } from "react-spring";

const AboutEnglish = (props) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(_props) => (
          <section style={_props} id="about" className="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

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
                    <h5>Experience</h5>
                    <small>Just graduated</small>
                  </article>

                  <article className="about__card">
                    <FiUser className="about__icon" />
                    <h5>Clients</h5>
                    <small>Not yet</small>
                  </article>

                  <article className="about__card">
                    <BsFolderCheck className="about__icon" />
                    <h5>Projects</h5>
                    <small>10+ completed</small>
                  </article>
                </div>

                <p>
                  As a fresh graduate, I will use my enthusiasm to make up for
                  my lack of work experience. I am looking to enhance my
                  practical knowledge in information technology. I would like
                  the opportunity to work in Japan if possible.
                </p>
                <div className="about__content-btn">
                  <a href="#contact" className="btn btn-primary">
                    Let's Talk
                  </a>
                  <small className="btn" onClick={() => props.toggle()}>
                    English
                  </small>
                </div>
              </div>
            </div>
          </section>
        )}
      </Spring>
  );
};

export default AboutEnglish;
