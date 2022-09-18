import React, { useState, forwardRef, useImperativeHandle } from "react";
import { AppState } from "../contexts/Context";
import "./toast.css";

const Toast = forwardRef((props, ref) => {
  const { showToast } = AppState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  useImperativeHandle(ref, () => ({
    show() {
      //   alert("hello");
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));
  return (
    <div
      className="snackbar"
      style={{ background: props.type === "success" ? "green" : "red" }}
      id={showToast ? "show" : "hide"}
    >
      <div className="symbol">
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Toast;
