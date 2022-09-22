import React from "react";
import {
  FaAngleRight,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="h-[100vh] contact-section bg-white  mb-5 mt-[75px] pt-[1px] pb-[40px] flex items-center flex-col">
      <h2 className="text-black text-[25px] text-center font-[600] mt-6">
        My Socials
      </h2>
      <div className="slides w-[100%]">
        <ul className="flex items-center flex-col mt-5 w-[100%]">
          <li
            onClick={() => {
              window.location = "https://twitter.com/abhiShukla203";
            }}
            className="w-[80%] border-black border-b-2 flex py-3 text-red-600 hover:cursor-pointer"
          >
            <div className="text-[23px]">
              <FaTwitter />
            </div>
            <h2 className="text-[17px] font-[600] ml-5 text-black">Twitter</h2>
          </li>

          <li
            onClick={() => {
              window.location =
                "https://www.instagram.com/theabhishekshukla2002";
            }}
            className="w-[80%] border-black border-b-2 flex py-3 text-red-600 hover:cursor-pointer"
          >
            <div className="text-[23px]">
              <FaInstagram />
            </div>
            <h2 className="text-[17px] font-[600] ml-5 text-black">
              Instagram
            </h2>
          </li>
          <li
            onClick={() => {
              window.location = "https://www.linkedin.com/in/abhi203";
            }}
            className="w-[80%] border-black border-b-2 flex py-3 text-red-600 hover:cursor-pointer"
          >
            <div className="text-[23px]">
              <FaLinkedinIn />
            </div>
            <h2 className="text-[17px] font-[600] ml-5 text-black">LinkedIn</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
