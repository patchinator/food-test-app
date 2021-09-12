import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const router = useRouter();
  // Because NextJS is serverside + clientside, conditional to check if on server
  // before accessing localstorage
  const getLocalStorageToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    } else {
      return null;
    }
  };

  // if token, user is logged in, if no token, user not logged in
  const [token, setToken] = useState(getLocalStorageToken);

  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    // store token in local storage
    localStorage.setItem("token", token);
    // sets token to the token being received
    setToken(token);
  };
  const logoutHandler = () => {
    // removes token on logout
    setToken(null);
    // removes token from local storage
    localStorage.removeItem("token");
    router.push("/")
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
