import React from "react";
import { Link } from "react-router-dom";
import contactImage from "../../images/contactImg.jpg"
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
          I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product.
          </div>
          <div className="author-texts">
          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
          </div>

          <div className="author-texts flex">
            <Link to="/">
              <p className="text-[#E53935] underline">Click here</p>
            </Link>
            <p className="ml-1">to visit my portfolio site.</p>
          </div>

          <div className="author-texts flex">
            <p className="">Mail me at</p>
            <a href="mailto:dev@shuklaabhishek.com">
            <p className="text-[#E53935] underline ml-1">
                dev@shuklaabhishek.com
              </p>
            </a>
          </div>
          
          <div className="author-texts flex">
            <p className="">Message me on Twitter:</p>
            <a href="https://twitter.com/messages/compose?recipient_id=abishekashukla">
            <p className="text-[#E53935] underline ml-1">
                @abishekAshukla
              </p>
            </a>
          </div>
        </div>
        <div className="social-links">
          <div className="social-link-author"><a href="https://twitter.com/abishekashukla">Twitter</a></div>
          <div className="social-link-author"><a href="https://www.linkedin.com/in/abishekashukla">LinkedIn</a></div>
          <div className="social-link-author"><a href="https://www.instagram.com/abishekashukla">Instagram</a></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
