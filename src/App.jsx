import React, { useContext } from 'react'
import Home from './pages/Home'
import { ThemeContext } from './context/GlobalContext'

const App = () => {
//  const {theme, setTheme,lang,setLang} =  useContext(ThemeContext)
 
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App