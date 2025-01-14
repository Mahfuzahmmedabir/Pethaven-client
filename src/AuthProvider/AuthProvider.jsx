import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const creatuser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }
 
   
  

  const authInfo = {
    creatuser,
   
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
