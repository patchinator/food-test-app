import style from "./RecipeFormBackground.module.scss";

const RecipeFormBackground = (props) => {
  return <div className={style.background}>{props.children}</div>;
};

export default RecipeFormBackground;
