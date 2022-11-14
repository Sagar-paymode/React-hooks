import React ,{useRef}from 'react'

const RefPractice = () => {
    const InputRef = useRef(null);
    const onClick= () => {
        InputRef.current.focus();
       console.log(InputRef.current.value) ;
       InputRef.current.value = '';

    }
  return (
    <div>
      <h1>Sagar</h1>
      <input type="text" placeholder='Type Anything' ref = {InputRef}/>
      <button onClick={onClick}>Click here</button>
    </div>
  )
}

export default RefPractice
