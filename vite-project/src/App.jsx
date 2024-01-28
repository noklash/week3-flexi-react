import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './components/Name'


function App() {
  const [count, setCount] = useState(5)
  const handleClick = () =>  setCount((prev) => prev - 1)
  useEffect(() =>{}, [] )
 
   return (
     <>
        <Name count={count}/>
       <button onClick={handleClick}>Click me</button>

      </>
   )
 }
 
 export default App


