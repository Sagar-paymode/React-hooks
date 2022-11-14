import React, { useReducer } from 'react'


const Reducer = () => {
// const[count,setCount] = useState(0);
// const[showText,setShowText] = useState(true);

const reducer = (state,action) => {

    switch(action.type){
        case "Increment":
        return {count: state.count + 1,showText:state.showText};
        case "toggleshowText":
        return{count: state.count,showText:!state.showText};
        default:
            return state;
    }

}
const[state,dispatch] = useReducer(reducer,{count:0,showText:true})
    
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() =>{
      dispatch({type:"Increment"});   
      dispatch({type:"toggleshowText"});
      }}
      >
        Click Here</button>
      {state.showText&&<p>This is a Text</p>}

    </div>
  )
}

export default Reducer
