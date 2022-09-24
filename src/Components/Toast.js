import React from "react";
import { AppState } from "../contexts/Context";
import successMark from "../images/success.png";
import warningMark from "../images/warning.png";
import "./toast.css";

const Toast = () => {
  const { showToast } = AppState();
  return (
    <div
      id={showToast.show ? "show" : "hide"}
      style={{
        background: showToast.type === "success" ? "#dcfce7" : "#fee2e2",
        borderColor: showToast.type === "success" ? "#22c55e" : "#ef4444",
      }}
      className={`toast z-10 fixed top-[5%] left-[50%] flex max-w-[500px] w-[97vw] items-center px-3 py-1 mt-5 rounded-[13px] text-black border`}
    >
      <div
        className={`first:symbol bg-${
          showToast.type == "success" ? "green" : "red"
        }-500 h-[45px] w-[45px] rounded-[50%] flex justify-center items-center`}
      >
        <div className="bg-white h-[30px] w-[30px] rounded-[50%] flex justify-center items-center">
          <img
            className={`w-[${showToast.type === "success" ? "20px" : "30px"}]`}
            src={showToast.type === "success" ? successMark : warningMark}
            alt=""
          />
        </div>
      </div>
      <div className="message text-[20px] flex-[90%] ml-3">
        {showToast.message}
      </div>
    </div>
  );
};

export default Toast;
