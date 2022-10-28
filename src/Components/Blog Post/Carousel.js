import React, { useState} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AppState } from "../../contexts/Context";
import "./styles/carousel.css"

const Carousel = () => {
  const {} = AppState();

  const [slideNumber, setSlideNumber] = useState(1);

  const decreaseSlideNumber = () => {
    if (slideNumber == 1) {
      setSlideNumber(3);
    } else {
      setSlideNumber(slideNumber - 1);
    }
  };

  const increaseSlideNumber = () => {
    if (slideNumber == 3) {
      setSlideNumber(1);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div
      className="slider trending-section bg-white  mb-5 mt-[25px] pt-[1px] pb-[13px] flex items-center flex-col"
    >
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
        <div id="slide-2">
          <ul className="flex items-center flex-col mt-5 w-[100%]">
            <li className="w-[80%] border-black border-b-2">
              <h2 className="text-[15px] font-[600] my-3">
                22222 Adsense Account Approval Process 2022
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
        <div id="slide-3">
          <ul className="flex items-center flex-col mt-5 w-[100%]">
            <li className="w-[80%] border-black border-b-2">
              <h2 className="text-[15px] font-[600] my-3">
                333 Google Adsense Account Approval Process 2022
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

      <div className="mt-5 w-[60%] flex justify-between">
        <a
          href={`#slide-${slideNumber}`}
          onClick={decreaseSlideNumber}
          className="text-[25px]"
        >
          <FaArrowLeft />
        </a>
        <a
          href="#slide-1"
          className="h-[10px] w-[10px] rounded-full"
          onClick={() => {
            setSlideNumber(1);
          }}
          style={{ background: slideNumber == 1 ? "#000000" : "#bdbaba" }}
        ></a>
        <a
          href="#slide-2"
          className="h-[10px] w-[10px] rounded-full"
          onClick={() => {
            setSlideNumber(2);
          }}
          style={{ background: slideNumber == 2 ? "#000000" : "#bdbaba" }}
        ></a>
        <a
          href="#slide-3"
          className="h-[10px] w-[10px] rounded-full"
          onClick={() => {
            setSlideNumber(3);
          }}
          style={{ background: slideNumber == 3 ? "#000000" : "#bdbaba" }}
        ></a>
        <a
          href={`#slide-${slideNumber}`}
          className="text-[25px]"
          onClick={increaseSlideNumber}
        >
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Carousel;
