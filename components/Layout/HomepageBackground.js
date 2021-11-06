import style from "./HomepageBackground.module.scss";

const HomepageBackground = (props) => {
  return <div className={style.background}>{props.children}</div>;
};

export default HomepageBackground;
