import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const AuthContext = React.createContext({
  token: "",
  displayName: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let initialToken, initialDisplayName;
  const router = useRouter();

  if (typeof window !== "undefined") {
    initialToken = localStorage.getItem("token");
    initialDisplayName = localStorage.getItem("displayName");
  }

  const [token, setToken] = useState(initialToken);
  const [displayName, setDisplayName] = useState(initialDisplayName);

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
    localStorage.removeItem("DisplayName");
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
