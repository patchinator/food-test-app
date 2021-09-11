import { Fragment } from 'react';
import Navbar from './Navbar';
import style from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={style.layout}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;