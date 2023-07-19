import React from "react";

const Blog = () => {
  return (
    <div className="blog">
    <div
    className=" text-white text-3xl flex  flex-col justify-center items-center gap-4"
    id="textName"
  >
    <h1>Coming Soon</h1>
    <h4>This page will be updated soon. Stay tuned for more updates! </h4>
  </div>
  <div className="flex flex-wrap sm:flex-nowrap  w-[100%] sm:w-[80%]">
  <div className="sea">
      <div className="circle-wrapper">
        <div className="bubble"></div>
        <div className="submarine-wrapper">
          <div className="submarine-body">
            <div className="window"></div>
            <div className="engine"></div>
            <div className="light"></div>
          </div>
          <div className="helix"></div>
          <div className="hat">
            <div className="leds-wrapper">
              <div className="periscope"></div>
              <div className="leds"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swatch w-[50%] sm:w-[60%]">
     <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
    </div>
  );
};

export default Blog;
