// import React from 'react'
// // import { Text } from './components5/Text/Text'
import { Login } from './components5/Login/Login'
import { Register } from './components5/Register/Register'
import { Landing } from './components5/Landing/Landing'
import {  Routes, Route } from 'react-router'

import './App.css'

function App() {
    // const [count, setCount] = useState(0);
  return (
    <>
     <div className='app-container'>
        <div className='scrollable'> 
           {/* < Register /> */}
          <Routes>
            <Route path='/' element={<Landing />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='*' element={<div>404 Not Found</div>} ></Route>
          </Routes>
         </div> 
      </div>  
     
       
    </>
  )
}

export default App
