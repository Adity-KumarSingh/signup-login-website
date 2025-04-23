// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUI from './LoginUI';
import SignupUI from './SignupUI';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUI />} />        {/* Login page */}
        <Route path="/signup" element={<SignupUI />} /> {/* Signup page */}
        <Route path="/home" element={<Dashboard />} />  {/* Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
