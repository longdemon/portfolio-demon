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
                    <small>6 months</small>
                  </article>

                  <article className="about__card">
                    <FiUser className="about__icon" />
                    <h5>Clients</h5>
                    <small>2</small>
                  </article>

                  <article className="about__card">
                    <BsFolderCheck className="about__icon" />
                    <h5>Projects</h5>
                    <small>5+ completed</small>
                  </article>
                </div>

                <p>
                I am a young programmer with 6 months of experience working in the IT industry. With a good logical thinking ability and curiosity about new technologies, I always try to learn and develop my skills.
                <br /><br />
In the projects I have worked on, I usually focus on optimizing performance, increasing security, and improving user experience. I have experience in programming desktop and web software, using languages ​​such as Java, JavaScript, HTML/CSS, and frameworks such as React, NodeJs, NestJS, NextJS, VueJS, Angular.
<br /><br />
In addition, I also have experience working in teams and using project management tools such as Git.
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
