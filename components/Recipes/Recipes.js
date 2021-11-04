import { Fragment, useState } from "react";

import RecipeItem from "./RecipeItem";
import style from "./Recipes.module.scss";
import Link from "next/link";
import Button from "../UI/Button";

const Recipes = (props) => {
  const [librarySize, setLibrarySize] = useState(12);

  const showMoreRecipesHandler = () => {
    const newSize = librarySize + 8;
    setLibrarySize(newSize);
  };

  return (
    <Fragment>
      <ul className={style.container}>
        <div className={style.layout}>
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
        </div>
      </ul>

      <div className={style.show_more}>
        <Button onClick={showMoreRecipesHandler}>Show more</Button>
      </div>
    </Fragment>
  );
};

export default Recipes;
