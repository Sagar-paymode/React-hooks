import React ,{useState}from 'react'

const State = () => {
    //  let counter = 0; 

    const [counter,setCounter] = useState(0);
    const[inputValue,setInputValue] = useState('Parado')

    let increment = () => {
        setCounter(counter + 1);
        
    }
    let decrement = () => {
      setCounter(counter - 1);
     
    }

    let changeText = (event) => {
        let onChange = event.target.value
        setInputValue(onChange)
    }
  return (
  
    <div className='app'>
       
       <button onClick={decrement}>Decreament</button>
      <h1>{counter} </h1> 
      <button onClick={increment}>Increament</button>
      <br/>
      <br/>

      <input placeholder='Enter Something' onChange={changeText}/>
      <h2>{inputValue}</h2>
    </div>
  )
}

export default State;
