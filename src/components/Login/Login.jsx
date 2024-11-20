import { useState } from 'react';
import './Login.css';

const Login = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Welcome back, ${formData.email}!`);
    setTimeout(() => {
      setMessage('');
      onClose();
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isLoginForm ? 'Login' : 'Sign Up'}</h2>
        {message && <div className="success-message">{message}</div>}
        <form onSubmit={handleSubmit}>
          {!isLoginForm && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">
            {isLoginForm ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p>
          {isLoginForm ? "Don't have an account? " : "Already have an account? "}
          <button 
            className="toggle-form" 
            onClick={() => setIsLoginForm(!isLoginForm)}
          >
            {isLoginForm ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login; 