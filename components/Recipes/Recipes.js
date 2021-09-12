import { useEffect, useState } from "react";

import RecipeItem from "./RecipeItem";
import style from './Recipes.module.css';

const Recipes = () => {
  const [library, setLibrary] = useState([]);

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
    <ul className={style.layout}>
      {library.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          difficulty={recipe.difficulty}
          time={recipe.time}
        />
      ))}
    </ul>
  );
};

export default Recipes;
