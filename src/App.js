import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import Registration from './components/Registration';
import Learning from './components/Learning';
import TVParts from './components/TVParts';
import MobileParts from './components/MobileParts';
import Feedback from './components/Feedback';
import Assessment from './components/Assessment';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="welcome-container">
                <h2>Welcome to MKS Electronics</h2>
                <p>Your trusted partner in electronics repair training and services.</p>
                <div className="nav-boxes">
                  <Link to="/home" className="nav-box">
                    <h3>Home</h3>
                    <p>Explore our services</p>
                  </Link>
                  <Link to="/company" className="nav-box">
                    <h3>Company Profile</h3>
                    <p>Learn about us</p>
                  </Link>
                  <Link to="/registration" className="nav-box">
                    <h3>Course Registration</h3>
                    <p>Enroll in our courses</p>
                  </Link>
                  <Link to="/learning" className="nav-box">
                    <h3>Interactive Learning</h3>
                    <p>Start learning</p>
                  </Link>
                  <Link to="/assessment" className="nav-box">
                    <h3>Assessment</h3>
                    <p>Test your knowledge</p>
                  </Link>
                  <Link to="/feedback" className="nav-box">
                    <h3>Feedback & Contact</h3>
                    <p>Get in touch</p>
                  </Link>
                </div>
                <div className="login-button-container">
                  <Link to="/login" className="login-button">
                    Login
                  </Link>
                </div>
              </div>
            } />
            <Route path="/home" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/tv-parts" element={<TVParts />} />
            <Route path="/mobile-parts" element={<MobileParts />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 