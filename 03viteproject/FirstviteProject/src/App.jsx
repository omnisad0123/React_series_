import { useState } from 'react'

import './App.css'
  
function App() {
  
  let [counter,setCounter]=useState(15);
  let [m1,setm1]=useState("");
  let [m2,setm2]=useState("");
  //  let counter=10;
   const AddValue=()=>{
    console.log("add value",counter)
    if(counter<25){
       counter=counter+1;
         setm2("")
    } else {
        setm1("You cant increase more then 25")
    }
   
    setCounter(counter);
}
const RemoveValue=()=>{
  if(counter>0){
    counter=counter-1;
    setm1("")
  } else {
        setm2("you cant decrease less then 0");
  }
   setCounter(counter)
}
  return (
    <>
     <h1>Welcome to vite+react project</h1>
     <h2>Current value is {counter}</h2>
        <button onClick={AddValue}>Add value {counter}</button>
           <h2>{m1}</h2>
        <button onClick={RemoveValue}>Remove value</button>
        <h2>{m2}</h2>
    </>
  )
}

export default App
