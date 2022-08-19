import React, { useState } from "react";
import {
  FaShareAlt,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaMailBulk,
} from "react-icons/fa";
import { AppState } from "../contexts/Context";
import "./sharemedias.css";

const ShareMedias = () => {
  const { deviceMobile } = AppState();
  const [postTitle, setPostTitle] = useState("Current Post Title");
  const [postLink, setPostLink] = useState(
    "https://blog203.vercel.app/blog/62deb732081b5ed9aca9c0a9"
  );

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
        <a
          href={`https://${
            deviceMobile == true ? "api" : "web"
          }.whatsapp.com/send?text=${postTitle}%0a${postLink}`}
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noreferrer"
        >
          <span className="share-whatsapp h-[32px] bg-[#25D366] flex justify-center items-center">
            <div className="text-white">
              <FaWhatsapp />
            </div>
          </span>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${postTitle}&url=${postLink}`}
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noreferrer"
        >
          <span className="share-whatsapp h-[32px] bg-[#1DA1F2] flex justify-center items-center">
            <div className="text-white">
              <FaTwitter />
            </div>
          </span>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noreferrer"
        >
          <span className="share-whatsapp h-[32px] bg-[#4267B2] flex justify-center items-center">
            <div className="text-white">
              <FaFacebook />
            </div>
          </span>
        </a>
        <a
          href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&to&su=${postTitle}&body=%27+${postLink}+%27&ui=2`}
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noreferrer"
        >
          <span className="share-whatsapp h-[32px] bg-black flex justify-center items-center">
            <div className="text-white">
              <FaMailBulk />
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ShareMedias;
