import style from "./RecipeForm.module.scss";
import { useRef, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";

const RecipeForm = (props) => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  // refs
  const titleInputRef = useRef();
  const difficultyInputRef = useRef();
  const prepTimeInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const ingredientsInputRef = useRef();

  const vegeterianInputRef = useRef();
  const servesInputRef = useRef();
  const courseInputRef = useRef();
  const notesInputRef = useRef();

  const submitRecipeHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDifficulty = difficultyInputRef.current.value;
    const enteredTime = prepTimeInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;

    const enteredVegeterian = vegeterianInputRef.current.value;
    const enteredServes = servesInputRef.current.value;
    const enteredCourse = courseInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;

    fetch(
      `https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=${authCtx.token}`,
      {
        method: "POST",
        body: JSON.stringify({
          title: enteredTitle,
          author: authCtx.displayName,
          difficulty: enteredDifficulty,
          time: enteredTime,
          image: enteredImage,
          description: enteredDescription,
          ingredients: enteredIngredients,
          vegeterian: enteredVegeterian,
          serves: enteredServes,
          course: enteredCourse,
          notes: enteredNotes,
        }),
      }
    ).then(router.push("/"));
  };

  return (
    <div className={style.create_recipe_container}>
      <div className={style.create_recipe}>
        <form onSubmit={submitRecipeHandler} className={style.form}>
          <h1 className={style.form_header}>Create new Recipe</h1>

          <div className={style.create_recipe_top}>
            <div className={style.recipe_title}>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" ref={titleInputRef}></input>
            </div>
            <div className={style.recipe_difficulty}>
              <label htmlFor="difficulty">Difficulty</label>
              <select
                name="difficulty"
                id="difficulty"
                ref={difficultyInputRef}
                className="pt-2"
              >
                <option selected value="easy">
                  Easy
                </option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
              </select>
            </div>
            <div className={style.recipe_prep}>
              <label htmlFor="prepTime">Preparation Time (mins)</label>
              <input id="prepTime" type="number" ref={prepTimeInputRef}></input>
            </div>
            <div className={style.recipe_image}>
              <label htmlFor="image">Image</label>
              <input id="image" type="url" ref={imageInputRef}></input>
            </div>
          </div>

          <div className={style.recipe_middle}>
            <div className={style.recipe_vegetarian}>
              <p>Vegetarian?</p>
              <div>
                <div>
                  <input
                    ref={vegeterianInputRef}
                    id="vegetarian"
                    type="checkbox"
                    value="yes"
                  ></input>
                  <label htmlFor="vegetarian">Yes</label>
                </div>
                <div>
                  <input
                    ref={vegeterianInputRef}
                    id="vegetarian"
                    type="checkbox"
                    value="no"
                  ></input>
                  <label htmlFor="vegetarian">No</label>
                </div>
              </div>
            </div>
            <div className={style.recipe_course}>
              <p>What course is it?</p>
              <div>
                <input
                  required
                  type="radio"
                  value="starter"
                  name="course"
                  ref={courseInputRef}
                ></input>
                <label htmlFor="starter">Starter</label>
                <input
                  type="radio"
                  value="main"
                  name="course"
                  ref={courseInputRef}
                ></input>
                <label htmlFor="main">Main</label>
                <input
                  type="radio"
                  value="dessert"
                  name="course"
                  ref={courseInputRef}
                ></input>
                <label htmlFor="dessert">Dessert</label>

                <input
                  type="radio"
                  value="nibble"
                  name="course"
                  ref={courseInputRef}
                ></input>
                <label htmlFor="nibble">Nibble</label>
              </div>
            </div>
            <div className={style.recipe_serves}>
              <label htmlFor="serves">How many people does it serve?</label>
              <input id="serves" type="number" ref={servesInputRef}></input>
            </div>
          </div>

          <div className={style.create_recipe_bottom}>
            <div className={style.recipe_details}>
              <label htmlFor="description">Recipe details</label>
              <p className={style.additional_info}>
                Include the steps to creating your wonderful dish! Simply
                seperate each step with a full stop.
              </p>
              <textarea
                name="description"
                id="description"
                rows="15"
                ref={descriptionInputRef}
              ></textarea>
            </div>
            <div>
              <div className={style.recipe_ingredients}>
                <label htmlFor="ingredients">Ingredients</label>
                <p className={style.additional_info}>
                  List all the ingredients (and measurements)! Seperate each
                  ingredient with a comma.
                </p>
                <input
                  id="ingredients"
                  type="text"
                  ref={ingredientsInputRef}
                ></input>
              </div>
              <div className={style.recipe_notes}>
                <label htmlFor="notes">Additional Notes (optional)</label>
                <p className={style.additional_info}>
                  Add any additional notes to your recipe. They could be
                  suggestions for substitute ingredients, similar recipes,
                  culinary tips and tricks... anything!
                </p>
                <textarea
                  name="notes"
                  id="notes"
                  cols="80"
                  rows="8"
                  ref={notesInputRef}
                ></textarea>
              </div>
            </div>
          </div>
          <div className={style.form_buttons}>
            <Button>Create Recipe</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
