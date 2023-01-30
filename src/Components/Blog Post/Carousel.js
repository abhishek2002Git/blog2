import React from "react";
import "./styles/carousel.css";

const Carousel = () => {
  return (
    <div className="slider trending-section bg-white  mb-5 mt-[25px] pt-[1px] pb-[30px] flex items-center flex-col">
      <h2 className="text-black text-[25px] text-center font-[600] mt-6">
        Trending Posts
      </h2>
      <div className="slides">
        <div id="slide-1">
          <ul className="flex items-center flex-col mt-5 w-[100%]">
            <li className="w-[80%] border-black border-b-2">
              <h2 className="text-[15px] font-[600] my-3">
                111 Adsense Account Approval Process 2022
              </h2>
            </li>
            <li className="w-[80%] border-black border-b-2">
              <h2 className="text-[15px] font-[600] my-3">
                Google Adsense Account Approval Process 2022
              </h2>
            </li>
            <li className="w-[80%] border-black border-b-2">
              <h2 className="text-[15px] font-[600] my-3">
                How I Opened A Bank Account In The USA From{" "}
              </h2>
            </li>
            <li className="w-[80%] border-black border-b-2">
              <h2 className="text-[15px] font-[600] my-3">
                How I Opened A Bank Account In The USA From{" "}
              </h2>
            </li>
            <li className="w-[80%] border-black border-b-2">
              <h2 className="text-[15px] font-[600] my-3">
                Google Adsense Account Approval Process 2022
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
