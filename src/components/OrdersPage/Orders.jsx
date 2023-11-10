import "../StocksPage/Stocks.css"
import React from 'react'
import Navbar from '../StocksPage/Navbar'
import Buttons from './Buttons'
import Home from './Home_order'
import OrderHome from "./Home_order";


const Orders = () => {
  return (
    <div>
      <Navbar />
      <Buttons />
      <OrderHome/>
    </div>
  )
}

export default Orders
