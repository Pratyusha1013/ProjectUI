import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./components/Pages/UserContext.js";
import Navbar from './components/Pages/Navbar.js';
import Home from './components/Pages/Home.js';
import Profile from './components/Pages/Profile.js';
import LoginForm from './components/Pages/LoginForm.js';
import RegisterForm from './components/Pages/RegisterForm.js';
import Post from './components/Pages/Post.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
