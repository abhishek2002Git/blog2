import React from "react";
import { AppState } from "../contexts/Context";
import "./modal.css";

const Modal = () => {
  const { showModal, setShowModal } = AppState();
  return (
    <div
      id={showModal ? "show" : "hide"}
      className="subscription-modal w-[300px] h-[300px] bg-purple-500 z-10 fixed"
    ></div>
  );
};

export default Modal;
