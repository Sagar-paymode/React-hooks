import React, { useState,useMemo } from 'react'

const Memo = () => {
    const [myNum,setMyNum] = useState(0);
    const[show,setShow] = useState(null)


    const getValue = () => {
       return setMyNum(myNum+1)
    }

    const countNumber = (num) =>{
        for (let i = 0; i < 10000; i++) {
       return(num)
            
        }
    }
    const checkData = useMemo(()=>{
        return countNumber(myNum)
    },[myNum])

    // const checkData = countNumber(myNum)
  return (

    <div>
      <button onClick={getValue} style={{backgroundColor: 'red'}}>Counter</button>
      <p>My new Number : {checkData}</p>
      <button onClick={()=>{setShow(!show)}}>
        {show? "You Clicked me" : "Click me please"}
      </button>
    </div>
  )
}

export default Memo
