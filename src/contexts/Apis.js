import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext();

const APIProvider = ({ children }) => {
  const host = "https://inotebookbackend.herokuapp.com";

  // fetching blog post data
  const [blogPostData, setBlogPostData] = useState([]);
  const getBlog = async (pid) => {
    setBlogPostData([]); // to show loader
    const api_url = `${host}/api/blogs/blog/${pid}`;
    const response = await fetch(api_url);
    const data = await response.json();
    setBlogPostData(data);
  };

  // verifying user by sending verification link through email
  const [otpToVerify, setOtpToVerify] = useState(123456);
  const sendOtpMail = async (recipientMail) => {
    let otpCode = Math.floor(100000 + Math.random() * 900000); // 6 digit random number
    const response = await fetch(`${host}/api/mail/verify/${recipientMail}`, {
      method: "GET",
      headers: {
        otpcode: otpCode,
      },
    });
    const json = await response.json();
    console.log(json);
    setOtpToVerify(otpCode);
  };

  return (
    <APIContext.Provider
      value={{
        getBlog,
        blogPostData,
        sendOtpMail,
        otpToVerify,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const APIState = () => {
  return useContext(APIContext);
};

export default APIProvider;
