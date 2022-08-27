import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext();

const APIProvider = ({ children }) => {
  // fetching blog post data
  const [blogPostData, setBlogPostData] = useState([]);
  const getBlog = async (pid) => {
    setBlogPostData([]); // to show loader
    const host = "https://inotebookbackend.herokuapp.com";
    const api_url = `${host}/api/blogs/blog/${pid}`;
    const response = await fetch(api_url);
    const data = await response.json();
    setBlogPostData(data);
  };

  return (
    <APIContext.Provider
      value={{
        getBlog,
        blogPostData,
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
