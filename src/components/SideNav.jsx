import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import myImage from "../images/mypic.jpeg";


const SideNav = () => {
  const {screen, activeMenu} = useStateContext();
  return (
    <div className="flex flex-col  h-full  overflow-auto md:overflow-hidden md:hover:overflow-auto bg-black" id="container">
      <div className="flex flex-col justify-center">
        <img src={myImage} alt="img" className="" />
        <h3 className=" hidden sm:block text-white bg-[#45a1d2] px-2 text-center">
          Lucy Njambi
        </h3>
      </div>
      <div className="flex flex-col justify-between  h-[100%]">
      <div className="flex flex-col  text-white text-sm italic">
        <NavLink
          to="/"
          activeclassname="active-link"
          className=" border border-gray-700 flex justify-center p-1"
        >
          <h4>Home</h4>
        </NavLink>
        <NavLink
          to="/about"
          activeclassname="active-link"
          className=" border border-gray-700 flex justify-center p-1"
        >
          <h4>About Me</h4>
        </NavLink>
        <NavLink
          to="/resume"
          activeclassname="active-link"
          className="border border-gray-700 flex justify-center p-1"
        >
          <h4>Resume</h4>
        </NavLink>
        <NavLink
          to="/portfolio"
          activeclassname="active-link"
          className="border border-gray-700 flex justify-center p-1"
        >
          <h4>Portfolio</h4>
        </NavLink>
        <NavLink
          to="/blog"
          activeclassname="active-link"
          className="border border-gray-700 flex justify-center p-1"
        >
          <h4>Blog</h4>
        </NavLink>
        <NavLink
          to="/contact"
          activeclassname="active-link"
          className=" border border-gray-700 flex justify-center p-1"
        >
          <h4>Contact</h4>
        </NavLink>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap" id="footers">
        {/* ${!activeMenu && "display-hidden"} "text-white"  */}
        <h6 className={`${activeMenu && "display-hidden"} text-white`}>
          2021 © Lucy-Njambi. All Right Reserved.
        </h6>
      </div>
      </div>
    </div>
  );
};

export default SideNav;
