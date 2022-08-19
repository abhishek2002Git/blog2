import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../contexts/Context";
import Content from "./Content";
import Sidecontent from "./Sidecontent";
import "./post.css";

const Post = () => {
  const { setSidebar, scrollDir, sidebar } = AppState();
  let { id } = useParams();
  // const [blogID, setBlogID] = useState();
  const [blogData, setBlogData] = useState();

  const getBlog = async () => {
    const api_url = `https://inotebookbackend.herokuapp.com/api/message/blog/${id}`;
    const response = await fetch(api_url);
    const data = await response.json();
    setBlogData(data[0].content);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div
      className={
        sidebar === true ? "post-section side-bar-open bg-[#EDEDED]" : "post-section bg-[#EDEDED] flex justify-center "
      }
      style={{
        marginTop: scrollDir === "scrolling down" ? "0px" : "60px", width:'100vw'
      }}
      onClick={() => {
        setSidebar(false);
      }}
      // {/* closing sidebar on clicking */}
    >
      {/* <div dangerouslySetInnerHTML={{ __html: blogData }} /> */}
      <Content/>
      <Sidecontent/>
    </div>
  );
};

export default Post;
