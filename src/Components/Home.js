import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBookOpen,
} from "react-icons/fa";
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

      {/* ************************ About Me Section ************************* */}

      <section className="about-me-section-home flex flex-col justify-center items-center py-[75px] md:py-[100px] bg-[#FAFAFA]">
        <h1 className="about-me-title text-[#111111] font-[800] tracking-[3px]">
          ABOUT ME
        </h1>
        <div className="bg-[#E53935] w-[30px] h-[5px] my-[13px]"></div>
        <p className="text-[#555555] text-[16px] leading-[1.6] w-[92%] max-w-[49rem] font-[500] text-center md:text-[18px]">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>

        <div className="flex w-[100%] px-16 lg:flex-row flex-col items-center">
          <div className="know-me-section lg:w-[50%] w-[90vw] mt-14">
            <h2 className="text-[21px] md:text-[28px] font-[700] mb-[1rem] md:mb-[2rem]">
              Get to know me!
            </h2>
            <p className="text-[#666666] text-[16px] md:text-[17px] mb-[0.7rem] md:mb-[1rem] leading-[1.7] w-[95%]">
              I'm a <b>Frontend Web Developer</b> building the Front-end of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the <b>Projects</b>{" "}
              section.
            </p>
            <p className="text-[#666666] text-[16px] md:text-[17px] mb-[0.7rem] md:mb-[1rem] leading-[1.7] w-[95%]">
              I also like sharing content related to the stuff that I have
              learned over the years in <b>Web Development</b> so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my{" "}
              <a
                className="text-[#E53539]"
                target="_blank"
                href="https://www.linkedin.com/in/abishekashukla/"
              >
                <b>
                  <u>Linkedin</u>
                </b>
              </a>{" "}
              where I post useful content related to Web Development and
              Programming
            </p>
            <p className="text-[#666666] text-[16px] md:text-[17px] mb-[0.7rem] md:mb-[1rem] leading-[1.7] w-[95%]">
              I'm open to <b>Job</b> opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don't hesitate to <b>contact</b> me.
            </p>

            {/* <button className="project-btn w-[173px] h-[55px] bg-[#E53935] rounded-[5px] text-[white] font-[700] mt-[25px] text-[16px]"> */}
            <button className="project-btn w-[155px] md:w-[173px] h-[48px] md:h-[55px] bg-[#E53935] rounded-[5px] text-[white] font-[700] mt-[25px] text-[14px] md:text-[16px]">
              CONTACT
            </button>
          </div>
          <div className="skills-section lg:w-[50%] w-[90vw] mt-14 h-[300px] md:h-[470px]">
            <h2 className="text-[21px] md:text-[28px] font-[700] mb-[1rem] md:mb-[2rem]">
              My Skills
            </h2>
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
                ReactJs
              </button>
              <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
                Git
              </button>
              <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
                Github
              </button>
              <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
                Responsive Design
              </button>
              <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
                Redux
              </button>
              <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
                Redux Toolkit
              </button>
              <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
                Tailwind CSS
              </button>
              <button className="skill-box text-[14px] md:text-[16px] text-[#666666] bg-[#99999933]  font-[600]  rounded-[5px] py-[0.5em] px-[1.5em] mr-[1rem] mb-[1.5rem]">
                NodeJs Basics
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ************************ Projects Section *********************/}
      <section className="flex flex-col items-center py-[75px] md:py-[100px]">
        <h1 className="about-me-title text-[#111111] font-[800] tracking-[3px]">
          PROJECTS
        </h1>
        <div className="bg-[#E53935] w-[30px] h-[5px] my-[13px]"></div>
        <p className="text-[#555555] text-[16px] leading-[1.6] w-[92%] max-w-[49rem] font-[500] text-center md:text-[18px]">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>

        <div className="project flex md:flex-row flex-col pt-[65px] md:pt-[90px]">
          <div className="md:w-[55%] w-[100%] flex md:justify-end justify-center">
            <img
              className="w-[90%]"
              src="https://d33wubrfki0l68.cloudfront.net/5b377ce34a47fc89fc8d33869f2342518a604589/71ecb/assets/jpeg/yubter.jpeg"
              alt=""
            />
          </div>
          <div className="w-[100%] md:w-[45%] flex flex-col justify-center md:items-start items-center md:pl-10">
            <h2 className="text-[26px] font-[700] mb-[1rem]">Yubter</h2>
            <p className="text-[16px] md:text-[17px] text-[#666666] mb-[2rem] leading-[1.7] max-w-[30rem] px-3">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            <button className="project-btn text-[13px] md:text-[15px] text-[#ffffff] bg-[#E53539] tracking-[1px] font-[700] rounded-[5px] py-[1em] px-[3.3em]">CASE STUDY</button>
          </div>
        </div>
        
        <div className="project flex md:flex-row flex-col pt-[65px] md:pt-[90px]">
          <div className="md:w-[55%] w-[100%] flex md:justify-end justify-center">
            <img
              className="w-[90%]"
              src="https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg"
              alt=""
            />
          </div>
          <div className="w-[100%] md:w-[45%] flex flex-col justify-center md:items-start items-center md:pl-10">
            <h2 className="text-[26px] font-[700] mb-[1rem]">Boreal Coffee Clone</h2>
            <p className="text-[16px] md:text-[17px] text-[#666666] mb-[2rem] leading-[1.7] max-w-[30rem] px-3">
            I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.
            </p>
            <button className="project-btn text-[13px] md:text-[15px] text-[#ffffff] bg-[#E53539] tracking-[1px] font-[700] rounded-[5px] py-[1em] px-[3.3em]">CASE STUDY</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
