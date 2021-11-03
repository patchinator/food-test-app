import style from "./RecipeDetails.module.scss";
import Link from "next/link";

const RecipeDetails = (props) => {
  return (
    <div className={style.details_wrapper}>
      <div className={style.details}>
        <div className={style.details_header}>
          <h1>{props.title}</h1>
          <p className={style.difficulty}>{props.difficulty}</p>
        </div>
        <div className={style.details_image}>
          <img src={props.image} alt={props.title} />
          <p className={style.time}>{props.time} mins</p>
        </div>
        <p>Ingredients:</p>
        <p className={style.ingredients}>{props.ingredients}</p>
        <p>Recipe:</p>
        <p className={style.description}>{props.description}</p>
        <div className={style.details_footer}>
          <Link href="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
