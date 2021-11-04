import style from "./RecipeForm.module.scss";
import { useRef, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import AuthContext from "../../store/auth-context";

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
              >
                <option value="easy">Easy</option>
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

          <div className={style.form_components}>
            <label htmlFor="description">Recipe details</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="15"
              ref={descriptionInputRef}
            ></textarea>
            <div className={style.form_components}>
              <label htmlFor="ingredients">Ingredients</label>
              <input
                id="ingredients"
                type="text"
                ref={ingredientsInputRef}
              ></input>
            </div>
            <div className={style.form_components}>
              <p>Vegeterian?</p>
              <label htmlFor="vegetarian">Yes</label>
              <input
                ref={vegeterianInputRef}
                id="vegetarian"
                type="checkbox"
                value="yes"
              ></input>
              <label htmlFor="vegetarian">No</label>
              <input
                ref={vegeterianInputRef}
                id="vegetarian"
                type="checkbox"
                value="no"
              ></input>
            </div>
            <div className={style.form_components}>
              <p>What course is it?</p>
              <input
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

            <div className={style.form_components}>
              <label htmlFor="serves">How many people does it serve?</label>
              <input id="serves" type="number" ref={servesInputRef}></input>
            </div>
            <label htmlFor="notes">Additional Notes (optional)</label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              ref={notesInputRef}
            ></textarea>
          </div>
          <div className={style.form_buttons}>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
