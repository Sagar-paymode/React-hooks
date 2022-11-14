import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EffectPractice = () => {

  const [data,setData] = useState("hii");
  const[count,setCount] = useState(0);
  let counter = () => {
      setCount((count + 1))
  }


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setData(response.data[0].email)
            console.log("api was called")
        })
    })
  return (
    <div>
      <h1>{count}</h1>
      <h1>{data}</h1>
      <button onClick={counter}>Click Here</button>
    </div>
  )
}

export default EffectPractice;
