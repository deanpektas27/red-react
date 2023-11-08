import { useState } from 'react'
import Container from "react-bootstrap/Container";
import Navbar from './components/navbar'
import Home from './components/home'
import Program from './components/program'
import Footer from './components/footer'
import Apply from './components/Apply'
import Involve from './components/Involve'
import Donate from './components/Donate'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/get-involved" element={<Involve />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
