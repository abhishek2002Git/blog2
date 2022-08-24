import React from "react";
import { APIState } from "../contexts/Apis";
import "./postintro.css";

const PostIntro = () => {
  const {blogPostData, } = APIState();
  return (
    <div className="w-[88%] leading-8 mt-5 text-black text-[15.3px]">
      <div dangerouslySetInnerHTML={{ __html: blogPostData.intro }} />
    </div>
  );
};

export default PostIntro;
