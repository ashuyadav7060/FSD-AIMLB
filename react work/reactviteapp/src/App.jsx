import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



import React from 'react'
import Student from './Student';

import StudentState from './StudentState';
import Imagemanipulation from "./imagemanipulation"

function App() {
    const studentdata={}
  return (
    // <div style={{color:'Red'}}><h2>ABES Engineering College</h2>
    // <div style={mystyle}>{a}</div>
    <div style={{marginLeft:"300px"}}>
      <Imagemanipulation/>
      {/* <Student data={studentdata} /> */}
      {/* <StudentState /> */}
      {/* <div>
          <Student name="Sahil Jaiswal" roll='2200321530143' college="Abes Engineeering College" branch="CSE-AIML" 
           pic={<img src={logo} height={100} width={40}/>} 
           />
      </div> */}
    </div>
  
  )
}

// export default App
import React, { useState } from 'react'
import Registration from './registration'
// import registration from './registration'
import Login from './login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const [shareData , setShareData]=useState();
  return (

    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />}   />
      <Route path='/reg' element={<Login />}   />


      </Routes>
      </BrowserRouter>
      <Registration regData={setShareData} />
      
    </div>
  )
}
export default App