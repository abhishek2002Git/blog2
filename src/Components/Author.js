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
          A Blogger, Author and a speaker! Harsh Agrawal is recognized as a
          leader in digital marketing and FinTech space. Fountainhead of
          ShoutMeLoud, and a Speaker at ASW, Hero Mindmine, Inorbit, IBM, India
          blockchain summit. Also, an award-winning blogger.
        </p>
      </div>
    </div>
  );
};

export default Author;
