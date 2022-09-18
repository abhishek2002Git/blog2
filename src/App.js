import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar2 from "./Components/Sidebar2";
import Carousel from "./Components/Carousel";
import Toast from "./Components/Toast";
import Verify from "./Components/Verify";
import { AppState } from "./contexts/Context";
import "./App.css";
import { useRef } from "react";

function App() {
  const { sidebar } = AppState();

  // styling when sidebar gets open
  document.body.style.backgroundColor = sidebar == true ? "black" : "";
  document.body.style.overflow = sidebar == true ? "hidden" : "";

  // snackbar related
  const snackbarRef = useRef(null);

  return (
    <div className={sidebar === true ? "" : ""}>
      <Router>
        <Navbar />
        <Toast ref={snackbarRef} message="email has been sent" type="success" />
        {/* <button
          className="showSnackbarBttn mt-20"
          onClick={() => {
            snackbarRef.current.show();
          }}
        >
          Show Snackbar
        </button> */}
        <Sidebar2 />
        <Routes>
          <Route exact path="/blog" element={<Home />} />
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="/blog/:id" element={<Post />} />
          <Route exact path="/verify" element={<Verify />} />
          <Route exact path="/carousel" element={<Carousel />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
