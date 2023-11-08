import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import LoginSignup from './components/login';
import Dashboard from './components/dashboard';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<LoginSignup />} />
      <Route path="/orders" element={<Dashboard />} />
      <Route path="/logout" element={<LoginSignup />} />
      <Route path="/logout" element={<LoginSignup />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
