import {createContext} from "react";

export let LangContext = createContext();
const GlobalContext = ({children}) => {
  return <LangContext.Provider value={"dark"}>{children}</LangContext.Provider>;
};

export default GlobalContext;
