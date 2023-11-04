import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import Program from './components/program'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </div>
    </>
  )
}

export default App
