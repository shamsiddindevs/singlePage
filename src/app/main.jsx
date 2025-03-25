import React from 'react'
import App from './app'
import GlobalContext from './context/GlobalContext'

const Main = () => {
  return (
    <GlobalContext>
      <App/>
    </GlobalContext>
  )
}

export default Main