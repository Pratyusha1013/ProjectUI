

import React, { useState } from 'react';

const RegisterForm = () => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userid: userid,
            password: password,
            email: email,
            dateofbirth: dateOfBirth
          })
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        const data = await response.json();
        console.log('Registration successful:', data);
        
  
      } catch (error) {
        console.error('Registration error:', error.message);        
      }
  };

  return (
    <div>
      <h1>Register</h1>
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
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
    </div>
  );
};

export default RegisterForm;


