import { useState, useRef, useContext } from "react";

import AuthContext from "../../store/auth-context";
import Link from "next/link";
import style from "./AuthForm.module.scss";
import { useRouter } from "next/router";
import ButtonTwo from "../UI/ButtonTwo";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // refs
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const enteredDisplayNameRef = useRef();

  const router = useRouter();
  const authCtx = useContext(AuthContext);

  const authModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    // TODO: Add Validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_KEY}`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              // TODO create error modal
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken, data.displayName);
          router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      const enteredDisplayName = enteredDisplayNameRef.current.value;
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_KEY}`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          displayName: enteredDisplayName,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              // TODO create error modal
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken);
          router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <h2 className={style.form_header}>
        {isLogin ? "Login" : "Create new Account"}
      </h2>
      {!isLogin && (
        <div className={style.form_components}>
          <label htmlFor="displayName">Create Username</label>
          <input type="text" id="displayName" ref={enteredDisplayNameRef} />
        </div>
      )}
      <div className={style.form_components}>
        <label htmlFor="email">
          {isLogin ? "Enter email" : "Enter new email"}
        </label>
        <input type="email" id="email" ref={enteredEmailRef} />
      </div>
      <div className={style.form_components}>
        <label htmlFor="password">
          {isLogin ? "Enter password" : "Create password"}
        </label>
        <input
          type="password"
          id="password"
          minLength="6"
          ref={enteredPasswordRef}
        />
      </div>
      <div className={style.form_buttons}>
        {!isLoading && (
          <ButtonTwo className={style.button}>
            {isLogin ? "Login" : "Create Account"}
          </ButtonTwo>
        )}
        {isLoading && <p>Sending...</p>}
        <ButtonTwo
          className={style.button}
          type="button"
          onClick={authModeHandler}
        >
          {isLogin ? "Create new Account" : "Login with existing Account"}
        </ButtonTwo>
        <ButtonTwo>
          <Link href="/">Back</Link>
        </ButtonTwo>
      </div>
    </form>
  );
};

export default AuthForm;
