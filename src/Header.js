import React, { useState } from "react";
import headerImage from "./images/desktop/image-hero.jpg";
import Logo from "./images/logo.svg";
import Ham from "./images/icon-hamburger.svg";
import Close from "./images/icon-close.svg";
import Body from "./Body";
import Footer from "./Footer";
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    return setIsClicked(!isClicked);
  };
  const handleClick2 = () => {
    return setIsClicked(false);
  };

  return (
    <>
      {isClicked && (
        <div className="nav-body">
          <div className="top-body">
            <div className="logo">
              <img src={Logo} alt="" className="" />
            </div>
            <div className="img-close">
              <img src={Close} onClick={handleClick2} className="close" />
            </div>
          </div>
          <div className="nav-links-top">
            <a href="" className="nav-items-top">
              About
            </a>
            <a href="" className="nav-items-top">
              Careers
            </a>
            <a href="" className="nav-items-top">
              Events
            </a>
            <a href="" className="nav-items-top">
              Products
            </a>
            <a href="" className="nav-items-top">
              Support
            </a>
          </div>
        </div>
      )}

      <div className="header">
        <img src={headerImage} alt="" className="img-head" />
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="" className="" />
          </div>
          <div className="nav-links">
            <a href="" className="nav-items">
              About
            </a>
            <a href="" className="nav-items">
              Careers
            </a>
            <a href="" className="nav-items">
              Events
            </a>
            <a href="" className="nav-items">
              Products
            </a>
            <a href="" className="nav-items">
              Support
            </a>
          </div>
          <div className="hamburger">
            <img onClick={handleClick} src={Ham} />
          </div>
        </div>
        <div className="head-text">
          <p className="immersive">Immersive experiences that deliver</p>
        </div>
      </div>
    </>
  );
};

export default Header;
