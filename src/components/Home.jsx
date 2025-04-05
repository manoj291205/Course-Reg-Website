import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className="home-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="/Logo.jpg" 
              alt="MKS Electronics Logo" 
              className="logo-img"
              onError={handleImageError}
            />
          </div>
          <div className="title-container">
            <h1>Home</h1>
            <Link to="/" className="home-button">App</Link>
          </div>
        </div>

        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/company">Company Profile</Link></li>
            <li><Link to="/registration">Course Registration</Link></li>
            <li><Link to="/learning">Interactive Learning</Link></li>
            <li><Link to="/assessment">Assessment</Link></li>
            <li><Link to="/feedback">Feedback & Contact Us</Link></li>
            <li><Link to="/tv-parts">TV Internal Parts</Link></li>
            <li><Link to="/mobile-parts">Mobile Internal Parts</Link></li>
          </ul>
        </nav>
      </header>

      <main className="home-content">
        <section className="hero-section">
          <div className="hero-text">
            <h2>Welcome to MKS Electronics</h2>
            <p>Your trusted partner in electronics repair training and services. We offer comprehensive courses in TV and mobile phone repair.</p>
          </div>
          <div className="hero-image">
            <img 
              src="/Logo.jpg" 
              alt="MKS Electronics" 
              className="main-image"
              onError={handleImageError}
            />
          </div>
        </section>

        <div className="scrolling-text">
          <marquee behavior="scroll" direction="left">
            Word of the Day - Capacitor
          </marquee>
        </div>

        <section className="parts-section">
          <div className="parts-container">
            <div className="parts-card">
              <div className="parts-image">
                <img 
                  src="/tv-parts.jpeg" 
                  alt="TV Internal Parts" 
                  onError={handleImageError}
                />
              </div>
              <h3>TV Internal Parts</h3>
              <p>Explore and learn about TV internal components and repair techniques.</p>
              <Link to="/tv-parts" className="feature-link">View Parts</Link>
            </div>
            
            <div className="parts-card">
              <div className="parts-image">
                <img 
                  src="/mobile-parts.jpg" 
                  alt="Mobile Internal Parts" 
                  onError={handleImageError}
                />
              </div>
              <h3>Mobile Internal Parts</h3>
              <p>Discover mobile phone internal components and repair methods.</p>
              <Link to="/mobile-parts" className="feature-link">View Parts</Link>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h3>Expert Training</h3>
            <p>Learn from industry professionals with years of experience in electronics repair.</p>
          </div>
          <div className="feature-card">
            <h3>Hands-on Practice</h3>
            <p>Get practical experience with real-world repair scenarios and equipment.</p>
          </div>
          <div className="feature-card">
            <h3>Career Support</h3>
            <p>Receive guidance and support to start your career in electronics repair.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 MKS Electronics</p>
      </footer>
    </div>
  );
};

export default Home; 