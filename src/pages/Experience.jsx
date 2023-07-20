import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="experience__content leading-loose">
          <div className="experience__time  ">
            <span className="experience__rounder"></span>

            <span className="experience__line h-[90%] sm:h-[85%]"></span>

            <span className="experience__rounder "></span>
          </div>
          <div className="experience__data bd-grid ">
            <h3 className="experience__title text-white lie">
              Frontend Developer
            </h3>
            <span className="experience__company text-white">
              <div className="text-white ">
                <h3 className="text-sky-500 text-sm">
                  Freeshi Veggies | Tigoni, Nairobi
                </h3>
                <p className="text-white text-sm">May 2023 - Now </p>
              </div>
            </span>
            <h2 className="text-white text-md">
              {" "}
              ROLES, RESPONSIBILITIES AND ACHIEVEMENTS:
            </h2>
            <p className="text-white text-sm">
              {" "}
              <span id="content1">
                • Responsible for Designing and developing user interfaces for
                Fresh2Door's website app.
              </span>{" "}
              <span id="content1">
                {" "}
                • Working with backend developers to integrate frontend
                components with backend services.
              </span>{" "}
              <span id="content1">
                {" "}
                • Implementing complex user interactions and animations
              </span>{" "}
              <span id="content1">
                • Optimize frontend performance for a seamless user experience.
              </span>
            </p>
          </div>
        </div>

        <div>
          <div className="experience__content leading-loose">
            <div className="experience__time   ">
              <span className="experience__rounder"></span>

              <span className="experience__line h-[90%] sm:h-[85%]"></span>

              <span className="experience__rounder "></span>
            </div>
            <div className="experience__data bd-grid ">
              <h3 className="experience__title text-white lie">
                Management Accountant
              </h3>
              <span className="experience__company text-white">
                <div className="text-white ">
                  <h3 className="text-sky-500 text-sm">
                    Timberland Logisics | Kikuyu, Nairobi
                  </h3>
                  <p className="text-white text-sm">
                    January 2020 - October 2022{" "}
                  </p>
                </div>
              </span>
              <h2 className="text-white text-md">
                {" "}
                ROLES, RESPONSIBILITIES AND ACHIEVEMENTS:
              </h2>
              <p className="text-white text-sm">
                {" "}
                <span id="content1">
                  • Provided financial insights and analysis to support
                  decision-making processes across various departments.
                </span>{" "}
                <span id="content1">
                  {" "}
                  •Prepared monthly financial reports, including income
                  statements, balance sheets, and cash flow statements.
                </span>{" "}
                <span id="content1">
                  {" "}
                  •Collaborated with senior management to develop and monitor annual budgets and forecasts.
                </span>{" "}
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
