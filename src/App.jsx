import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import LandingPage from './pages/Home'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
            <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </>
  )
}

export default App
