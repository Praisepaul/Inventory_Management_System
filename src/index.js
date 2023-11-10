import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import LoginSignup from './components/login';
import Dashboard from './components/dashboard';
import Stocks from './components/StocksPage/Stocks'
import ProductForm from './components/StocksPage/addStocks';
import ProductEditForm from './components/StocksPage/editStocks';
import OrderEditForm from './components/OrdersPage/editOrders';
import OrderForm from './components/OrdersPage/addOrders';
import OrderHome from './components/OrdersPage/Home_order';
import Orders from './components/OrdersPage/Orders';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/addstocks" element={<ProductForm />} />
      <Route path="/editstocks" element={<ProductEditForm />} />
      <Route path="/editorder" element={<OrderEditForm />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/addorder" element={<OrderForm />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
