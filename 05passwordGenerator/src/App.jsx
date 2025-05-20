import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const [length,setLength]=useState(8)
const [numberallowed,setnumberAllowed]=useState(false)
const [characterAllowed,setCharacterAllowed]=useState(false)
const [Password,setPassword]=useState("")

const passwordRef=useRef(null)

const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed) str+="0123456789"
  if (characterAllowed) str+="૱ ꠸ ┯ ┰ ┱ ┲ ❗ ► ◄ Ă ă 0 1 2 3 4 5 6 7 8 9 Ǖ ǖ Ꞁ ¤ ­ Ð ¢ ℥ Ω ℧ K ℶ ℷ ℸ ⅇ ⅊ ⚌ ⚍ ⚎ ⚏ ⚭ ⚮ ⌀ ⏑ ⏒ ⏓ ⏔ ⏕ ⏖ ⏗ ⏘ ⏙ ⏠ ⏡ ⏦ ᶀ ᶁ ᶂ ᶃ ᶄ ᶆ ᶇ ᶈ ᶉ ᶊ ᶋ ᶌ ᶍ ᶎ ᶏ ᶐ ᶑ ᶒ ᶓ ᶔ ᶕ ᶖ ᶗ ᶘ ᶙ ᶚ ᶸ ᵯ ᵰ ᵴ ᵶ ᵹ ᵼ ᵽ ᵾ ᵿ ⁁ ⁊ ⸜ ⸝ ¶  ¥ £ ⅕ ⅙ ⅛ ⅔ ⅖ ⅗ ⅘ ⅜ ⅚ ⅐ ⅝ ↉ "

  for (let i=1;i<length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)

  }
setPassword(pass)

},[setPassword,numberallowed,characterAllowed,length])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,10)
  window.navigator.clipboard.writeText(Password)
},[Password])
useEffect(()=>{
passwordGenerator()
},[length,numberallowed,characterAllowed,passwordGenerator])
  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className="text-white text-center my-3" >Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input type='text' placeholder='Password' value={Password} className='outline-none w-full  px-3 py-1' readOnly
ref={passwordRef}/>
<button onClick={copyPasswordToClipboard} className='outline-none cursor-pointer bg-blue-700 text-white px-3 py -0.5 shrink-0'>copy</button>
</div>
<div className='flex text-sm gap x-2'>
  <div className='flex items-center gap-x-1'>
    <input type='range'
    min={6}
    max={100}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    value={length}
    />
    <label>Length:{length}</label>
  </div>
  <div className='flex items-center gap-x-1 ml-2'>
  <input type='checkbox'
   id="numberInput"
   defaultChecked={numberallowed}
    onChange={()=>{
      setnumberAllowed((prev)=>!prev)
    }}
    />
    <label htmlFor='numberInput'>Numbers</label>
  </div>
  <div className='flex items-center gap-x-1 ml-2'>
  <input type='checkbox'
   id="characterInput"
   defaultChecked={characterAllowed}
    onChange={()=>{
      setCharacterAllowed((prev)=>!prev)
    }}
    />
    <label htmlFor='characterInput'>Characters</label>
  </div>
</div>

       </div>
       
    </>
  )
}

export default App
