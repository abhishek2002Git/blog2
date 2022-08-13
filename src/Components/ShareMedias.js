import React from "react";
import {
    FaShareAlt,
    FaWhatsapp,
    FaTwitter,
    FaFacebook,
    FaMailBulk,
  } from "react-icons/fa";
  import "./sharemedias.css";

const ShareMedias = () => {
  return (
    <div className="share-section flex justify-between w-[88%] my-9">
      <div className="share-count flex items-center justify-between  h-[32px] w-[13%] pr-3 mr-3">
        <div className="share-icon text-[23px]">
          <FaShareAlt />
        </div>
        <div className="share-number flex flex-col items-center">
          <span className="text-[15px] font-[600]">35</span>
          <span className="text-[12px] text-[#0000008C] ml-3">Shares</span>
        </div>
      </div>

      <div className="share-medias flex justify-between bg-white w-[83%]">
        <span className="share-whatsapp h-[32px] bg-[#25D366] flex justify-center items-center">
          <div className="text-white">
            <FaWhatsapp />
          </div>
        </span>
        <span className="share-whatsapp h-[32px] bg-[#1DA1F2] flex justify-center items-center">
          <div className="text-white">
            <FaTwitter />
          </div>
        </span>
        <span className="share-whatsapp h-[32px] bg-[#4267B2] flex justify-center items-center">
          <div className="text-white">
            <FaFacebook />
          </div>
        </span>
        <span className="share-whatsapp h-[32px] bg-black flex justify-center items-center">
          <div className="text-white">
            <FaMailBulk />
          </div>
        </span>
      </div>
    </div>
  );
};

export default ShareMedias;
