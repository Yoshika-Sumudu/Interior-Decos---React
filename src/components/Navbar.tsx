import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo1 from "../images/logo1.png";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY < 100;
    setNavBackground(!isTop);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={navBackground ? "nav-background" : ""}>
      <div className="navbar-container">
        <div className="logo"></div>
        <div className="navbar-left">
          <img src={logo1} alt="Logo" className="navbar-logo" />
        </div>

        <div className="navbar-center">
          <h1 className="navbar-title">UniSpace</h1>
        </div>

        <div className="navbar-menu">
          <ul>
            <li
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleClick("home")}
            >
              Home
            </li>
            <li
              className={activeLink === "about" ? "active" : ""}
              onClick={() => handleClick("about")}
            >
              About
            </li>
            <li
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => handleClick("contact")}
            >
              Contact
            </li>
            <li>
              {" "}
              <button className="login-button">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
