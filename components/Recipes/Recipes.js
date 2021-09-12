import { useEffect, useState } from "react";

import RecipeItem from "./RecipeItem";

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
            time: data[key].enteredTime,
            description: data[key].description,
            id: key,
          });
        }
        setLibrary(loadedRecipes.reverse());
      })
    );
  }, []);

  return (
    <ul>
      {library.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          descsription={recipe.description}
          image={recipe.image}
          difficulty={recipe.difficulty}
          time={recipe.enteredTime}
        />
      ))}
    </ul>
  );
};

export default Recipes;
