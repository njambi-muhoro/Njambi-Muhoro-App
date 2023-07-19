import React from "react";
import { CgProfile } from "react-icons/cg";
import Services from "../pages/Services";

const AboutMe = () => {
  return (
    <div className="">
      <div className="px-0 sm:px-20">
        <div className="flex justify-between   w-full">
          <h1 className="text-sky-500 text-2xl " id="textName">About Me.</h1>
          <p className="text-sky-500 p-2 text-2xl">
            <CgProfile />
          </p>
        </div>
        <div className="flex justify-between gap-20 flex-wrap md:w-[100%] sm:flex-nowrap  pt-6 ">
          <div className="w-[100%] md:w-[100%] sm:w-[60%] flex  flex-col gap-4">
            <h2 id="textDecor" className="text-white text-lg">
              Frontend Developer
            </h2>
            <h6 className="text-white text-sm leading-loose">
              Passionate frontend developer with experience in designing and
              developing user interfaces for web applications. Proficient in
              using React JS, HTML, CSS, and JavaScript. Experienced with APIs
              and have a strong understanding of frontend performance
              optimization. Committed to delivering high-quality code and
              creating delightful user experiences
            </h6>
          </div>

          <div className=" w-[100%] md:w-[100%] sm:w-[30%] text-white flex flex-col gap-4">
            <h2 id="textDecor" className="text-white text-lg w-[100%] sm:[100%]">
              Personal Information
            </h2>
            <div className="">
            <p className="text-sm">
              {" "}
              <span className="underline decoration-sky-500">Name</span>: {""}
              Lucy Njambi
            </p>
            <p className="text-sm ">
              {" "}
              <span className="underline decoration-sky-500">
                Residence
              </span>: {""}Nairobi, Kenya
            </p>
            <p className="text-sm">
              <span className="underline decoration-sky-500">Email</span>:{" "}
              <a href="mailto:muhoronjambi@gmail.com">muhoronjambi@gmail.com</a>
            </p>
            <p className="text-sm">
              {" "}
              <span className="underline decoration-sky-500">Job</span>: {""}
              searching
            </p>
            </div>
          </div>
        </div>
        <div>
        <div className="text-3xl text-white flex justify-center pt-6" id="textName">
        <h2 className="text-sky-500">SERVICES</h2>
      </div>
        </div>
        <div className="pb-6">
          <Services/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
