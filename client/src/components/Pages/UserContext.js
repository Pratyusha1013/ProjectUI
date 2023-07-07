import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userid: '', 
    password:'',
    authenticated: false, 
  });

     
  const updateUser = (name, value) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext};

