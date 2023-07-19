import React from "react";
import { TiDeviceLaptop } from "react-icons/ti";
import { BsEye } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";

const Services = () => {
  return (
    <div className="text-white flex gap-4 flex-wrap sm:flex-wrap">
      <div>
        <div className="text-sky-500 text-3xl">
          {" "}
          <TiDeviceLaptop />
        </div>
        <h2 className="underline decoration-sky-500 text-2xl" id="textName">
          Web Development
        </h2>
        <p className="leading-loose">
          As a frontend developer, my role encompasses creating visually
          appealing and interactive user interfaces for websites. This involves
          tasks like designing layouts, selecting color schemes, and developing
          responsive designs that work well on various devices. I bring these
          designs to life using programming languages such as HTML, CSS, and
          JavaScript, ensuring smooth user experiences. Additionally, I focus on
          optimizing website performance, conducting cross-browser compatibility
          testing, and collaborating with backend developers to seamlessly
          integrate frontend and backend functionalities.
        </p>
      </div>

      <div>
        <div className="text-sky-500 text-3xl">
          {" "}
          <BsEye />
        </div>
        <h2 className="underline decoration-sky-500 text-2xl" id="textName">
          Web Design
        </h2>
        <p className="leading-loose">
          My expertise as a frontend developer lies in emphasizing the visual
          aesthetics and user experience of websites. I collaborate closely with
          clients to grasp their brand identity and target audience,
          transforming their needs into visually captivating designs. This
          encompasses the creation of wireframes, careful selection of color
          schemes, typography, and imagery to craft a unified and captivating
          interface. By implementing these designs using HTML, CSS, and
          JavaScript, I prioritize compatibility across various browsers and
          devices to deliver a smooth and seamless user experience.
        </p>
      </div>

      <div>
        <div className="text-sky-500 text-3xl">
          {" "}
          <LuMonitorSmartphone />
        </div>
        <h2 className="underline decoration-sky-500 text-2xl" id="textName">
          Responsive Design
        </h2>
        <p className="leading-loose">
          As a frontend developer, my focus is on ensuring websites adapt and
          display correctly on different devices and screen sizes. Responsive
          design entails creating adaptable layouts and designs that dynamically
          adjust based on the user's device, whether it's a desktop, tablet, or
          mobile phone. To achieve this, I utilize techniques such as media
          queries, fluid grids, and responsive images to optimize the user
          experience across various resolutions. The ultimate goal of responsive
          design is to provide a seamless and optimized user experience,
          regardless of the device being used.
        </p>
      </div>
    </div>
  );
};

export default Services;
