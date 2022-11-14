import React,{useContext} from 'react';
import { AppContext } from './Context2';

const User = () => {
    const userName = useContext(AppContext);
    
  return (
    <div>
      <h1>User : {userName}</h1>
    </div>
  )
}

export default User
