import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userEmail = storedUser ? storedUser.email : '';
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/Home');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleTodo = () => {
    navigate('/Todo');
  };

  if (!userEmail) {
    return null; // Return nothing if the user is not logged in
  }

  return (
    <div className='Header'>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleTodo}>Todo</button>
      <button onClick={handleLogout}>Logout</button>
      <div className='user-email'>{userEmail}</div>
    </div>
  );
};

export default Header;
