import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodging, setLodging] = useState(true);
  const createNewUser = (email, password) => {
    setLodging(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLodging(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithFacebook = () => {
    setLodging(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const signInWithEmailAndPass = (email, password) => {
    setLodging(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setUser(null)
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setLodging(false);
      setUser(currentUser);
      console.log(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    createNewUser,
    loginWithGoogle,
    user,
    lodging,
    loginWithFacebook,
    signInWithEmailAndPass,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
