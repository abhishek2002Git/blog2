import React from "react";
import { APIState } from "../contexts/Apis";
import "./maincontent.css";

const MainContent = () => {
  const { blogPostData } = APIState();
  return (
    <div className="w-[88%] text-[#111111] text-[15.3px] leading-8">
      <div dangerouslySetInnerHTML={{ __html: blogPostData.maincontent }} />
    </div>
  );
};

export default MainContent;
