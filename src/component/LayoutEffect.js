import React, { useEffect, useLayoutEffect, useRef } from 'react'

const LayoutEffect = () => {

  
    useLayoutEffect(() => {
        // console.log("useLayout")
       console.log(ValueChange.current.value )   
    })
    useEffect(() => {
        // console.log("useEffecr")
        ValueChange.current.value = "world"
    })
    const ValueChange = useRef(null);
   
  return (
    <div>
       <input type="text" ref={ValueChange} value= "Pedetro"/>
    </div>
  )
}

export default LayoutEffect
