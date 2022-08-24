import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext();

const APIProvider = ({ children }) => {

  const [blogPostData, setBlogPostData] = useState([]);
  const getBlog = async () => {
    const api_url = `http://localhost:5000/api/blogs/blog/beauty-full`;
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
