// Home.js

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Dash from './redux/Dash';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userIdentifier = user.email;

    const tasks = JSON.parse(localStorage.getItem(userIdentifier));
    setTodos(tasks || []);
  }, []);

  const handleTodoClick = (todoId) => {
    console.log(`Clicked on todo with ID: ${todoId}`);
  };

  return (
    <div>
      <Header />
      <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Your Todo Items:</h2>
        {todos.length === 0 ? (
          <p className='message'>No todos found. Add some todos on the dashboard.</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.title}
                className="todo-item"
                onClick={() => handleTodoClick(todo.title)}
              >
                <h4>{todo.title}</h4>
                <h4>{todo.description}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
