import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/relatedposts.css";

const RelatedPosts = () => {
  let navigate = useNavigate();
  return (
    <div className="related-posts-section w-[100%] my-7">
      <h3 className="relates-post-title text-[25px] text-center font-[600]">
        Related Posts
      </h3>
      <div className="related-posts">
        <div className="post-box-1 flex justify-around">
          <div
            onClick={() => {
              navigate("/blog/earn-money-from-blog");
              window.scrollTo(0, 0);
            }}
            className="post"
          >
            <img
              src="https://www.shoutmeloud.com/wp-content/uploads/2020/12/Earn-Money-Blogging-431x230.jpg"
              alt=""
              className="post-img"
            />
            <p className="post-title">
              How To Make Money Blogging (The Practical Guide for 2022)
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/blog/testing2");
              window.scrollTo(0, 0);
            }}
            className="post"
          >
            <img
              src="https://www.shoutmeloud.com/wp-content/uploads/2009/06/Block-IP-Address-using-htaccess-1024x576.jpg"
              alt=""
              className="post-img"
            />
            <p className="post-title">this is testing 2 lorem, ipsum dolor</p>
          </div>
        </div>
        <div className="post-box-1 flex justify-around">
          <div
            onClick={() => {
              navigate("/blog/animated-sparkes-in-react");
              window.scrollTo(0, 0);
            }}
            className="post"
          >
            <img
              src="https://www.joshwcomeau.com/images/og-animated-sparkles-in-react.png"
              alt=""
              className="post-img"
            />
            <p className="post-title">Animated Sparkles in React</p>
          </div>
          <div
            onClick={() => {
              navigate("/blog/embracing-modern-image-formats");
              window.scrollTo(0, 0);
            }}
            className="post"
          >
            <img
              src="https://res.cloudinary.com/dw6ehse4v/image/upload/v1675177826/embracing_g9q2wk.jpg"
              alt=""
              className="post-img"
            />
            <p className="post-title">Embracing modern image formats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
