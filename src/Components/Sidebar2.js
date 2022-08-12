import React, { useState } from "react";
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
            <li className="side-li">DARK</li>
            <li onClick={showSubItemAbout} className="side-li">
              ABOUT ME <i className="arrow down"></i>
            </li>
            <li
              style={{ display: subItemAbout ? "" : "none" }}
              className="side-li sub-item-about"
            >
              <i className="arrow right"></i>PORTFOLIO
            </li>
            <li
              style={{ display: subItemAbout ? "" : "none" }}
              className="side-li sub-item-about"
            >
              <i className="arrow right"></i>CONTACT
            </li>
            <li className="side-li">BLOG</li>
            <li className="side-li">REACTJS</li>
            <li className="side-li">CSS</li>
            <li className="side-li">JAVASCRIPT</li>
            <li className="side-li">BOOKMARKS</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
