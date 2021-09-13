import { Fragment, useState } from "react";

import RecipeItem from "./RecipeItem";
import style from "./Recipes.module.css";

const Recipes = (props) => {
  const [librarySize, setLibrarySize] = useState(12);

    const showMoreRecipesHandler = () => {
      const newSize = librarySize + 8;
      setLibrarySize(newSize);
    };

  return (
    <Fragment>
      <ul className={style.layout}>
        {props.library.slice(0, librarySize).map((recipe) => (
          <RecipeItem
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            difficulty={recipe.difficulty}
            time={recipe.time}
            onRefresh={props.onRefresh}
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
