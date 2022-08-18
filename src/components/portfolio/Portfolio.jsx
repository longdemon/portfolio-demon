import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image/portfolio1.jpg";
import IMG2 from "../../assets/image/portfolio2.jpg";
import IMG3 from "../../assets/image/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Title here",
    github: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Title here",
    github: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Title here",
    github: "https://github.com",
  },
  {
    id: 4,
    image: IMG1,
    title: "Title here",
    github: "https://github.com",
  },
  {
    id: 5,
    image: IMG1,
    title: "Title here",
    github: "https://github.com",
  },
  {
    id: 6,
    image: IMG1,
    title: "Title here",
    github: "https://github.com",
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
        {data.map(({ id, image, title, github }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
