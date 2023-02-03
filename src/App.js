import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home Page/Home";
import Blog from "./Components/Blog Page/Blog"
import Post from "./Components/Blog Post/Post"
import Navbar from "./Components/UI/Navbar"
import Footer from "./Components/UI/Footer";
import Sidebar2 from "./Components/UI/Sidebar2";
import Toast from "./Components/UI/Toast"
import Verify from "./Components/Verify Page/Verify"
import Modal from "./Components/UI/Modal";
import Contact from "./Components/Contact Page/Contact"
import TopButton from "./Components/UI/TopButton";
import Project from "./Components/Project Page/Project"
import Resume from "./Components/Resume/Resume";
import { AppState } from "./contexts/Context";
import Suyash from "./Components/Suyash";
import "./App.css";

function App() {
  const { sidebar, setShowModal } = AppState();

  // for showing subscription modal
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 10000);
  }, []);

  // styling when sidebar gets open
  document.body.style.backgroundColor = sidebar == true ? "black" : "";
  document.body.style.overflow = sidebar == true ? "hidden" : "";

  return (
    <div className={sidebar === true ? "" : ""}>
      <Router>
        {/* <Navbar /> */}
        <Toast />
        <Modal />
        <Sidebar2 />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Suyash />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<Post />} />
          <Route exact path="/verify" element={<Verify />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/project/:id" element={<Project />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
        <TopButton />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
