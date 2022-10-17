import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaBookOpen} from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div className="mt-[40px]">
      <div className="intro-home h-[110vh] max-h-[38rem] text-center flex flex-col justify-center items-center">
        {/****************** Social Icons *************/}
        <div className="social-icons-home h-[45vh] bg-white self-start w-[60px] z-[2] absolute flex-col justify-around items-center hidden lg:flex">
          <div className="text-[30px]">
            <FaLinkedin />
          </div>
          <div className="text-[30px]">
            <FaTwitter />
          </div>
          <div className="text-[30px]">
            <FaInstagram />
          </div>
          <div className="text-[30px]">
            <FaGithub />
          </div>
          <div className="text-[30px]">
            <FaBookOpen />
          </div>
        </div>
        {/**********************************************/}

        <h1 className="heading-primary text-[#111111] font-[800] text-center tracking-[3px] mb-[30px]">
          HEY, I'M ABHISHEK SHUKLA
        </h1>
        <p className="text-primary text-[#333333] leading-[1.6] w-[90%] max-w-[800px]">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <button className="project-btn w-[240px] h-[55px] bg-[#E53935] rounded-[5px] text-[white] font-[700] mt-[40px]">
          PROJECTS
        </button>
      </div>
    </div>
  );
};

export default Home;
