import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const listSkillFE = [
    {
      name: 'HTML',
      level: 'Experienced'
    },
    {
      name: 'CSS',
      level: 'Experienced'
    },
    {
      name: 'Javascript',
      level: 'Experienced'
    },
    {
      name: 'React',
      level: 'Experienced'
    },
    {
      name: 'NextJS',
      level: 'Intermediate'
    },
    {
      name: 'VueJS',
      level: 'Intermediate'
    },
    {
      name: 'Angular',
      level: 'Basic'
    }
  ]
  const listkillBE = [
    {
      name: 'NodeJS',
      level: 'Intermediate'
    },
    {
      name: 'NestJS',
      level: 'Intermediate'
    },
    {
      name: 'Java',
      level: 'Basic'
    },
    {
      name: 'MySQL',
      level: 'Intermediate'
    },
    {
      name: 'PostgreSQL',
      level: 'Intermediate'
    },
  ]
  return (
    <section id="experience" className="experience">
      <h5>What Skills I Have</h5>
      <h5 className="text-japanese">私が持っているスキル</h5>
      <h2>
        <p>My Experience</p>
        <p className="text-japanese">私の経験</p>
      </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>
            <p>Frontend Development</p>
            <p className="text-japanese">フロントエンド開発</p>
          </h3>
          <div className="experience__content">
            {listSkillFE.map(skill => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>
            <p>Backend Development</p>
            <p className="text-japanese">バックエンド開発</p>
          </h3>
          <div className="experience__content">
            {listkillBE.map(skill => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
