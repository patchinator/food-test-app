import style from "./AuthBackground.module.scss";

const AuthBackground = (props) => {
  return <div className={style.background}>{props.children}</div>;
};

export default AuthBackground;
