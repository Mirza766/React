import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
let myObj={
  Name: "Mirza",
  age:'21'
}


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwindcss</h1>
<Card username="Mirza" btnText='Click Here'/>
<Card username='Ahmad' btnText='Visit Here'/>
    {/* <Card username="MirzaCodding" btnText="Click me"/>   
    <Card username="HiteshCodding" btnText="Visit me"/> */}
    </>
  )
}

export default App
