import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>Hello ,welcome to Context</h1> */}
     <Login/>
     <Profile/>
    </>
  )
}

export default App
