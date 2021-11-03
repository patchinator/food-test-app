import style from "./RecipeDetails.module.css";

const RecipeDetails = (props) => {
  return (
    <div className={style.details_wrapper}>
      <div className={style.details}>
        <h1>{props.title}</h1>
        <p className={style.description}>{props.description}</p>
        <p className={style.ingredients}>{props.ingredients}</p>
        <p className={style.time}>{props.time}</p>
        <p className={style.difficulty}>{props.difficulty}</p>
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default RecipeDetails;
