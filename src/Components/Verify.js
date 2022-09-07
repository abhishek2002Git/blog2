import React, { useState } from "react";
import { AppState } from "../contexts/Context";
import { APIState } from "../contexts/Apis";

const Verify = () => {
  const { scrollDir } = AppState();
  const { otpToVerify } = APIState();

  // otp related
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const verifyOtp = () => {
    let EnteredOtp = otp.join("");
    if (EnteredOtp == otpToVerify) {
      console.log("verified successfully");
    } else {
      console.log("invalid otp");
    }
  };

  return (
    <div
      className="h-[100vh]"
      style={{
        marginTop: scrollDir === "scrolling down" ? "0px" : "75px",
      }}
    >
      <div className="h-screen bg-[#EDEDED] py-20 px-3">
        <div className="container mx-auto">
          <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
              <div className="bg-white w-[50vw] py-3 rounded text-center">
                <h1 className="text-2xl font-bold">OTP Verification</h1>
                <div className="flex flex-col mt-4">
                  <span>Enter the OTP you received at</span>
                  <span className="font-bold">+91 ******876</span>
                </div>

                <div
                  id="otp"
                  className="flex flex-row justify-center text-center px-2 mt-5"
                >
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                </div>

                <div
                  onClick={verifyOtp}
                  className="flex justify-center text-center mt-5"
                >
                  <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                    <span className="font-bold">Verify</span>
                    <i className="bx bx-caret-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
