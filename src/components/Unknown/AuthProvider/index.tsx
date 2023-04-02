import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface AuthProviderProps {
  children: React.ReactElement;
}

type AuthContextType = {
  user: User | null;
  loadingAuth: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loadingAuth: false,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    setLoadingAuth(true);

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoadingAuth(false);
      } else {
        setUser(null);
        setLoadingAuth(false);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
