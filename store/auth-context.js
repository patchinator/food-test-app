import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";

const AuthContext = React.createContext({
  token: "",
  displayName: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const router = useRouter();

  const getLocalStorageToken = () => {
    if (typeof window !== "undefined") {
      localStorage.getItem("token");
      localStorage.getItem("displayName");
    } else {
      return null;
    }
  };

  const [token, setToken] = useState(getLocalStorageToken);
  const [displayName, setDisplayName] = useState(getLocalStorageToken);

  const userLoggedIn = !!token;

  const loginHandler = (token, displayName) => {
    setToken(token);
    setDisplayName(displayName);

    localStorage.setItem("token", token);
    localStorage.setItem("displayName", displayName);
  };
  const logoutHandler = () => {
    setToken(null);

    localStorage.removeItem("token");
    router.push("/");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    displayName: displayName,
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
