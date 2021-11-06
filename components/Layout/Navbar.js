import { useContext } from "react";
import Link from "next/link";

import style from "./Navbar.module.scss";
import AuthContext from "../../store/auth-context";

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
      <div>
        <ul className={style.navigation_list}>
          <li>
            <Link href="/">Recipes</Link>
          </li>
          <li>
            <Link href="/profile/create-recipe">Create Recipe</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link href="/profile/update-password">Profile</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link href="/auth/log-in">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <p onClick={logoutHandler}>Logout</p>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
