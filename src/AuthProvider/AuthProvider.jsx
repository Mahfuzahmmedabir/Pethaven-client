import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 
   
  

  const authInfo = {
    createNewUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
