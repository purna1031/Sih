import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  loggedInUser: null,
  setLoggedInUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Check for a logged-in user in localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
