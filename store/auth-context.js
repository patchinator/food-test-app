import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  // undefined token (not logged in) or already stored token (refresh page)
  const initialToken = localStorage.getItem('token');
  // if token, user is logged in, if no token, user not logged in
  const [token, setToken] = useState(null);

  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    // store token in local storage
    localStorage.setItem('token', token);
    // sets token to the token being received
    setToken(token);
  };
  const logoutHandler = () => {
    // removes token on logout
    setToken(null);
    // removes token from local storage
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  } 

  return <AuthContext.Provider value={contextValue}>
    {props.children}
  </AuthContext.Provider>
};

export default AuthContext;