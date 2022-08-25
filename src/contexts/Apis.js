import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [blogPostData, setBlogPostData] = useState([]);
  const getBlog = async () => {
    const host = "https://inotebookbackend.herokuapp.com";
    const api_url = `${host}/api/blogs/blog/beauty-full`;
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
