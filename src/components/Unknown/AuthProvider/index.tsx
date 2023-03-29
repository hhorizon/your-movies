import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<User | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
