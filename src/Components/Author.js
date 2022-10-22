import React from "react";
import "./author.css";
import profilePic from "../images/profilePic2.jpg";

const Author = () => {
  return (
    <div className="author-section-post bg-black w-[100%] my-5 text-white flex p-[50px] leading-[1.8]">
      <img
        src={profilePic}
        alt="profilePic"
        className="h-[130px] w-[130px] rounded-[50%]"
      />
      <div className="author-box px-5">
        <h3 className="author-title text-[18px]">
          Authored By Abhishek Shukla
        </h3>
        <p className="author-bio text-[13px] mt-1">
        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. While building any product, I make sure whatever I'm building, it's going to solve problems and it's going to provide value no matter how small or large the product is.
          
        </p>
      </div>
    </div>
  );
};

export default Author;
