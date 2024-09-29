import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'

function App() {


  return (
    <Routes>
      
      {/* <Parent /> */}

      {/* //!CRUD Opeartions In react */}

      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/read/:userId' element={<Read/>}/>
      <Route path='/update/:userId' element={<Update/>}/>

    </Routes>
  )
}

export default App
