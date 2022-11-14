import React,{useRef} from 'react';
import Button2 from './Button2'


const Impert = () => {
  const buttonRef2 = useRef(null);
 
  return (
    <div>
      <button onClick={() => { buttonRef2.current.aletrToggle()}}>Button from Parent</button>
      <Button2 ref={buttonRef2}/>
    </div>
  )
}

export default Impert
