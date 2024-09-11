import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
  });

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };


  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
