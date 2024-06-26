import { useState } from "react"
import './App.css'
import './Rainbow.css'
function App() {

const [color, setColor]= useState("color")
document.body.style.backgroundColor = color;
return (

 <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
  <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
    <button onClick={() => setColor("green")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "green"}} >Green</button>
    <button onClick={() => setColor("red")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "red"}} >Red</button>
    <button onClick={() => setColor("yellow")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "yellow"}} >Yellow</button>
    <button onClick={() => setColor("black")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "black"}} >Black</button>
    <button onClick={() => setColor("pink")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "pink"}} >Pink</button>
   </div>
  </div>
</div>


)}
export default App