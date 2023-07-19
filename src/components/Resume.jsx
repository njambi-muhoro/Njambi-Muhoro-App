import React from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
import App from "../App.css";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";

const Resume = () => {
  return (
    <section
      id="resume"
      className="resume-section pt-page  min-h-screen "
    >
      <div className="px-0 sm:px-24 pt-2">
        <div className=" flex justify-between text-sky-500 font-bold text-3xl border-b border-dotted flex-wrap sm:flex-nowrap">
          <h1 id="textName">My Resume</h1>
          <div className="py-2">
            <BsFillJournalBookmarkFill />
          </div>
        </div>
        <div className="flex gap-8 flex-wrap sm:flex-nowrap pt-2">
          <div className="w-[100%] sm:w-[50%]">
            <h1  id="textName" className="text-white text-2xl pl-6">EXPERIENCE</h1>
            <Experience />
          </div>
          <div className="w-[100%] sm:w-[50%]">
          <h1  id="textName" className="text-white text-2xl pl-6">EDUCATION</h1>
            <Education/>
          </div>
        </div>
        <div className="pt-4 w-[100%] h-[500px]">
          <Skills/>
        </div>
      </div>
    </section>
  );
};

export default Resume;
