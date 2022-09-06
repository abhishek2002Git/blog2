import React from "react";
import { AppState } from "../contexts/Context";
import { APIState } from "../contexts/Apis";

const Verify = () => {
  const { scrollDir } = AppState();
  const { otpToVerify } = APIState();

  return (
    <div
      className="h-[100vh]"
      style={{
        marginTop: scrollDir === "scrolling down" ? "0px" : "75px",
      }}
    >
      <h1 className="text-black">Hello there</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        similique itaque cupiditate totam aspernatur, iste quos quae deserunt
        provident sint illo mollitia esse dicta corrupti ipsa accusantium a
        asperiores consequuntur saepe tenetur!
      </p>
      <h1>{otpToVerify}</h1>
    </div>
  );
};

export default Verify;
