import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import searchIcon from "./icons8-search.svg";
import { AppState } from "../contexts/Context";
import logo from "../images/logo.png";

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
        <div className="logo">
          <img
            id="logoImg"
            src={logo}
            alt="image"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-a" href="#">
              HOME
            </a>
          </li>
          <li style={{ zIndex: "2" }} className="nav-li drop-li">
            <a className="nav-a" href="#">
              ABOUT ME
            </a>
            <ul className="drop-ul">
              <div
                onClick={() => {
                  navigate("/contact");
                }}
              >
                CONTACT
              </div>
              <div
                onClick={() => {
                  navigate("/");
                }}
              >
                PORTFOLIO
              </div>
            </ul>
          </li>
          <li
            onClick={() => {
              navigate("/blog");
            }}
            className="nav-li"
          >
            <a className="nav-a">BLOG</a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="#">
              PROJECTS
            </a>
          </li>
      
          <li className="nav-li">
            <a href="#">
              <img style={{ marginTop: "30px" }} src={searchIcon} alt="" />
            </a>
          </li>
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
