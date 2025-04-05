import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';

const Learning = () => {
  return (
    <div className="learning-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src="/Logo.jpg" alt="MKS Electronics Logo" className="logo-img" />
          </div>
          <div className="title-container">
            <h1>Interactive Course Learning</h1>
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

      <main className="learning-content">
        <section className="welcome-section">
          <h2>Welcome to Interactive Course Learning</h2>
          <p>Explore our comprehensive courses designed to enhance your electronics repair skills through interactive learning.</p>
        </section>

        <section className="course-section">
          <h2>Available Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <div className="course-image">
                <img src="/tv_internal.jpg" alt="TV Internal Parts" className="course-img" />
              </div>
              <div className="course-info">
                <h3>TV Repair Course</h3>
                <p>Master TV repair techniques through interactive modules and hands-on practice</p>
                <div className="course-features">
                  <span>📚 12 Modules</span>
                  <span>⏱️ 30 Hours</span>
                  <span>🎓 Certificate</span>
                </div>
                <Link to="/tv-parts" className="course-button">Start Learning</Link>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                <img src="/mobile_internal.jpg" alt="Mobile Internal Parts" className="course-img" />
              </div>
              <div className="course-info">
                <h3>Mobile Repair Course</h3>
                <p>Learn mobile phone repair through step-by-step interactive tutorials</p>
                <div className="course-features">
                  <span>📚 15 Modules</span>
                  <span>⏱️ 40 Hours</span>
                  <span>🎓 Certificate</span>
                </div>
                <Link to="/mobile-parts" className="course-button">Start Learning</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Learning Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Interactive Modules</h3>
              <p>Engage with interactive content including videos, quizzes, and simulations</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Hands-on Practice</h3>
              <p>Practice with virtual components and real-world repair scenarios</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3>Video Tutorials</h3>
              <p>Watch detailed video demonstrations of repair procedures</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Expert Support</h3>
              <p>Get guidance from experienced instructors through our support system</p>
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

export default Learning; 