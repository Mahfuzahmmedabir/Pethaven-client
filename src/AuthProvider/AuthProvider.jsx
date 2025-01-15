import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodging, setLoading] = useState(true);
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const signInWithEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updeateProfile = (name,photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false);
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
    updeateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
