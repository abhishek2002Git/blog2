import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./toc.css";

const TOC = () => {
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
        <h4 className="ul-title">
          Should you do the review for free or for paid? Is This Product Free Or
          Paid?
        </h4>
        <ul className="ul-item">
          <li className="">
            <a href="#">Should you do a paid review or not?</a>
          </li>
        </ul>
        <h4 className="ul-title">Here are 6 tips to write Paid Reviews:</h4>
        <ul className="ul-item">
          <li className="">
            <a href="#">1. Know product details</a>
          </li>
          <li className="">
            <a href="#">2. Confidence</a>
          </li>
          <li className="">
            <a href="#">3. Useful for your readers</a>
          </li>
          <li className="">
            <a href="#">4. Include your opinions</a>
          </li>
          <li className="">
            <a href="#">5. Involve Readers</a>
          </li>
          <li className="">
            <a href="#">6. Add Review summary using Schema plugin:</a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default TOC;
