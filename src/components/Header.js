import React, { useEffect } from "react";
import "./Header.css";

import { TimelineLite, Power3 } from "gsap";

function Header() {
  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(".text-box", 1, { opacity: 0, y: 100, ease: Power3.easeInOut });
  });

  return (
    <header className="container">
      <div className="text-box">
        <h1>Hello, I am Luka Patrun and welcome to my portfolio website!</h1>
        <p>&#8595; Scroll to see &#8595;</p>
      </div>
    </header>
  );
}

export default Header;

// <a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>
