import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const UserContextUpdate = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserContextUpdate);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function saveUser(e) {
    setUser(e);
  }

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={saveUser}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
}
