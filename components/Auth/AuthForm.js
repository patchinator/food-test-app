import { useState } from "react";
import style from "./AuthForm.module.css";
import Link from "next/link";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const authModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
      <h2 className={style.form_header}>
        {isLogin ? "Login" : "Create new Account"}
      </h2>
      <form className={style.form}>
        <div className={style.form_components}>
          <label htmlFor="email">
            {isLogin ? "Enter email" : "Enter new email"}
          </label>
          <input type="email" id="email" />
        </div>
        <div className={style.form_components}>
          <label htmlFor="password">
            {isLogin ? "Enter password" : "Create password"}
          </label>
          <input type="password" id="password" minLength="6" />
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
