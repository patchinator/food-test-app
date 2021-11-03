import style from "./RecipeDetails.module.css";

const RecipeDetails = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={style.description}>{props.description}</p>
    </div>
  );
};

export default RecipeDetails;
