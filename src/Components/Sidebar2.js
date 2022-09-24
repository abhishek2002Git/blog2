import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../contexts/Context";
import "./sidebar2.css";

const Sidebar2 = () => {
  const { sidebar, showSidebar } = AppState();
  const [subItemAbout, setSubItemAbout] = useState(false);
  const showSubItemAbout = () => {
    setSubItemAbout(!subItemAbout);
  };

  return (
    <>
      <div id="container">
        <div
          id="lgMenu"
          className={sidebar ? "enter" : ""}
          style={{ boxShadow: sidebar ? "5px 5px 15px grey" : "" }}
        >
          <span onClick={showSidebar} id="exit">
            &times;
          </span>
          <ul className="side-ul">
            <li onClick={showSubItemAbout} className="side-li">
              ABOUT ME <i className="arrow down"></i>
            </li>
            <li
              onClick={showSidebar}
              style={{ display: subItemAbout ? "" : "none" }}
              className="side-li sub-item-about"
            >
              <i className="arrow right"></i>
              <Link to="/">PORTFOLIO</Link>
            </li>
            <li
              onClick={showSidebar}
              style={{ display: subItemAbout ? "" : "none" }}
              className="side-li sub-item-about"
            >
              <i className="arrow right"></i>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li onClick={showSidebar} className="side-li">
              <Link to="/blog">BLOG</Link>
            </li>
            <li onClick={showSidebar} className="side-li">
              REACTJS
            </li>
            <li onClick={showSidebar} className="side-li">
              CSS
            </li>
            <li onClick={showSidebar} className="side-li">
              JAVASCRIPT
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
