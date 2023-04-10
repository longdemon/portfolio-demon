import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image/background_tmp.jpg";
import FLRBMS from "../../assets/image/FLRBMS.png";
import Halloween from "../../assets/image/Halloween.png";
import Game from "../../assets/image/2048.png";
import BookingApp from "../../assets/image/Booking_app.png";
import Lofi from "../../assets/image/lofi.png";
import LearningHub from "../../assets/image/learningHub.png";


const data = [
  {
    id: 6,
    image: LearningHub,
    title: "Learing hub",
    github: "private",
    demo: null,
  },
  {
    id: 1,
    image: FLRBMS,
    title: "FPTU Library Room Booking Manager System",
    github: "private",
    demo: null,
  },
  {
    id: 2,
    image: Halloween,
    title: "Halloween web",
    github: "https://github.com/longdemon/Halloween-web",
    demo: "https://longdemon.github.io/Halloween-web/",
  },
  {
    id: 3,
    image: Game,
    title: "2048 Game",
    github: "https://github.com/longdemon/2048",
    demo: "https://longdemon.github.io/2048/",
  },
  {
    id: 4,
    image: BookingApp,
    title: "Booking app",
    github: "https://github.com/longdemon/BOOKING_APP",
    demo: null,
  },
  {
    id: 5,
    image: Lofi,
    title: "Lofi app",
    github: "https://github.com/longdemon/lofi-clone",
    demo: "https://lofi-clone.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h5 className="text-japanese">私の最近の仕事</h5>
      <h2>
        <p>Portfolio</p>
        <p className="text-japanese">ポートフォリオ</p>
      </h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3 className="portfolio__title">{title}</h3>
              <div className="portfolio__item-cta">
                {github === "private" ? (
                  <p className="btn-disable">Private</p>
                ) : (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}

                {demo ? (
                  <a
                    href={demo}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
