// import React from "react";
// import App from "../App.css";

// const Skills = () => {
//   return (
//     <div className="">
//       <div className=" text-white leading-loose">
//         <h1 className=" text-yellow-400 text-2xl italy underline" id="textName">
//           Skills & Experience
//         </h1>
// {/* <span> Skills & Experience */}
//         <p>
//           <h4 className="italic text-lg">
//             {" "}
//             Expert in front-end development including technologies like
//           </h4>
//           <span className="border border-yellow-400 flex flex-wrap sm:flex-nowrap">
//             <span className="tech-tag">HTML5</span>,
//             <span className="tech-tag">CSS3</span>,
//             <span className="tech-tag">JavaScript</span>,
//             <span className="tech-tag">React</span>,
//             <span className="tech-tag">TypeScript</span>,
//             <span className="tech-tag">Bootstrap</span>,
//             <span className="tech-tag">Tailwind</span>,
//             <span className="tech-tag">Git</span>, etc.
//           </span>
//         </p>
//         <div className=""></div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";

function Skills() {
  return (
  
    <div className="letter-image ">
         <h1 className=" text-yellow-400 text-2xl italy underline" id="textName">
          Skills & Experience
        </h1>
        <h4 className="italic text-lg text-white">
             {" "}
             Expert in front-end development including technologies like [Click or Hover for details]
             
           </h4>
      <div className="animated-mail">
   
        <div className="back-fold">
          
        </div>
        <div className="letter">
          <div className="letter-border">
        
          </div>
          <div className="letter-title">
         
          </div>
          <div className="letter-context">
          <p>
         
           <span className=" flex flex-wrap w-[100%] text-sm font-bold">
             <span className="tech-tag">HTML5</span>,
             <span className="tech-tag">CSS3</span>,
             <span className="tech-tag">JavaScript</span>,
             <span className="tech-tag">React</span>,
             <span className="tech-tag">TypeScript</span>,
             <span className="tech-tag">Bootstrap</span>,
             <span className="tech-tag">Tailwind</span>,
             <span className="tech-tag">Git</span>, etc.
           </span>
         </p>
          </div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="bodys"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>
    
  );
}

export default Skills;

