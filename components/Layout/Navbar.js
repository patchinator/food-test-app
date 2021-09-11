import style from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
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
          <li>
            <Link href="/">Profile</Link>
          </li>
          <li>
            <Link href="/">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
