import { useState } from "react";


function App() {
  const [color,setcolor]=useState("olive")
  return (
   <>
  <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>
<div className="fixed top-5 left-1/2 -translate-x-1/2 max-w-10xl flex gap-5 px-4 bg-white rounded-full py-2 overflow-x-auto">
<button className="bg-red-500 px-6 py-2 rounded-full" onClick={() => setcolor("red")}>Red</button>
  <button className="bg-green-500 px-6 py-2 rounded-full" onClick={() => setcolor("green")}>Green</button>
  <button className="bg-blue-500 px-6 py-2 rounded-full" onClick={() => setcolor("blue")}>Blue</button>
  <button className="bg-yellow-500 px-6 py-2 rounded-full" onClick={() => setcolor("yellow")}>Yellow</button>
  <button className="bg-pink-500 px-6 py-2 rounded-full" onClick={() => setcolor("pink")}>Pink</button>
  <button className="bg-orange-500 px-6 py-2 rounded-full" onClick={() => setcolor("orange")}>Orange</button>

  {/* custom colors */}
  <button
    style={{ backgroundColor: "brown" }}
    className="px-6 py-2 rounded-full text-white"
    onClick={() => setcolor("brown")}
  >
    Brown
  </button>
  <button
    style={{ backgroundColor: "turquoise" }}
    className="px-6 py-2 rounded-full text-white"
    onClick={() => setcolor("turquoise")}
  >
    Turquoise
  </button>
  <button
    style={{ backgroundColor: "#195869" }}
    className="px-6 py-2 rounded-full text-white"
    onClick={() => setcolor("#195869")}
  >
    Tiru
  </button>
  <button
    style={{ backgroundColor: "#4D0135" }}
    className="px-6 py-2 rounded-full text-white"
    onClick={() => setcolor("#4D0135")}
  >
    Blackberry
  </button>
  
</div>

  </div>

   </>
  );
}

export default App;
