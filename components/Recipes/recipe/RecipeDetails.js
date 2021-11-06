import style from "./RecipeDetails.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  faUser,
  faUsers,
  faUtensils,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import ButtonTwo from "../../UI/ButtonTwo";
import Button from "../../UI/Button";

const RecipeDetails = (props) => {
  return (
    <div className={style.details_wrapper}>
      <div className={style.details_left}>
        <div className={style.details_card}>
          <div className={style.detials_theme}>
            <div className={style.details_image_wrapper}>
              <div className={style.details_image}>
                <img src={props.image} alt={props.title} />
              </div>
            </div>
            <div className={style.details_header}>
              <h1>{props.title}</h1>
            </div>

            <div className={style.recipe_info}>
              <div className={style.difficulty}>
                <h5>Difficulty:</h5>
                {props.difficulty === "easy" && (
                  <FontAwesomeIcon width="1.5rem" icon={faStar} />
                )}
                {props.difficulty === "moderate" && (
                  <div>
                    <FontAwesomeIcon width="1.5rem" icon={faStar} />
                    <FontAwesomeIcon width="1.5rem" icon={faStar} />
                  </div>
                )}
                {props.difficulty === "challenging" && (
                  <div>
                    <FontAwesomeIcon width="1.5rem" icon={faStar} />
                    <FontAwesomeIcon width="1.5rem" icon={faStar} />
                    <FontAwesomeIcon width="1.5rem" icon={faStar} />
                  </div>
                )}
              </div>
              <div className={style.author}>
                <FontAwesomeIcon width="1.5rem" icon={faUser} />
                <h5>Author:</h5>
                <p>{props.author}</p>
              </div>
              <div className={style.course}>
                <FontAwesomeIcon width="1.5rem" icon={faUtensils} />
                <h5>Course:</h5>
                <p>{props.course}</p>
              </div>
              <div className={style.time}>
                <FontAwesomeIcon width="1.5rem" icon={faClock} />
                <p>{props.time} mins</p>
              </div>
              <div className={style.vegetarian}>
                <FontAwesomeIcon width="1.5rem" icon={faSeedling} />
                <h5>Vegetarian?</h5>
                <p>{props.vegetarian}</p>
              </div>
            </div>
          </div>

          <div className={style.servings}>
            <FontAwesomeIcon width="2rem" icon={faUsers} />
            <h5>Serves:</h5>
            <p>{props.serves}</p>
          </div>

          <div className={style.ingredients}>
            <h2>{`${props.ingredients.split(",").length} Ingredients`}</h2>
            <ul>
              {props.ingredients.split(",").map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.notes}>
          <h2>Notes</h2>
          <p>{props.notes}</p>
        </div>
      </div>

      <div className={style.details_right}>
        <div className={style.recipe_back}>
          <Link href="/" passHref>
            <ButtonTwo>Back to recipes</ButtonTwo>
          </Link>
        </div>
        <div className={style.recipe_header}>
          <h2>Recipe</h2>
        </div>
        <div className={style.recipe_steps}>
          <ul>
            {props.description
              .split(".")
              .map((step) => <li key={step}>{step}</li>)
              .slice(0, -1)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
