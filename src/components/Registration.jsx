import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'tv-repair',
    experience: 'beginner',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return 'Name should contain only alphabets and spaces';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      return 'Phone number should contain only numbers';
    }
    if (phone.length < 10 || phone.length > 15) {
      return 'Phone number should be between 10 and 15 digits';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change
    if (name === 'name') {
      setErrors(prev => ({
        ...prev,
        name: validateName(value)
      }));
    } else if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    } else if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: validatePhone(value)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    
    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError
    });

    if (!nameError && !emailError && !phoneError) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      alert('Thank you for your registration! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'tv-repair',
        experience: 'beginner',
        message: ''
      });
    }
  };

  return (
    <div className="registration-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src="/Logo.jpg" alt="MKS Electronics Logo" className="logo-img" />
          </div>
          <div className="title-container">
            <h1>Course Registration</h1>
          </div>
          <Link to="/" className="home-button">
            <span>App</span>
          </Link>
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

      

      <main className="registration-content">
        <div className="registration-form-container">
          <h2>Register for Our Courses</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="course">Select Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="tv-repair">TV Repair Course</option>
                <option value="mobile-repair">Mobile Repair Course</option>
                <option value="both">Both Courses</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience Level</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Register Now</button>
          </form>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 MKS Electronics</p>
      </footer>
    </div>
  );
};

export default Registration; 