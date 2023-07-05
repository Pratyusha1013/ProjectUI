import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userid: '', 
    password:'',
    email:'',
    dateOfBirth:'',
    authenticated: false, 
  });

  const updateUser = (id, value) => {
    setUser(prevUser => ({ ...prevUser, [id]: value }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext};

