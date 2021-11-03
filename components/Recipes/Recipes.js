import { Fragment, useState } from "react";

import RecipeItem from "./RecipeItem";
import style from "./Recipes.module.css";
import Link from "next/link";

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
          <Link
            key={recipe.id}
            href={"/recipe/[recipeId]"}
            as={`/recipe/${recipe.id}`}
            passHref
          >
            <a>
              <RecipeItem
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                key={recipe.id}
                difficulty={recipe.difficulty}
                time={recipe.time}
                onRefresh={props.onRefresh}
              />
            </a>
          </Link>
        ))}
      </ul>
      <div className={style.button}>
        <button onClick={showMoreRecipesHandler}>Show more</button>
      </div>
    </Fragment>
  );
};

export default Recipes;
