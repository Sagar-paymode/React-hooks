import React ,{useRef}from 'react'

const Ref = () => {

    const InputRef = useRef(null);
    const onClick = () => {
        console.log(InputRef.current.value);
        InputRef.current.focus();
        InputRef.current.value = '';
    }
  return (
    <div>
      <h1>Pedro</h1>
      <input type ="text" placeholder="Enter Something" ref={InputRef}/>
      <button onClick={onClick}>Change Name</button>

      
    </div>
  )
}

export default Ref
