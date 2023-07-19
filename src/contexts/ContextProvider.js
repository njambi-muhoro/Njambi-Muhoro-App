import { useState, useEffect, useContext, createContext } from "react";

const stateContext = createContext();

export function ContextProvider({ children }) {
  // we are exporting all states we are going to use in our project

  // the below will be used to set load time of our application
  const [contentLoaded, setContentLoaded] = useState(false);

  // the below will be used to determine the screen size
  const [screen, setScreen] = useState('');
  useEffect(() => {
    function handleSize(){
      const screenWidth = window.innerWidth;
      if(screenWidth < 640){
        setScreen('small')
      } else if(screenWidth >=640 && screenWidth < 1024){
          setScreen('medium')
      } else{
        setScreen('large')
      }
    }
    window.addEventListener('resize', handleSize);
    handleSize();

    return()=>{
      window.removeEventListener("resize",handleSize)
    };
  }, []);

  return (
    <stateContext.Provider
      value={{
        contentLoaded: contentLoaded,
        setContentLoaded: setContentLoaded,
        screen,
        setScreen,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}

//how to use the values
export function useStateContext() {
  // it return a call to the used context, we pass in
  return useContext(stateContext);
}
