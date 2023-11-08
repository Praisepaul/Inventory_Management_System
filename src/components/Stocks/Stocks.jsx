import "./Stocks.css";
import React from 'react'
import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const Stocks = () => {
  return (
    <div>
      <Navbar />
      <Buttons />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Stocks
