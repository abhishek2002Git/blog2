import React, { useState } from "react";
import { useNavigate, Link  } from "react-router-dom";
import { AppState } from "../../contexts/Context";
import "./CSS/sidebar2.css";

const Sidebar2 = () => {
  let navigate = useNavigate();
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
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
                showSidebar();
              }}
              className="side-li"
            >
              HOME
            </li>
            <li onClick={showSubItemAbout} className="side-li">
              ABOUT ME <i className="arrow down"></i>
            </li>
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
                showSidebar();
              }}
              style={{ display: subItemAbout ? "" : "none" }}
              className="side-li sub-item-about"
            >
              <i className="arrow right"></i>
              <Link to="/">PORTFOLIO</Link>
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
                showSidebar();
              }}
              style={{ display: subItemAbout ? "" : "none" }}
              className="side-li sub-item-about"
            >
              <i className="arrow right"></i>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li
              onClick={() => {
                navigate("/blog");
                window.scrollTo(0, 0);
                showSidebar();
              }}
              className="side-li"
            >
              BLOG
            </li>
            <li
              onClick={() => {
                navigate("/");
                showSidebar();
              }}
              className="side-li"
            >
              <a href="#projectsection">PROJECTS</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
