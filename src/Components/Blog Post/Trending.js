import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./trending.css";

const Trending = () => {
  return (
    <div className=" trending-section bg-white  mb-5 mt-[25px] pt-[1px] pb-[13px] flex items-center flex-col">
      <h2 className="text-black text-[25px] text-center font-[600] mt-6">
        Trending Posts
      </h2>
        {/* <div className="first-ul"> */}
      <ul className="flex items-center flex-col mt-5 w-[100%]">
        <li className="w-[80%] border-black border-b-2">
          <h2 className="text-[15px] font-[600] my-3">
            Google Adsense Account Approval Process 2022
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
      {/* </div> */}
      <ul className="flex items-center flex-col mt-5 w-[100%]">
        <li className="w-[80%] border-black border-b-2">
          <h2 className="text-[15px] font-[600] my-3">
            facebook Adsense Account Approval Process 2022
          </h2>
        </li>
        <li className="w-[80%] border-black border-b-2">
          <h2 className="text-[15px] font-[600] my-3">
            hello Adsense Account Approval Process 2022
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
      <div className="mt-5 w-[60%] flex justify-between">
        <div className="text-[25px]">
          <FaArrowLeft />
        </div>
        <div className="h-[10px] w-[10px] bg-black rounded-full"></div>
        <div className="h-[10px] w-[10px] bg-[#bdbaba] rounded-full"></div>
        <div className="h-[10px] w-[10px] bg-[#bdbaba] rounded-full"></div>
        <div className="text-[25px]">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Trending;
