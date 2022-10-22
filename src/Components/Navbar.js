import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
// import searchIcon from "./icons8-search.svg";
import { AppState } from "../contexts/Context";
import profilePic from "../images/profilepic3.png";

const Navbar = () => {
  const { showSidebar, scrollDir, sidebar } = AppState();
  let navigate = useNavigate();

  return (
    <nav
      style={{
        top: scrollDir == "scrolling down" ? "-75px" : "0px",
        boxShadow: scrollDir == "scrolling down" ? "" : "0px 0px 10px #dbd7d7",
        zIndex: "9",
      }}
      className={sidebar === true ? "navbar side-bar-open" : "navbar"}
    >
      <div className="container">
        <div
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="logo flex justify-center items-center cursor-pointer"
        >
          <img
            id="logoImg"
            className="h-[50px] rounded-[50%]"
            src={profilePic}
            alt="profile"
          />
          <span
            id="logoText"
            className="text-[16px] font-[700] tracking-[1px] ml-3"
          >
            ABHISHEK SHUKLA
          </span>
        </div>
        <ul className="nav-ul">
          <li
            className="nav-li"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            <a className="nav-a">HOME</a>
          </li>
          <li style={{ zIndex: "2" }} className="nav-li drop-li">
            <a className="nav-a">ABOUT ME</a>
            <ul className="drop-ul">
              <div
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo(0, 0);
                }}
              >
                CONTACT
              </div>
              <div
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                PORTFOLIO
              </div>
            </ul>
          </li>
          <li
            onClick={() => {
              navigate("/blog");
              window.scrollTo(0, 0);
            }}
            className="nav-li"
          >
            <a className="nav-a">BLOG</a>
          </li>
          <li
            className="nav-li"
            onClick={() => {
              navigate("/");
            }}
          >
            <a className="nav-a" href="#projectsection">
              PROJECTS
            </a>
          </li>

          {/* ***************Search Functionality ********** */}
          {/* <li className="nav-li">
            <a href="#">
              <img style={{ marginTop: "30px" }} src={searchIcon} alt="" />
            </a>
          </li> */}
        </ul>
        <div onClick={showSidebar} className="menu-icon">
          <div className="div-menu-icon"></div>
          <div className="div-menu-icon"></div>
          <div className="div-menu-icon"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
