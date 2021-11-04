import style from "./RecipeDetails.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const RecipeDetails = (props) => {
  return (
    <div className={style.details_wrapper}>
      <div className={style.details_left}>
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
              <p>Difficulty:</p>
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
              <p>TODO</p>
            </div>
            <div className={style.course}>
              <FontAwesomeIcon width="1.5rem" icon={faUtensils} />
              <h5>Course:</h5>
              <p>TODO</p>
            </div>
            <div className={style.time}>
              <FontAwesomeIcon width="1.5rem" icon={faClock} />
              <p>{props.time} mins</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.details_right}>
        <div className={style.details_sub_header_wrap}>
          <h2 className={style.details_sub_headers}>Ingredients</h2>
        </div>
        <p className={style.ingredients}>{props.ingredients}</p>
        <div className={style.details_sub_header_wrap}>
          <h2 className={style.details_sub_headers}>Recipe</h2>
        </div>
        <p className={style.description}>{props.description}</p>
        <div className={style.details_footer}>
          <Link href="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
