import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { APIState } from "../../contexts/Apis";
import "./styles/toc.css";

const TOC = () => {
  const {blogPostData, } = APIState();
  const [maxH, setMaxH] = useState("0");
  const [transit, setTransit] = useState("max-height 1s ease-out");
  const showtabcon = () => {
    if (maxH === "0") {
      setMaxH("5000px"); // just give some big number
      setTransit("max-height 2s ease-in");
    } else {
      setMaxH("0");
      setTransit("max-height 0.5s ease-out");
    }
  };

  return (
    <div
      className="w-[88%] bg-[#F8FCFF] border rounded-[5px] p-8 pt-5 my-10"
      id="menu"
    >
      <div className="flex justify-between border-b border-dashed py-3">
        <h3 className="toc-header">Page Contents</h3>
        <div className="flex items-center cursor-pointer" onClick={showtabcon}>
          <GiHamburgerMenu />
        </div>
      </div>
      <ul
        id="list"
        className="mt-5 list-decimal leading-[2.3] text-[#444444]"
        style={{ maxHeight: maxH, transition: transit, overflow: "hidden" }} // these 3 properties are responsible for open/close animation
      >
        <div dangerouslySetInnerHTML={{ __html: blogPostData.tableofcontent }} />
      </ul>
    </div>
  );
};

export default TOC;
