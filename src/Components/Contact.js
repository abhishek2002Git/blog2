import React from "react";
import { Link } from "react-router-dom";
import contactImage from "../images/contact-img.jpg";
import {
  FaAngleRight,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section className="author-section">
      <div className="left-side-author">
        <img className="author-img" src={contactImage} alt="" />
      </div>
      <div className="right-side-author">
        <span className="main-text-author">Abhishek Shukla</span>
        <div className="author-text-0">
          Frontend Developer | Computer Engineer
        </div>
        <div>
          <div className="author-texts">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cum
            ut laborum quaerat fugiat voluptatum incidunt nesciunt alias ullam
            inventore, soluta iusto molestiae tempore distinctio vero.
            Repudiandae molestiae error similique.
          </div>

          <div className="author-texts flex">
            <Link to="/">
              <p className="text-[#E53935] underline">Click here</p>
            </Link>
            <p className="ml-1">to visit my portfolio site.</p>
          </div>

          <div className="author-texts flex">
            <p className="">Mail me at</p>
            <a href="mailto:abhishe2002shukla007@gmail.com">
            <p className="text-[#E53935] underline ml-1">
                abhishe2002shukla007@gmail.com
              </p>
            </a>
          </div>
          
          <div className="author-texts flex">
            <p className="">Message me on Twitter:</p>
            <a href="https://twitter.com/messages/compose?recipient_id=abhishukla203">
            <p className="text-[#E53935] underline ml-1">
                @abhiShukla203
              </p>
            </a>
          </div>
        </div>
        <div className="social-links">
          <div className="social-link-author"><a href="https://twitter.com/abhiShukla203">Twitter</a></div>
          <div className="social-link-author"><a href="https://www.linkedin.com/in/abhi203">LinkedIn</a></div>
          <div className="social-link-author"><a href="https://www.instagram.com/theabhishekshukla2002">Instagram</a></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
