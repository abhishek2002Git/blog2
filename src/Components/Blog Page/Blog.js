import React from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";

const Blog = () => {
  let navigate = useNavigate();
  return (
    <div className="parent-div my-24">
      <div className="all-post  flex flex-wrap justify-center ">
        <div
          className="single-post mt-7 text-center w-[400px] flex flex-col items-center"
          onClick={() => {
            navigate("/blog/earn-money-from-blog");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="https://www.shoutmeloud.com/wp-content/uploads/2020/12/Earn-Money-Blogging-431x230.jpg"
            alt=""
            className="w-[370px]"
          />
          <p className="mt-[10px] text-[20px] font-[600] w-[85%]">
            How To Make Money Blogging (The Practical Guide for 2022)
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/blog/testing2");
            window.scrollTo(0, 0);
          }}
          className="single-post mt-7 text-center w-[400px] flex flex-col items-center"
        >
          <img
            src="https://www.shoutmeloud.com/wp-content/uploads/2009/06/Block-IP-Address-using-htaccess-1024x576.jpg"
            alt=""
            className="w-[370px]"
          />
          <p className="mt-[10px] text-[20px] font-[600] w-[85%]">
            this is testing 2 lorem, ipsum dolor
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/blog/animated-sparkes-in-react");
            window.scrollTo(0, 0);
          }}
          className="single-post mt-7 text-center w-[400px] flex flex-col items-center"
        >
          <img
            src="https://www.joshwcomeau.com/images/og-animated-sparkles-in-react.png"
            alt=""
            className="w-[370px]"
          />
          <p className="mt-[10px] text-[20px] font-[600] w-[85%]">
            Animated Sparkles in React
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/blog/embracing-modern-image-formats");
            window.scrollTo(0, 0);
          }}
          className="single-post mt-7 text-center w-[400px] flex flex-col items-center"
        >
          <img
            src="https://res.cloudinary.com/dw6ehse4v/image/upload/v1675177826/embracing_g9q2wk.jpg"
            alt=""
            className="w-[370px]"
          />
          <p className="mt-[10px] text-[20px] font-[600] w-[85%]">
          Embracing modern image formats
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
