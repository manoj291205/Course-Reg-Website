import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasValidLength = password.length >= 8 && password.length <= 15;
    return hasUpperCase && hasSpecialChar && hasValidLength;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate username (email format)
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (!validateEmail(formData.username)) {
      newErrors.username = 'Please enter a valid email address';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be 8-15 characters, contain at least one uppercase letter and one special character';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // If validation passes, store login state and redirect to home
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <main className="login-content">
        <div className="login-box">
          <h2>Login</h2>
          {loginError && <div className="error-message">{loginError}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username (Email)</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? 'error' : ''}
                placeholder="Enter your email"
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                placeholder="Enter your password"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login; 