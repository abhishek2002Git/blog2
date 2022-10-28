import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../contexts/Context";
import { APIState } from "../../contexts/Apis";
import Loader from "../UI/Loader";
import otpSymbol from "../../images/sendotp.png";
import verifySucessful from "../../images/emailVerificationSuccess.png";


const Verify = () => {
  const { scrollDir, deviceMobile, showToastFunction } = AppState();
  const { otpToVerify, recipEmailState, sendOtpMail } = APIState();
  let navigate = useNavigate();

  // otp related
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    if (element.value.length > 1) {
      element.value = element.value.slice(0, 1);
    }
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const [dispWhichComp, setDispWhichComp] = useState("verify");
  // above state describes which component to display out of verify otp, loader, success message

  // useEffect(() => {
  //   if (otpToVerify == 1234) {
  //     navigate("/");
  //   }
  // }, []);

  const verifyOtp = () => {
    let EnteredOtp = otp.join("");
    if (EnteredOtp == otpToVerify) {
      window.scrollTo(0, 0);
      setDispWhichComp("loader");
      setTimeout(() => {
        setDispWhichComp("success");
      }, 2000);
    } else {
      showToastFunction("warning", "You have entered an invalid OTP");
    }
  };

  return (
    <div
      className="h-[100vh]"
      style={{
        marginTop: scrollDir === "scrolling down" ? "0px" : "100px",
      }}
    >
      {/* verify otp component */}
      <div
        style={{ display: dispWhichComp === "verify" ? "flex" : "none" }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-[35px] tracking-[0.01em]">verification</h2>
        <img className="w-[140px] mt-8 ml-6" src={otpSymbol} alt="" />
        <p className="text-[23px] tracking-[0.01em] mt-5 px-3">
          Enter the verification code we just sent you on your email address.
        </p>
        <div
          id="otp"
          className="flex flex-row justify-center text-center px-2 mt-5"
        >
          {otp.map((data, index) => {
            return (
              <input
                className="m-2 h-[40px] w-[40px] text-center form-control border-b-4 border-b-[#E53935] text-[30px] outline-[#ffffff] focus:border-b-[12px] bg-transparent"
                type={deviceMobile ? "number" : "text"}
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

        <p
          className="text-[#E53935] font-[600] mt-1 select-none"
          onClick={() => {
            setOtp(new Array(4).fill(""));
          }}
        >
          Clear
        </p>

        <div className="flex mt-5">
          <p className="text-[#7c7b7b]">If you didn't recieve a code!</p>
          <p
            onClick={() => {
              sendOtpMail(recipEmailState);
              showToastFunction(
                "success",
                "An email is sent to your email address"
              );
            }}
            className="text-[#E53935] font-[600] ml-1 select-none"
          >
            Resend
          </p>
        </div>

        <button
          onClick={verifyOtp}
          className="text-white bg-[#E53935] mt-5 px-7 py-1 rounded-[15px]"
        >
          Verify
        </button>
      </div>

      {/* verifying loader component*/}
      <div
        style={{ display: dispWhichComp === "loader" ? "" : "none" }}
        className="flex flex-col items-center text-center"
      >
        <Loader />
      </div>

      {/* Succesfull message component */}
      <div
        style={{ display: dispWhichComp === "success" ? "flex" : "none" }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-[35px] tracking-[0.01em]">Congratulations!</h2>
        <img className="w-[140px] mt-8" src={verifySucessful} alt="" />
        <p className="text-[23px] tracking-[0.01em] mt-5 px-3">
          You have successfully subscribed to my NewsLetter.
        </p>
        <button
          onClick={() => {
            window.history.back();
          }}
          className="text-white bg-[#E53935] mt-5 px-7 py-1 rounded-[15px]"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Verify;
