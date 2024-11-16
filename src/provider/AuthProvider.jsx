import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase_config";
//Context
export const AuthContext = createContext();

//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //signIn
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //Check User login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  //
const login = (email, pass)=>{
    return signInWithEmailAndPassword(auth, email, pass)
}

  //Logout
  const logOut = () => {
    return signOut(auth);
  };
  //Global object to send with context
  const userInfo = {
    user,
    setUser,
    createUser,
    login,
    logOut,
  };

//   console.log(user);
  //
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
