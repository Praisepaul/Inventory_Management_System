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


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/addstocks" element={<ProductForm />} />
      <Route path="/editstocks" element={<ProductEditForm />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
