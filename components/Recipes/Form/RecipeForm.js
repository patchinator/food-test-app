import style from "./RecipeForm.module.scss";
import { useRef, useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import AuthContext from "../../../store/auth-context";
import ButtonTwo from "../../UI/ButtonTwo";
import Link from "next/link";

import { storage } from "../../../store/firebase";

const RecipeForm = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  // states for form
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState("");
  const [isVegeterian, setIsVegeterian] = useState();
  const [courseType, setCourseType] = useState();

  // refs for form
  const titleInputRef = useRef();
  const difficultyInputRef = useRef();
  const prepTimeInputRef = useRef();
  const descriptionInputRef = useRef();
  const ingredientsInputRef = useRef();
  const servesInputRef = useRef();
  const notesInputRef = useRef();

  const vegeterianHandler = (event) => {
    setIsVegeterian(event.target.value);
  };

  const courseHandler = (event) => {
    setCourseType(event.target.value);
  };

  const uploadImageHandler = (event) => {
    if (event.target.files[0]) {
      setImageAsFile(event.target.files[0]);
    }
  };

  const submitImageHandler = (event) => {
    event.preventDefault();

    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((url) => {
            setImageAsUrl(url);
          });
      }
    );
  };

  const submitRecipeHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDifficulty = difficultyInputRef.current.value;
    const enteredTime = prepTimeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;
    const enteredServes = servesInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;

    fetch(
      `${process.env.NEXT_PUBLIC_FIREBASE_DB}/recipes.json?auth=${authCtx.token}`,
      {
        method: "POST",
        body: JSON.stringify({
          title: enteredTitle,
          author: authCtx.displayName,
          difficulty: enteredDifficulty,
          time: enteredTime,
          image: imageAsUrl,
          description: enteredDescription,
          ingredients: enteredIngredients,
          vegeterian: isVegeterian,
          serves: enteredServes,
          course: courseType,
          notes: enteredNotes,
        }),
      }
    ).then(router.push("/"));
  };

  return (
    <div className={style.create_recipe_container}>
      <div className={style.create_recipe}>
        <form className={style.image_upload} onSubmit={submitImageHandler}>
          <div>
            <h1 className={style.form_header}>Create new Recipe</h1>
            <div className={style.recipe_image}>
              <label
                className={imageAsUrl && style.successful_upload}
                htmlFor="image"
              >
                Upload an image
              </label>
              <div>
                <input
                  className={style.file_input}
                  id="image"
                  type="file"
                  onChange={uploadImageHandler}
                />
                {!imageAsUrl && <ButtonTwo>upload</ButtonTwo>}
                {imageAsUrl && (
                  <ButtonTwo pointerEvents="none">uploaded</ButtonTwo>
                )}
              </div>
            </div>
          </div>
        </form>
        <form onSubmit={submitRecipeHandler} className={style.form}>
          <div className={style.create_recipe_top}>
            <div className={style.recipe_title}>
              <label htmlFor="title">Title</label>
              <input
                required
                id="title"
                type="text"
                ref={titleInputRef}
              ></input>
            </div>
            <div className={style.recipe_difficulty}>
              <label htmlFor="difficulty">Difficulty</label>
              <select
                name="difficulty"
                id="difficulty"
                ref={difficultyInputRef}
                className="pt-2"
              >
                <option defaultValue value="easy">
                  Easy
                </option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
              </select>
            </div>
            <div className={style.recipe_prep}>
              <label htmlFor="prepTime">Preparation Time (mins)</label>
              <input
                required
                id="prepTime"
                type="number"
                ref={prepTimeInputRef}
              ></input>
            </div>
          </div>

          <div className={style.recipe_middle}>
            <div className={style.recipe_vegetarian}>
              <p>Vegetarian?</p>
              <div>
                <div>
                  <input
                    required
                    onChange={vegeterianHandler}
                    name="vegetarian"
                    type="radio"
                    value="yes"
                  ></input>
                  <label htmlFor="vegetarian">Yes</label>
                </div>
                <div>
                  <input
                    onChange={vegeterianHandler}
                    name="vegetarian"
                    type="radio"
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
                  onChange={courseHandler}
                ></input>
                <label htmlFor="starter">Starter</label>
                <input
                  type="radio"
                  value="main"
                  name="course"
                  onChange={courseHandler}
                ></input>
                <label htmlFor="main">Main</label>
                <input
                  type="radio"
                  value="dessert"
                  name="course"
                  onChange={courseHandler}
                ></input>
                <label htmlFor="dessert">Dessert</label>

                <input
                  type="radio"
                  value="nibble"
                  name="course"
                  onChange={courseHandler}
                ></input>
                <label htmlFor="nibble">Nibble</label>
              </div>
            </div>
            <div className={style.recipe_serves}>
              <label htmlFor="serves">How many people does it serve?</label>
              <input
                required
                id="serves"
                type="number"
                ref={servesInputRef}
              ></input>
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
                required
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

                <textarea
                  required
                  name="ingredients"
                  id="ingredients"
                  rows="15"
                  ref={ingredientsInputRef}
                ></textarea>
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
            <ButtonTwo className={style.button}>Create Recipe</ButtonTwo>
            <ButtonTwo className={style.button} type="button">
              <Link href="/">Back</Link>
            </ButtonTwo>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
