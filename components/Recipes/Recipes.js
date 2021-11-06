import { Fragment, useState, useRef } from "react";

import RecipeItem from "./recipe/RecipeItem";
import style from "./Recipes.module.scss";
import Link from "next/link";
import ButtonTwo from "../UI/ButtonTwo";

const Recipes = (props) => {
  const [librarySize, setLibrarySize] = useState(12);
  const [searchRecipe, setSearchRecipe] = useState("");
  const formRef = useRef();

  const showMoreRecipesHandler = () => {
    const newSize = librarySize + 8;
    setLibrarySize(newSize);
  };

  const filterRecipeHandler = (event) => {
    setSearchRecipe(event.target.value);
  };

  const resetFilterHandler = (event) => {
    event.preventDefault();
    setSearchRecipe("");
    formRef.current.reset();
  };

  return (
    <Fragment>
      <div className={style.filter_card_wrapper}>
        <div className={style.filter_card}>
          <form ref={formRef}>
            <input
              type="text"
              placeholder="Filter by recipe.."
              onChange={filterRecipeHandler}
            />
            <button onClick={resetFilterHandler}>Clear</button>
          </form>
        </div>
      </div>

      <ul className={style.container}>
        <div className={style.layout}>
          {props.library
            .slice(0, librarySize)
            .filter((value) => {
              if (searchRecipe == "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchRecipe.toLowerCase())
              ) {
                return value;
              }
            })
            .map((recipe) => (
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

      {librarySize > 12 && (
        <div className={style.show_more}>
          <ButtonTwo onClick={showMoreRecipesHandler}>Show more</ButtonTwo>
        </div>
      )}
    </Fragment>
  );
};

export default Recipes;
