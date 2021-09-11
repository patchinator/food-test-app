import { useState, useRef } from "react";
import style from "./AuthForm.module.css";
import Link from "next/link";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();

  const authModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    // TODO: Add Validation

    if (isLogin) {
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRN-bdOXYBhvmn76g3QcjL9jYAWXFYHHs`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(res => {
        if (res.ok) {
          // if the response is successful
        } else {
          // if the response fails
          return res.json().then(data => {
            console.log(data)
          })
        }
      })
    }
  };

  return (
    <div>
      <h2 className={style.form_header}>
        {isLogin ? "Login" : "Create new Account"}
      </h2>
      <form onSubmit={submitHandler} className={style.form}>
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
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button type="button" onClick={authModeHandler}>
            {isLogin ? "Create new Account" : "Login with existing Account"}
          </button>
        </div>
      </form>
      <div className={style.form_back}>
        <Link href="/">Back</Link>
      </div>
    </div>
  );
};

export default AuthForm;
