import React, { useState } from "react";
import "./about.css";
import AboutJapanese from "./About-japan";
import AboutEnglish from "./About-english";

const About = () => {
  const [isEng, setIsEng] = useState(true);

  return (
    <>
      {isEng ? (
        <AboutEnglish toggle={() => setIsEng(!isEng)} />
      ) : (
        <AboutJapanese toggle={() => setIsEng(!isEng)} />
      )}
    </>
  );
};

export default About;
