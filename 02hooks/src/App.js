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
if(counter>=20){
  alert("you never add up to"  + " "+ counter+".");

}
else{
  
  counter=counter+1;
  setCounter(counter)
  
}
  
  }
  function removevalue(){
    console.log("counter",counter);
    if(counter<=0){
      alert("you never remove the counter under"+ " "+counter+".");
      
    }
    
   else{
    counter=counter-1;
    setCounter(counter)
   }
    
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
