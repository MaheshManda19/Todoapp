import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/Home');
  };

  const handleLogout = () => {
    navigate('/');
  };
  const handleTodo = ()=>{
    navigate('/Todo');
  }

  const storedUser = JSON.parse(localStorage.getItem('user'));
    const userEmail = storedUser ? storedUser.email : '';

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
