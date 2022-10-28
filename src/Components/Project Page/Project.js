import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./project.css";
import data from "../../Data/project.json"

const Project = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <div className="mt-[40px]">
      <div className="intro-home h-[110vh] max-h-[38rem] text-center flex flex-col justify-center items-center">
        {/**********************************************/}

        <h1 className="heading-primary text-[#111111] font-[800] text-center tracking-[3px] mb-[30px]">
          {data[id - 1].projectTitle}
        </h1>
        <p className="text-primary text-[#333333] leading-[1.6] w-[90%] max-w-[800px]">
          This page contains the case study of {data[id - 1].projectTitle} Web
          App which includes the Project Overview, Tools Used and Live Links to
          the official product.
        </p>
        <a href={data[id - 1].link}>
          <button className="project-btn w-[240px] h-[55px] bg-[#E53935] rounded-[5px] text-[white] font-[700] mt-[40px]">
            LIVE LINK
          </button>
        </a>
      </div>

      <section className="flex flex-col items-center">
        <img
          className="max-w-[900px] w-[95%] mt-[4rem]"
          src={data[id - 1].image}
          alt="image"
        />
        <div className="overview max-w-[700px] w-[90%]">
          <h2 className="">Project Overview</h2>
          <p className="">{data[id - 1].p1}</p>
          <p>{data[id - 1].p2}</p>
          <p>Feel free to check out the Project by visiting the Live Link.</p>
        </div>
        <div className="overview max-w-[700px] w-[90%]">
          <h2>Tools Used</h2>
          <div className="skill-boxes">
            {data[id - 1].tools.map((item) => (
              <button
                key={data[1].tools.indexOf(item)}
                className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="overview max-w-[700px] w-[90%]">
          <h2>See Live</h2>
          <div className="mb-[5rem]">
            <a href={data[id - 1].link}>
              <button className="project-btn bg-[#E53539] text-white text-[15px] px-[3.3em] py-[1em] rounded-[5px] font-[700] tracking-[1px] mr-6 mb-6">
                LIVE LINK
              </button>
            </a>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="ml-1 project-btn bg-[rgba(245,245,245,.8)] text-black border-2 border-[#E53539] text-[14px] px-[3.3em] py-[1em] rounded-[5px] font-[700] tracking-[1px]"
            >
              GO BACK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
