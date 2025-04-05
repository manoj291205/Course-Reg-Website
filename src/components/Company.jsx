import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Company.css';

const Company = () => {
  return (
    <div className="company-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src="/Logo.jpg" alt="MKS Electronics Logo" className="logo-img" />
          </div>
          <div className="title-container">
            <h1>Company Profile</h1>
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

      <main className="company-content">
        <h3>Our Story</h3>
        <p>
          MKS Electronics was established in 2005 with a vision to provide quality electronic repair services and training. 
          Over the years, we have grown to become a leading name in electronic repair and education.
        </p>
        
        <h3>Our Mission</h3>
        <p>
          To provide high-quality electronic repair services and comprehensive training programs that empower individuals 
          with the skills needed in today's technology-driven world.
        </p>

        <h3>Student Feedback</h3>
        <div className="feedback-section">
          <div className="feedback-card">
            <div className="feedback-header">
              <span className="student-name">John Doe</span>
              <span className="feedback-date">2023-12-15</span>
            </div>
            <p className="feedback-text">
              "The training program was comprehensive and hands-on. I learned everything I needed to start my own repair business."
            </p>
          </div>

          <div className="feedback-card">
            <div className="feedback-header">
              <span className="student-name">Jane Smith</span>
              <span className="feedback-date">2023-11-20</span>
            </div>
            <p className="feedback-text">
              "The instructors were knowledgeable and patient. The course materials were well-structured and easy to follow."
            </p>
          </div>

          <div className="feedback-card">
            <div className="feedback-header">
              <span className="student-name">Mike Johnson</span>
              <span className="feedback-date">2023-10-05</span>
            </div>
            <p className="feedback-text">
              "I came with no experience in electronics, but now I can confidently repair TVs and mobile phones. Highly recommended!"
            </p>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 MKS Electronics</p>
      </footer>
    </div>
  );
};

export default Company; 