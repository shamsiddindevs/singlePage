import React, { useContext } from 'react'
import { LangContext } from '../context/GlobalContext'

const Home = () => {
    let theme = useContext(LangContext);
    console.log(theme);
    
  return (
    <div className={`${theme=="dark"?"bg-gray-700":"bg-amber-300"}`}>Home</div>
  )
}

export default Home