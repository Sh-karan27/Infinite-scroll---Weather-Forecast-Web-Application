import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export const userProfile = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
  });

  const value = {
    userInfo,
    setUserInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
