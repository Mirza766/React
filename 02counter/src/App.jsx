import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue=()=>{
    if(counter<15){
      counter=counter+1;
      setCounter(counter);
    }
  }

  const removeValue=()=>{
    if(counter>0){
      counter=counter-1;
      setCounter(counter);
    }
    
  }

  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Added Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Removed Value {counter}</button>
    </>
  )
}

export default App
