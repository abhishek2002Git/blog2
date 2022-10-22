import React, { useState } from "react";
import { AppState } from "../contexts/Context";
import "./footer.css";
import { APIState } from "../contexts/Apis";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const { setSidebar, sidebar, showToastFunction, setShowModal } = AppState();
  const { sendOtpMail } = APIState();
  const [subsEmailAddress, setSubsEmailAddress] = useState("");
  const changeSubsEmailAdd = (e) => {
    setSubsEmailAddress(e.target.value);
  };
  let navigate = useNavigate();
  let location = useLocation();
  const sendOTPonEmail = () => {
    const mailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (subsEmailAddress.match(mailRegex)) {
      sendOtpMail(subsEmailAddress);
      showToastFunction("success", "An email is sent to your email address");
      navigate("/verify");
      setShowModal(false);
      window.scrollTo(0, 0);
    } else {
      showToastFunction("warning", "Enter a valid email address");
    }
  };

  return (
    <div
      className={sidebar === true ? "side-bar-open" : ""}
      style={{ display: location.pathname == "/verify" ? "none" : "" }} // dont show footer on 'Verify' componenet
      onClick={() => {
        setSidebar(false);
      }}
    >
      <footer className="footer">
        <div className="news-letter">
          <h2 style={{ color: "#ffffff" }} className="subscribe-text">
            Subscribe to Blog via Email
          </h2>
          <p style={{ color: "#ABABAB" }} className="address-text">
            Enter your email address to subscribe to this blog and receive
            notifications of new posts by email.
          </p>
          <div className="subscribe-form">
            <input
              className="subscribe-input"
              type="text"
              placeholder="     Enter email address"
              value={subsEmailAddress}
              name="subsEmailAddress"
              onChange={changeSubsEmailAdd}
            />
            <input
              className="subscribe-btn"
              onClick={sendOTPonEmail}
              type="button"
              value="Subscribe"
            />
          </div>
        </div>

        <div className="socials">
          <h2 className="social-text">Follow Me</h2>
          <div className="social-boxes">
            <div
              onClick={() => {
                window.open("https://twitter.com/abishekashukla", "_blank");
              }}
              className="social-box"
            >
              <div className="social-icon">
                <FaTwitter />
              </div>
            </div>
            <div
              onClick={() => {
                window.open("https://github.com/abishekashukla", "_blank");
              }}
              className="social-box center-icon"
            >
              <div className="social-icon">
                <FaGithub />
              </div>
            </div>
            <div
              onClick={() => {
                window.open("https://linkedin.com/in/abishekashukla", "_blank");
              }}
              className="social-box"
            >
              <div className="social-icon">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="footer-link-section">
          <div className="information">
            <span>Information</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate Disclousure - ShoutMeLoud</li>
            </ul>
          </div>
          <div className="about">
            <span>About</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="navigate">
            <span>Navigate</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate Disclousure</li>
            </ul>
          </div>
          <div className="resources">
            <span>Resources</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate Disclousure</li>
            </ul>
          </div>
        </div> */}
      </footer>
      <div className="footer-below">
        Copyright © 2022 Abhishek Shukla | Created by Abhishek Shukla
      </div>
    </div>
  );
};

export default Footer;
