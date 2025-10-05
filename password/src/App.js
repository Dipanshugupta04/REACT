import { useState } from "react";


function App() {

  const [length,setlength]=useState(8) 
  const [NumberAllowed,setnumberAllowed]=useState(false) 
  const [characterAllowed,setcharacterAllowed]=useState(false) 
  return (
    <>
    <h1 className="text-4xl text-center text-white">Psssword Generator</h1>
    <div></div>
    
    <div>

    </div>
        </>
  );

}

export default App;
