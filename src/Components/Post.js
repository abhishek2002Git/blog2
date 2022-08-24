import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../contexts/Context";
import { APIState } from "../contexts/Apis";
import Content from "./Content";
import Sidecontent from "./Sidecontent";
import "./post.css";

const Post = () => {
  const { setSidebar, scrollDir, sidebar } = AppState();
  const {} = APIState();
  let { id } = useParams();

  return (
    <div
      className={
        sidebar === true
          ? "post-section side-bar-open bg-[#EDEDED]"
          : "post-section bg-[#EDEDED] flex justify-center sm:pt-[15px]"
      }
      style={{
        marginTop: scrollDir === "scrolling down" ? "0px" : "60px",
      }}
      onClick={() => {
        setSidebar(false);
      }}
      // {/* closing sidebar on clicking */}
    >
      {/* <div dangerouslySetInnerHTML={{ __html: blogData }} /> */}
      <Content />
      <Sidecontent />
    </div>
  );
};

export default Post;
