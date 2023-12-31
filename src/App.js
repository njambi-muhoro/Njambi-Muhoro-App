import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import SideNav from "./components/SideNav";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";
import Name from './pages/Name'

function App() {
  const {screen, activeMenu} = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex  relative bg-[#022c43]">
{/* `{!activeMenu ? fixed inset-y-0 left-0  w-[10%] min-h-screen : 'w-72' }` */}
        {activeMenu ? (
            <div className={`fixed inset-y-0 left-0 min-h-screen ${!activeMenu ? 'w-[30%]' : 'w-[20%]'} `}>
              <SideNav />
            </div>
          ) : (
            // `{${!activeMenu ? 'w-[30%]' : 'w-0'}`}
            <div className='w-0 '>
              <SideNav />
            </div>
          )}
      
      {/* sideNav */}
{/* {screen !== "small" &&   
        <div className=' fixed inset-y-0 left-0  w-[10%] min-h-screen '>
         
          <SideNav />
        </div> } */}
      
        <div className={` min-h-screen gap-6  ${screen === "small" ? 'w-full' : 'fixed inset-y-0 right-0 w-[80%] min-h-screen gap-6'}`}>
         
          {/*   */}
         {screen  !== 'large' &&( <div className="w-[100%]  flex-1">
            <Name/>
          </div>)}
        <div className='w-[100%] ' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
