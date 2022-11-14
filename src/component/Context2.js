import React, { useState,createContext, useContext} from 'react'
import Login2 from './Login2';
import User from './User';
export const AppContext = createContext("null")

const Context2 = () => {
    const[userName,setUserName] = useState();
  return (
    <AppContext.Provider value = {{userName,setUserName}}>
      <Login2 />
      <User />
    </AppContext.Provider>
  )
}

export default Context2
