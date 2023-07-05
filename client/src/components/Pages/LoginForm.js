import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../main.js';

const LoginForm = () => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        userid: userid,
        password: password,
      };

      const response = await fetchData('/user/login', data, 'POST');
      console.log('Login successful:', response);
      navigate('/profile');

    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userid"
            value={userid}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="mt-4 btn btn-danger">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
