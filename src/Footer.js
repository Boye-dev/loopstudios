import React from "react";
import Logo from "./images/logo.svg";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo-foot">
          <img src={Logo} alt="" className="" />
        </div>
        <div className="socials">
          <a className="social-links" href="">
            <img src={facebook} />
          </a>
          <a className="social-links" href="">
            <img className="" src={instagram} />
          </a>
          <a className="social-links" href="">
            <img className="" src={pinterest} />
          </a>
          <a className="social-links" href="">
            <img className="" src={twitter} />
          </a>
        </div>
        <div className="footer-links">
          <a href="" className="nav-footer">
            About
          </a>
          <a href="" className="nav-footer">
            Careers
          </a>
          <a href="" className="nav-footer">
            Events
          </a>
          <a href="" className="nav-footer">
            Products
          </a>
          <a href="" className="nav-footer">
            Support
          </a>
        </div>
        <div className="copyright">
          <p className="copyright-txt">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
