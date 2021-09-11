import { useContext } from "react";
import Link from "next/link";

import style from "./Navbar.module.css";
import AuthContext from "../../store/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={style.navbar}>
      <div className={style.logo}>
        <h2>
          <Link href="/">Food App</Link>
        </h2>
      </div>
      <div>
        <ul className={style.navigation_list}>
          <li>
            <Link href="/">Recipes</Link>
          </li>
          <li>
            <Link href="/">Create Recipe</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link href="/">Profile</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link href="/auth/log-in">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link href="/auth/log-in">Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
