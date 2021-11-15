import style from "./UserRecipeCard.module.scss";

const UserRecipeCard = (props) => {
  return (
    <div className={style.recipe_container}>
      <div className={style.recipe_wrapper}>
        <div className={style.recipe}>
          <div className={style.title}>{props.title}</div>
          <div className={style.image}>
            <img src={props.image} alt={props.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRecipeCard;
