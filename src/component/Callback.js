import React, { useCallback, useState } from 'react'
import Child from './Child';

const Callback = () => {
    const[toggle,setToggle] = useState(false);
    const[data,setData] = useState("Hello world");
    const returnComment = useCallback( (name) => {
        return data = name
    },[data])
  return (
    
    <div>
      <Child returnComment ={returnComment}/>
      <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
      {toggle&&<h1>Toggle</h1>}

    </div>
  )
}

export default Callback
