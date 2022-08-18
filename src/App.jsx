import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [showNav, setShowNav] = useState(true);
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 200;

    if (bottom) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   function locationHashChanged( e ) {
  //     console.log( window.location.hash );
  //     console.log( e.oldURL, e.newURL );
  //      if ( window.location.hash === "#pageX" ) {
  //          pageX();
  //      }
  // }

  // window.onhashchange = locationHashChanged;

  return (
    <>
      <Header />
      {showNav && <Nav />}
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
