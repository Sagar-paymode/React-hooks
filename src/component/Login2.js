import React,{useContext} from 'react';
import { AppContext } from './Context2';



const Login2 = () => {
    const {setUserName} = useContext(AppContext);
   
  return (
    <div>
      <input type="text" onChange={(event) => {
        setUserName(event.target.value)
      }}  />
    </div>
  )
}

export default Login2
