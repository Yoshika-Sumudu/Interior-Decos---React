import React from "react";
import "../styles/Footer.css";
import logo1 from "../images/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
        <div><img src={logo1} alt="Logo" className="footer-logo" /></div>
          {/* <h3>About us...</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            maxime voluptate labore voluptates, minus voluptatum temporibus
            commodi quas voluptatem voluptas at tempore laboriosam, doloribus
            reprehenderit, perferendis ipsum! Repellendus, perspiciatis officia?
          </p> */}
          <div>
            <button className="footer-button">Sign In</button>
            <button className="footer-button">Login</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <i className="fa fa-map-marker"></i> Location
            </li>
            <li>
              <i className="fa fa-phone"></i> Contact Number
            </li>
            <li>
              <i className="fa fa-envelope"></i> Email
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>


        </div>

        {/* <div className="footer-column">
          <button className="footer-button">Sign In</button>
          <button className="footer-button">Login</button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
