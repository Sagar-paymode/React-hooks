import React, { useState,createContext } from 'react';
import Login from './Login';
import Username from './Username';
export const AppContext = createContext(null);
const Context = () => {
    const[username,setUsername] = useState("");
  return (
    <AppContext.Provider value={{username,setUsername}}>
      <Login/>
      <Username/>
    </AppContext.Provider>
  )
}

export default Context
