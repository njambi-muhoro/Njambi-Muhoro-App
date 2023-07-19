import React from "react";
import Mountain from "../images/mountain2.jpg";
import "../App.css";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 200
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div

      className="bg-[Mountain] bg-cover  bg-center bg-opacity-25 min-h-screen flex flex-row items-center justify-center"
      style={{ backgroundImage: `url(${Mountain})` }}
    >
   
      <div className="">
    <p id="textDecor"><span className="text-white text-3xl">LUCY NJAMBI</span> <span className="text-black text-3xl">MUHORO</span> </p>
    <p className="text-xl">
      I am a{" "}
      <span id="textName " ref={el} className=" text-red-500 text-2xl underline decoration-black" >
        
       
      </span>
    </p>
    </div>
    </div>
  
  );
};

export default Home;
