import React, { useState } from "react";
import "./topbutton.css";

const TopButton = () => {
  const [show, setShow] = useState(false);

  //make button visible when user scrolls certain length
  const showTopBtn = () => {
    if (
      document.body.scrollTop > 1300 ||
      document.documentElement.scrollTop > 1300
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.onscroll = function () {
    showTopBtn();
  };

  // scroll to top
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      style={{ display: show ? "" : "none" }}
      id="myBtn"
      title="Go to top"
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default TopButton;
