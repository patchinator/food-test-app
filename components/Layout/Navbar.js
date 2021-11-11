import { useContext } from "react";
import Link from "next/link";

import style from "./Navbar.module.scss";
import AuthContext from "../../store/auth-context";
import ButtonTwo from "../UI/ButtonTwo";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <h2>
          <Link href="/">Recipe Library</Link>
        </h2>
      </div>
      <div className={style.navigation_list}>
        <ButtonTwo className={style.button}>
          <Link href="/">Recipes</Link>
        </ButtonTwo>
        <ButtonTwo className={style.button}>
          <Link href={isLoggedIn ? "/profile/create-recipe" : "/auth/log-in"}>
            Create Recipe
          </Link>
        </ButtonTwo>
        {isLoggedIn && (
          <ButtonTwo className={style.button}>
            <Link href="/profile/user">Profile</Link>
          </ButtonTwo>
        )}
        {!isLoggedIn && (
          <ButtonTwo className={style.button}>
            <Link href="/auth/log-in">Login</Link>
          </ButtonTwo>
        )}
        {isLoggedIn && (
          <ButtonTwo className={style.button}>
            <p onClick={logoutHandler}>Logout</p>
          </ButtonTwo>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
