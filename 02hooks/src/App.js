import { useState } from 'react';
import './App.css';
 


function App() {

  let [counter,setCounter]=useState(0)

  //let counter=0;
  function addvalue(){
  
  
    // console.log("counter",counter);
  // setInterval(() => {
  //   counter=counter+1;
  //   setCounter(counter)
  // }, 2000);


  counter=counter+1;
  setCounter(counter)
  
  }
  function removevalue(){
    console.log("counter",counter);
    
    counter=counter-1;
    setCounter(counter)
    
    }


  return (
    <>
    <h1>Counter IS:{counter}</h1>
    <button onClick={addvalue}>ADD </button>
    <br/>
    <button onClick={removevalue}>Remove</button>
    </>
  );
}

export default App;
