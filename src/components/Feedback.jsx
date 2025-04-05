import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    if (!name) return 'Name is required';
    if (!nameRegex.test(name)) return 'Name should contain only letters and spaces (3-50 characters)';
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) return 'Phone number is required';
    if (!phoneRegex.test(phone)) return 'Phone number should be 10 digits';
    return '';
  };

  const validateSubject = (subject) => {
    if (!subject) return 'Subject is required';
    if (subject.length < 5) return 'Subject should be at least 5 characters';
    if (subject.length > 100) return 'Subject should not exceed 100 characters';
    return '';
  };

  const validateMessage = (message) => {
    if (!message) return 'Message is required';
    if (message.length < 10) return 'Message should be at least 10 characters';
    if (message.length > 500) return 'Message should not exceed 500 characters';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Validate the changed field
    let error = '';
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'subject':
        error = validateSubject(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      default:
        break;
    }

    setErrors(prevState => ({
      ...prevState,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message)
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) {
      return;
    }

    // If no errors, proceed with form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your feedback!');
  };

  return (
    <div className="feedback-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="/Logo.jpg" 
              alt="MKS Electronics Logo" 
              className="logo-img"
            />
          </div>
          <div className="title-container">
            <h1>Feedback & Contact Us</h1>
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

      <main className="feedback-content">
        <div className="feedback-form-container">
          <h2>Send Us Your Feedback</h2>
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-button">Submit Feedback</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h4>Phone</h4>
              <p>+91 9876543210</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h4>Email</h4>
              <p>info@mkselectronics.com</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h4>Address</h4>
              <p>123 Electronics Street, Tech City, India - 400001</p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 MKS Electronics</p>
      </footer>
    </div>
  );
};

export default Feedback; 