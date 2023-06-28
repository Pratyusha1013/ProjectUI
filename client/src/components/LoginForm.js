import React, { useState } from 'react';
const LoginForm = () => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userid: userid,
            password: password
          })
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const data = await response.json();
        console.log('Login successful:', data);
  
      } 
      catch (error) 
      {
        console.error('Login error:', error.message);
      }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userid">User ID:</label>
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


