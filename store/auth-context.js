import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  // if token, user is logged in, if no token, user not logged in
  const [token, setToken] = useState(null);

  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    // sets token to the token being received
    setToken(token);
  };
  const logoutHandler = () => {
    // removes token on logout
    setToken(null);
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