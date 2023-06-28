import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Login from './components/LoginForm.js';
import Register from './components/RegisterForm.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="Home" element={<Home/>} />
          <Route path="Profile" element={<Profile/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="Register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;

