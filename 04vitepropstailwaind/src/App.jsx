import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const obj = {
    username: "Khushboo",
    age: 18
  };

  return (
    <>
      <h1 className="bg-green-500 text-white mb-4">Hello om</h1>
      {/* <Card username1="Khushboo" someobj={obj} /> */}
      {/* <Card username2="Aryan" /> Pass only username2 */}
    </>
  );
}



export default App
