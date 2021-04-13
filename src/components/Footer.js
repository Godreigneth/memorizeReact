import React from "react";
import "./Footer.css";

const Footer = () => (
  <ul>
    <li>
      Developed by
      <a
        href="https://godreigneth.com"
        target="blank"
        rel="noopener noreferrer"
      >
        {" "}
        Godreigneth Levi Dibia
      </a>
    </li>
    <li>
      <a
        href="https://github.com/Godreigneth/memorizeReact"
        target="blank"
        rel="noopener noreferrer"
      >
        See Project on Github
        <i className="fab fa-github"></i>
      </a>
    </li>
  </ul>
);

export default Footer;
