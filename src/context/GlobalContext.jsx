import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext =  createContext()

const GlobalContext = ({children}) => {
    const [theme,setTheme] = useState(localStorage.getItem("theme")||"light");
    const [lang,setLang]  = useState(localStorage.getItem("lang")||"uz")
   
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme",theme)
    },[theme]);
    
    useEffect(()=>{
        localStorage.setItem("lang",lang)
    },[lang]);

  return (
    <ThemeContext.Provider value={{theme,setTheme,lang,setLang}}>{children}</ThemeContext.Provider>
  )
}

export default GlobalContext