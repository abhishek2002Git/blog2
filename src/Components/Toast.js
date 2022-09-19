import React from "react";
import { AppState } from "../contexts/Context";
import successMark from "../images/success.png";
import "./toast.css";

const Toast = () => {
  const { showToast } = AppState();
  return (
    <div id={showToast.show ? "show" : "hide"} className="toast z-10 fixed top-[5%] left-[50%] flex bg-green-100 min-w-[300px] items-center px-3 py-1 mt-5 rounded-[13px] text-black">
      <div className="symbol bg-green-500 h-[45px] w-[45px] rounded-[50%] flex justify-center items-center">
        <div className="bg-white h-[30px] w-[30px] rounded-[50%] flex justify-center items-center">
          <img className="w-[20px]" src={successMark} alt="" />
        </div>
      </div>
      <div className="message text-[20px] flex-[90%] ml-3">
        {showToast.message}
      </div>
    </div>
  );
};

export default Toast;
