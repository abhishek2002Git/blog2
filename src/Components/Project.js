import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div className="mt-[40px]">
      <div className="intro-home h-[110vh] max-h-[38rem] text-center flex flex-col justify-center items-center">
        {/**********************************************/}

        <h1 className="heading-primary text-[#111111] font-[800] text-center tracking-[3px] mb-[30px]">
          YUBTER
        </h1>
        <p className="text-primary text-[#333333] leading-[1.6] w-[90%] max-w-[800px]">
          This page contains the case study of Yubter Web App which includes the
          Project Overview, Tools Used and Live Links to the official product.
        </p>
        <a href="#projectsection">
          <button className="project-btn w-[240px] h-[55px] bg-[#E53935] rounded-[5px] text-[white] font-[700] mt-[40px]">
            LIVE LINK
          </button>
        </a>
      </div>

      <section className="flex flex-col items-center">
        <img
          className="max-w-[900px] w-[95%] mt-[4rem]"
          src="https://d33wubrfki0l68.cloudfront.net/5b377ce34a47fc89fc8d33869f2342518a604589/71ecb/assets/jpeg/yubter.jpeg"
          alt="image"
        />
        <div className="overview max-w-[700px] w-[90%]">
          <h2 className="">Project Overview</h2>
          <p className="">
            Yubter is a platform for people to join the community of their
            favorite youtube channel. I had an idea and I thought it will be
            cool and helpful for Youtube users to have a place where they can
            chat with other like-minded people who follow the same Youtube
            channel as them and build a stronger community.
          </p>
          <p>
            I took inspiration from other similar platforms like Discord, Slack,
            etc. which are similar in terms of having a place for people of
            certain communities and providing them a space to communicate and
            meet like-minded people of the same community.
          </p>
          <p>Feel free to check out the Project by visiting the Live Link.</p>
        </div>
        <div className="overview max-w-[700px] w-[90%]">
          <h2>Tools Used</h2>
          <div className="skill-boxes">
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              HTML
            </button>
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              CSS
            </button>
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              JavaScript
            </button>
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              Tailwind CSS
            </button>
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              MongoDb
            </button>
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              ExpressJs
            </button>
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              ReactJs
            </button>
            <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
              NodeJs
            </button>
          </div>
        </div>
        <div className="overview max-w-[700px] w-[90%]">
            <h2>See Live</h2>
            <div className="mb-[5rem]">
                <button className="project-btn bg-[#E53539] text-white text-[15px] px-[3.3em] py-[1em] rounded-[5px] font-[700] tracking-[1px]">LIVE LINK</button>
                <button className="ml-3 project-btn bg-[#ffffff] text-black border-2 border-[#E53539] text-[14px] px-[3.3em] py-[1em] rounded-[5px] font-[700] tracking-[1px]">GO BACK</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
