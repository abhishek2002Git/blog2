import React from "react";
import { APIState } from "../contexts/Apis";
import "./loader.css";

const Loader = () => {
  const { blogPostData } = APIState();
  return (
    <div className="loader-section bg-white w-[57%] h-[100vh] mt-[25px] flex justify-center">
      <div className="loader mt-16"></div>
    </div>
  );
};

export default Loader;
