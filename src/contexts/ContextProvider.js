import React, { useEffect, useState, createContext, useContext } from 'react';

const stateContext = createContext();

export function ContextProvider({ children }) {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screen, setScreen] = useState('');
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setScreenSize(screenWidth);

      if (screenWidth <= 990 ) {
        setScreen('small');
        setActiveMenu(false);
      
      } else {
        setScreen('large');
        setActiveMenu(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <stateContext.Provider
      value={{
        contentLoaded,
        setContentLoaded,
        screen,
        setScreen,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(stateContext);
}
