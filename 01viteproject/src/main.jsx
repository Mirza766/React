import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
//import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>custom App</h1>
        </div>
    )
}

// const reactElement={
//     type:'a',
//     props:{
//      href:"http://google.com",
//      target:"_blank"
//     },
//     children:"Click me to visit google"
// }

const anotherElement=(
<a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherElements="Chai Aur React";
const reactElement=React.createElement(
    'a',
    {href: 'https://google.com', target:"_blank"},
    'click me to visit google',
    anotherElements
)



createRoot(document.getElementById('root')).render(
   reactElement
    //<App/>
 
)
