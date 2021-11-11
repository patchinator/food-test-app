import style from "./ProfileBackground.module.scss";

const ProfileBackground = (props) => {
  return <div className={style.background}>{props.children}</div>;
};

export default ProfileBackground;
