import { useEffect, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import style from "./UserRecipes.module.scss";

const UserRecipes = () => {
  const authCtx = useContext(AuthContext);
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetch(
      "https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    ).then((res) =>
      res
        .json()
        .then((data) => {
          const loadedRecipes = [];
          for (const key in data) {
            if (data[key].author === authCtx.displayName)
              loadedRecipes.push({
                title: data[key].title,
                image: data[key].image,
                id: key,
              });
          }
          setRecipes(loadedRecipes);
        })
        .catch((err) => alert(`${err}`))
    );
  }, [authCtx.displayName]);

  return (
    <div>
      {recipes.map((recipe) => (
        <li key={recipe.id} className={style.recipe}>
          <div>{recipe.title}</div>
          <div className={style.image}>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        </li>
      ))}
    </div>
  );
};

export default UserRecipes;
