import React from "react";
import ContentHeader from "./ContentHeader";
import ShareMedias from "./ShareMedias";
import PostIntro from "./PostIntro";
import TOC from "./TOC";
import MainContent from "./MainContent";
import Author from "./Author";
import RelatedPosts from "./RelatedPosts";
import "./content.css";

const Content = () => {
  return (
    <div className="content-section bg-white w-[57%] mt-[25px] flex flex-col items-center">
      <ContentHeader />

      <div className="post-title">
        <h1 className="post-title-text text-[30px] text-center font-[600] px-3 my-4">
          How to Use Categories Properly in WordPress for SEO & Usability
        </h1>
      </div>

      <div className="date-author flex justify-between border-y-[1px] border-black w-[88%] text-[12px] font-[600] py-2 text-center">
        <span className="date">March 6, 2019</span>
        <span className="hover:text-red-600">
          <a href="#">Abhishek Shukla</a>
        </span>
        <span className="duration">3 minutes read</span>
      </div>

      <ShareMedias />

      <div className="thumbnail-section w-[88%]">
        <img className="thumbnail" src="https://www.shoutmeloud.com/wp-content/uploads/2009/02/Use-Categories-in-WordPress-for-SEO-1024x576.jpg" alt="thumbnail" />
      </div>

      <PostIntro/>
      <TOC/>
      <MainContent/>
      <ShareMedias />
      <Author/>
      <RelatedPosts/>
    </div>
  );
};

export default Content;
