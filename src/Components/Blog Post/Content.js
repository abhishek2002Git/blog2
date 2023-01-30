import React from "react";
import ContentHeader from "./ContentHeader";
import ShareMedias from "./ShareMedias";
import PostIntro from "./PostIntro";
import TOC from "./TOC";
import MainContent from "./MainContent";
import Author from "./Author";
import RelatedPosts from "./RelatedPosts";
import { APIState } from "../../contexts/Apis";
import "./styles/content.css";

const Content = () => {
  const { blogPostData } = APIState();

  return (
    <div className="content-section bg-white w-[57%] mt-[25px] flex flex-col items-center">
      <div>
        <ContentHeader />
      </div>

      <div className="post-title">
        <h1 className="post-title-text text-[30px] text-center font-[600] px-3 my-4">
          {blogPostData.title}
        </h1>
      </div>

      <div className="date-author flex justify-between border-y-[1px] border-black w-[88%] text-[12px] font-[600] py-2 text-center">
        <span className="date">{blogPostData.date}</span>
        <span className="hover:text-red-600">
          <a href="https://shuklaabhishek.com/contact">{blogPostData.author}</a>
        </span>
        <span className="duration">{blogPostData.duration} read</span>
      </div>

      <ShareMedias />

      <div className="thumbnail-section w-[88%]">
        <img
          className="thumbnail"
          src={blogPostData.thumbnail}
          alt="thumbnail"
        />
      </div>

      <PostIntro />
      <TOC />
      <MainContent />
      <ShareMedias />
      <Author />
      <RelatedPosts />
    </div>
  );
};

export default Content;
