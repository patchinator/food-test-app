import style from "./RecipeDetails.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RecipeDetails = (props) => {
  return (
    <div className={style.details_wrapper}>
      <div className={style.details}>
        <div className={style.details_header}>
          <h1>{props.title}</h1>

          {props.difficulty === "easy" && (
            <FontAwesomeIcon width="2rem" icon={faStar} />
          )}
          {props.difficulty === "moderate" && (
            <div>
              <FontAwesomeIcon width="2rem" icon={faStar} />
              <FontAwesomeIcon width="2rem" icon={faStar} />
            </div>
          )}
          {props.difficulty === "challenging" && (
            <div>
              <FontAwesomeIcon width="2rem" icon={faStar} />
              <FontAwesomeIcon width="2rem" icon={faStar} />
              <FontAwesomeIcon width="2rem" icon={faStar} />
            </div>
          )}
        </div>
        <div className={style.details_image}>
          <img src={props.image} alt={props.title} />
          <p className={style.time}>{props.time} mins</p>
        </div>
        <h2 className={style.details_sub_headers}>Ingredients:</h2>
        <p className={style.ingredients}>{props.ingredients}</p>
        <h2 className={style.details_sub_headers}>Recipe:</h2>
        <p className={style.description}>{props.description}</p>
        <div className={style.details_footer}>
          <Link href="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
