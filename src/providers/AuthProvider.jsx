import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const createUser = ({ email, password, name, image }, callback = null) => {
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      updateProfile(user, {
        displayName: name,
        photoURL: image,
      });
      callback && callback(user);
    });
  };
  const logIn = ({ email, password }, callback = null) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        callback && callback(user);
      })
      .catch(() => {
        alert("Invalid email or password");
      });
  };
  const logOut = () => auth.signOut();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, setUser);
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    logOut,
    logIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
