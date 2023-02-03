import React from "react";
import heroVideo from "./../images/LoopVideo.mp4";

const Suyash = () => {
  return (
    <div>
      <div className="video-section">
        <video
          className=""
          width={"100%"}
          controls
          loop
          src={heroVideo}
        ></video>
        <div className="overlay absolute flex flex-col justify-center items-center z-[1] bottom-[70px] px-[320px] text-center">
          <div className="text-[#ffffff] bg-[#555454] p-[10px] text-[16px] font-[600] tracking-widest">
            EDUCATE . ENABLE . EMPOWER
          </div>
          <h1 className="text-white text-[56px]">
            Unacademy is India’s largest online learning app
          </h1>
        </div>
      </div>

      <div className="mission flex my-10">
        <div className="left w-[50%] bg-white flex flex-col justify-center items-center">
          <div className="flex">
            <div>
              <h1 className="text-[48px] text-green-500">50M+</h1>
              <h2 className="text-[20px]">Active Learners</h2>
            </div>
            <div>
              <h1 className="text-[48px] text-blue-500">50M+</h1>
              <h2 className="text-[20px]">Active Learners</h2>
            </div>
          </div>
          <div className="flex">
            <div>
              <h1 className="text-[48px] text-yellow-500">50M+</h1>
              <h2 className="text-[20px]">Active Learners</h2>
            </div>
            <div>
              <h1 className="text-[48px] text-red-500">50M+</h1>
              <h2 className="text-[20px]">Active Learners</h2>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-red-500">
          <img
            className="w-[560px]"
            src="https://static.uacdn.net/production/_next/static/images/about/device_mashup.png?q=75&w=640"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Suyash;
