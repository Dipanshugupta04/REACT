
import './App.css';

let counter=0;
function addvalue(){
console.log("counter",counter);

counter=counter+1;

}
function removevalue(){
  console.log("counter",counter);
  
  counter=counter-1;
  
  }

function App() {
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
