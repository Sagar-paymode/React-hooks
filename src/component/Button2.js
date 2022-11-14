import React, { useState,forwardRef, useImperativeHandle } from 'react'

const Button2 = forwardRef((props,ref) => {
  const[toggle,showToggle] = useState(false);
  useImperativeHandle(ref,() => ({
    aletrToggle() {
     
        showToggle(!toggle)
      
    }
  })
  )
  
  return (
    <div>
      <button >Button from child</button>
     <div> {toggle && <h1>Toggle </h1>}</div>
    </div>
  )
})

export default Button2;
