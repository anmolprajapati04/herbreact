import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="header">
        <div className="header-logo">Herb Your Enthusiasm</div>
        <nav className="header-nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
