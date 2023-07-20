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
    


<div class="logo-holder flex flex-col gap-4">

  <div className="flex gap-6">
    <div class="bar"></div>
  <h4>CSS3</h4>
  </div>

  <div className="flex gap-6">
  <div class="bar fill1">
  </div>
  <h4>JavaScript</h4>
  </div>

  <div className="flex gap-6">
  <div class="bar fill2">
  </div>
  <h4>React</h4>
  </div>

  <div className="flex gap-6">
  <div class="bar fill3"></div>
  <h4>TypeScript</h4>
  </div>

  <div className="flex gap-6">
<div class="bar fill4"></div>
<h4>Bootstrap</h4>
</div>

<div className="flex gap-6">
<div class="bar fill5"></div>
<h4>Tailwind</h4>
</div>

<div className="flex gap-6">
<div class="bar fill6"></div>
<h4>Git</h4>
</div>

<div className="flex gap-6">
<div class="bar fill7"></div>
<h4>HTML5</h4>
</div>


 
    </div> 
    </div>
   
    
  );
}

export default Skills;

