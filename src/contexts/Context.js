import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // to close and open sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // to detect click outside of sidebar and close it
  const [outsideClick, setOutsideClick] = useState(false);
  const closeSidebar = () => {
    setOutsideClick(true);
    console.log(outsideClick);
  };

  // detecting down/up scroll
  const [scrollDir, setScrollDir] = useState("scrolling up");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
      // console.log(scrollDir + " " + scrollY + " " + lastScrollY);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  // detect whether site is opened in mobile or laptop
  const [deviceMobile, setDeviceMobile] = useState(false);
  const mobileOrBrowser = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceMobile(true);
    }
  };
  useEffect(() => {
    mobileOrBrowser();
  }, []);

  // show toast
  const [showToast, setShowToast] = useState(false);
  const showToastFunction = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        showSidebar,
        outsideClick,
        closeSidebar,
        setSidebar,
        scrollDir,
        deviceMobile,
        showToast,
        showToastFunction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
