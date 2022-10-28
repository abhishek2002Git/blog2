import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../contexts/Context";
import { APIState } from "../../contexts/Apis";
import emailNewsletterImage from "../../images/mailnewletter.png";
import "./CSS/modal.css"

const Modal = () => {
  let navigate = useNavigate();
  const { showModal, setShowModal, showToastFunction } = AppState();
  const { sendOtpMail } = APIState();
  const [email, setEmail] = useState("");
  const setEmailAdress = (e) => {
    setEmail(e.target.value);
  };
  const sendOTPonEmail = () => {
    const mailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email.match(mailRegex)) {
      sendOtpMail(email);
      showToastFunction("success", "An email is sent to your email address");
      navigate("/verify");
      setShowModal(false);
      window.scrollTo(0, 0);
    } else {
      showToastFunction("warning", "Enter a valid email address");
    }
  };
  return (
    <div
      id={showModal ? "show" : "hide"}
      className="subscription-modal bg-white z-[9] fixed shadow-2xl shadow-black rounded-[20px] flex items-center justify-between flex-col text-center"
    >
      <img className="h-[35%] mt-5" src={emailNewsletterImage} alt="" />
      <h1 className="subscribe-text text-[35px] font-[600] mt-3">SUBSCRIBE!</h1>
      <p className="w-[90%] text-gray-600 mb-2">
        Subscribe my newsletter delivered to your inbox and get notifications to
        stay update
      </p>
      <input
        className="bg-red-200 w-[85%] h-[40px] mb-3 rounded-[7px]"
        type="email"
        placeholder="     Enter your email"
        value={email}
        onChange={setEmailAdress}
      />
      <div className="flex justify-between w-[80%] mb-5">
        <button
          onClick={sendOTPonEmail}
          className="yes-button bg-red-500 text-white px-[1.5em] py-[0.5em] rounded-[20px] sm:text-[17px]"
        >
          YES, PLEASE
        </button>
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="yes-button font-[600]"
        >
          NO, THANKS
        </button>
      </div>
    </div>
  );
};

export default Modal;
