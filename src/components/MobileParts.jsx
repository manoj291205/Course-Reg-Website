import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileParts.css';

const MobileParts = () => {
  return (
    <div className="mobile-parts-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src="/Logo.jpg" alt="MKS Electronics Logo" className="logo-img" />
          </div>
          <div className="title-container">
            <h1>Mobile Internal Parts</h1>
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

      <main className="mobile-parts-content">
        <section className="parts-section">
          <div className="image-container">
            <img src="/mobile_internal.jpg" alt="Mobile Internal Parts" />
          </div>
          <div className="button-container">
            <Link to="/registration" className="enroll-button">Enroll in Mobile Repair Course</Link>
          </div>
        </section>

        <section className="parts-section">
          <h2>Core Components</h2>
          <div className="parts-grid">
            <div className="part-card">
              <h3>Motherboard</h3>
              <p>Central circuit board of the phone</p>
              <ul>
                <li>Processor and memory</li>
                <li>Power management</li>
                <li>Connectivity chips</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>Battery</h3>
              <p>Power source for the device</p>
              <ul>
                <li>Lithium-ion cells</li>
                <li>Power management IC</li>
                <li>Charging circuit</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>Display Assembly</h3>
              <p>Screen and touch interface</p>
              <ul>
                <li>LCD/OLED panel</li>
                <li>Digitizer</li>
                <li>Backlight</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="parts-section">
          <h2>Peripheral System</h2>
          <div className="parts-grid">
            <div className="part-card">
              <h3>Camera Modules</h3>
              <p>Image capture system</p>
              <ul>
                <li>Lens assembly</li>
                <li>Image sensor</li>
                <li>Flash unit</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>Audio System</h3>
              <p>Sound input and output</p>
              <ul>
                <li>Speaker</li>
                <li>Microphone</li>
                <li>Audio codec</li>
              </ul>
            </div>

            <div className="part-card">
              <h3>Connectivity</h3>
              <p>Wireless communication</p>
              <ul>
                <li>WiFi module</li>
                <li>Bluetooth chip</li>
                <li>NFC antenna</li>
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

export default MobileParts; 