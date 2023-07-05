import React, { useState, useContext } from 'react';
import { fetchData } from '../../main.js';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Pages/UserContext.js';


const RegisterForm = () => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateofbirth, setDateOfBirth] = useState('');

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        userid: userid,
        password: password,
        email: email,
        dateofbirth: dateofbirth,
      };

      const response = await fetchData('/user/register', data, 'POST');

      if (!response.message) {
        updateUser('authenticated', true);
        navigate('/Profile'); 
      }
    } catch (error) {
      console.log(error);
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
          <label htmlFor="dateofbirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateofbirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;
