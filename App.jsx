import { useState } from 'react'
import NavBar from './src/components/NavBar'
import Home from './src/components/Home'
import Program from './src/components/program'
import Footer from './src/components/Footer'
import Apply from './src/components/Apply'
import Involve from './src/components/Involve'
import Donate from './src/components/Donate'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Class001 from './src/components/Class001'
import './src/App.css'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/get-involved" element={<Involve />} />
          {/* <Route path="/donate" element={<Donate />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/class001" element={<Class001 />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
