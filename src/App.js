import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import RandomNumberGenerator from './pages/RandomNumberGenerator';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Random Number Generator</Link>
          <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
        </nav>
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<RandomNumberGenerator />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
