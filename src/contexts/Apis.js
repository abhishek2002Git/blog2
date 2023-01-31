import React, { createContext, useContext, useState} from "react";

const APIContext = createContext();

const APIProvider = ({ children }) => {
  const host = "https://shukla-apis.glitch.me/";

  // fetching blog post data
  const [blogPostData, setBlogPostData] = useState([]);
  const getBlog = async (pid) => {
    setBlogPostData([]); // to show loader
    const api_url = `https://backendapis.vercel.app/api/blogs/blog/${pid}`;
    const response = await fetch(api_url);
    const data = await response.json();
    setBlogPostData(data);
  };

  // verifying user by sending verification link through email
  const [recipEmailState, setRecipEmailState] = useState("");
  const [otpToVerify, setOtpToVerify] = useState(1234);
  const sendOtpMail = async (recipientMail) => {
    let otpCode = Math.floor(1000 + Math.random() * 9000); // 4 digit random number
    const response = await fetch(`${host}/api/mail/verify/${recipientMail}`, {
      method: "GET",
      headers: {
        otpcode: otpCode,
      },
    });
    const json = await response.json();
    console.log(json);
    setOtpToVerify(otpCode);
    setRecipEmailState(recipientMail);
  };

  return (
    <APIContext.Provider
      value={{
        getBlog,
        blogPostData,
        sendOtpMail,
        otpToVerify,
        recipEmailState,
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
