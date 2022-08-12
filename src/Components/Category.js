import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { AppState } from "../contexts/Context";
import "./category.css";

const Category = () => {
  return (
    <div className="slider trending-section bg-white  mb-5 mt-[25px] pt-[1px] pb-[40px] flex items-center flex-col">
      <h2 className="text-black text-[25px] text-center font-[600] mt-6">
        Categories
      </h2>
      <div className="slides w-[100%]">
        <ul className="flex items-center flex-col mt-5 w-[100%]">
          <li className="w-[80%] border-black border-b-2 flex justify-between hover:text-red-600 hover:cursor-pointer">
            <h2 className="text-[17px] font-[600] my-3">ReactJs</h2>
            <div className="text-[20px] flex items-center">
              <FaAngleRight />
            </div>
          </li>
          <li className="w-[80%] border-black border-b-2 flex justify-between hover:text-red-600 hover:cursor-pointer">
            <h2 className="text-[17px] font-[600] my-3">CSS</h2>
            <div className="text-[20px] flex items-center">
              <FaAngleRight />
            </div>
          </li>
          <li className="w-[80%] border-black border-b-2 flex justify-between hover:text-red-600 hover:cursor-pointer">
            <h2 className="text-[17px] font-[600] my-3">JavaScript</h2>
            <div className="text-[20px] flex items-center">
              <FaAngleRight />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
