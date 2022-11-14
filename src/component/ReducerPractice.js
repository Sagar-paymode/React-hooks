import React, { useReducer } from 'react'

const ReducerPractice = () => {
    const reducer = (state,action) => {

        switch(action.type){
            case "increment":
            return {count: state.count + 1,showText: state.showText};
            case"toggleShow":
            return{count:state.count+1,showText:!state.showText};
            default:
                return state
        }
    
    }
    const[state,dispatch] = useReducer(reducer,{count:0,showText:true})
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({type: "increment"});
        dispatch({type: "toggleShow"})
      }}>Click Here</button>
      {state.showText&&<h1>This IS text</h1> }
    </div>
  )
}

export default ReducerPractice

