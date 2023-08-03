import React, { useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      // Perform your actual login/authentication logic here
      // For demonstration purposes, let's assume the user is logged in
      // and store the user information in localStorage
      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Logged in successfully!');
      navigate('/Home');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className='login-container'>
      <div className='form'>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='button' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
