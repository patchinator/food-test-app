import { Fragment, useEffect, useState } from "react";

import RecipeItem from "./RecipeItem";
import style from "./Recipes.module.css";

const Recipes = (props) => {
  const [library, setLibrary] = useState([]);
  const [librarySize, setLibrarySize] = useState(12);

  const showMoreRecipesHandler = () => {
    const newSize = librarySize + 8;
    setLibrarySize(newSize);
  };

  useEffect(() => {
    fetch(
      "https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    ).then((res) =>
      res.json().then((data) => {
        const loadedRecipes = [];
        for (const key in data) {
          loadedRecipes.push({
            title: data[key].title,
            image: data[key].image,
            difficulty: data[key].difficulty,
            time: data[key].time,
            description: data[key].description,
            id: key,
          });
        }
        setLibrary(loadedRecipes.reverse());
      })
    );
  }, []);

  return (
    <Fragment>
      <ul className={style.layout}>
        {library.slice(0, librarySize).map((recipe) => (
          <RecipeItem
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            difficulty={recipe.difficulty}
            time={recipe.time}
            onDeleteRecipe={props.onRemoveRecipe}
          />
        ))}
      </ul>
      <div className={style.button}>
        <button onClick={showMoreRecipesHandler}>Show more</button>
      </div>
    </Fragment>
  );
};

export default Recipes;
