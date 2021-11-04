import style from "./RecipeForm.module.css";
import { useRef, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import AuthContext from "../../store/auth-context";

const RecipeForm = (props) => {
  const router = useRouter();
  const titleInputRef = useRef();
  const difficultyInputRef = useRef();
  const prepTimeInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const ingredientsInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitRecipeHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDifficulty = difficultyInputRef.current.value;
    const enteredTime = prepTimeInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;

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
        }),
      }
    ).then(router.push("/"));
  };

  return (
    <div className={style.create_recipe}>
      <div className={style.form_gap}></div>
      <form onSubmit={submitRecipeHandler} className={style.form}>
        <h1 className={style.form_header}>Create new Recipe</h1>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.form_layout}>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" ref={titleInputRef}></input>
            </div>
            <div className={style.form_components}>
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
          </div>
          <div className={style.column}>
            <div className={style.form_components}>
              <label htmlFor="prepTime">Preparation Time (mins)</label>
              <input id="prepTime" type="number" ref={prepTimeInputRef}></input>
            </div>
            <div className={style.form_components}>
              <label htmlFor="image">Image</label>
              <input id="image" type="url" ref={imageInputRef}></input>
            </div>
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
        </div>
        <div className={style.form_buttons}>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
