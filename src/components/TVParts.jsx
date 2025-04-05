import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TVParts.css';

const TVParts = () => {
  return (
    <div className="tv-parts-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src="/Logo.jpg" alt="MKS Electronics Logo" className="logo-img" />
          </div>
          <div className="title-container">
            <h1>TV Internal Parts</h1>
            <Link to="/" className="home-button">
              <span>App</span>
            </Link>
          </div>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
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

      <main className="tv-parts-content">
        <section className="parts-section">
          <div className="image-container">
            <img src="/tv_internal.jpg" alt="TV Internal Parts" />
          </div>
          <div className="button-container">
            <Link to="/registration" className="enroll-button">Enroll in TV Repair Course</Link>
          </div>
        </section>

        <section className="parts-section">
          <h2>Core Components</h2>
          <div className="parts-grid">
            <div className="part-card">
              <h3>Power Supply Board</h3>
              <p>Converts AC power to DC power for TV operation</p>
              <ul>
                <li>Voltage regulation</li>
                <li>Power distribution</li>
                <li>Protection circuits</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>Main Board</h3>
              <p>Central processing unit of the TV</p>
              <ul>
                <li>Signal processing</li>
                <li>Input/output control</li>
                <li>System management</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>T-Con Board</h3>
              <p>Timing control for display panel</p>
              <ul>
                <li>Image processing</li>
                <li>Timing signals</li>
                <li>Panel control</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="parts-section">
          <h2>Display System</h2>
          <div className="parts-grid">
            <div className="part-card">
              <h3>LCD/LED Panel</h3>
              <p>Main display component</p>
              <ul>
                <li>Pixel matrix</li>
                <li>Backlight system</li>
                <li>Color filters</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>Backlight Unit</h3>
              <p>Provides illumination for the display</p>
              <ul>
                <li>LED strips</li>
                <li>Diffuser panels</li>
                <li>Light guides</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>Driver Boards</h3>
              <p>Controls individual display elements</p>
              <ul>
                <li>Column drivers</li>
                <li>Row drivers</li>
                <li>Gate drivers</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 MKS Electronics</p>
      </footer>
    </div>
  );
};

export default TVParts; 