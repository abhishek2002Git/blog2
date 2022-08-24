import React from "react";
import {FaAngleDoubleRight} from "react-icons/fa"
import { APIState } from "../contexts/Apis";

const ContentHeader = () => {
  const {blogPostData, } = APIState();
  
  return (
    <div className="content-header bg-[#f5f5f5] flex mt-12 py-2 px-3 rounded-[15px] mx-2 text-center text-[12px]">
      <a href="#">Blog</a>
      <div className="mt-[4px] mx-1">
        <FaAngleDoubleRight />
      </div>
      <a href="#">{blogPostData.category}</a>
      <div className="mt-[4px] mx-1">
        <FaAngleDoubleRight />
      </div>
      <p>{blogPostData.title}</p>
    </div>
  );
};

export default ContentHeader;
