import { useEffect, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import style from "./UserRecipes.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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

  console.log(recipes);

  return (
    <section className>
      <div className={style.recipe_container}>
        <div className={style.recipe_wrapper}>
          <div
            className={style.recipe_list_title}
          >{`${authCtx.displayName}'s recipes`}</div>
          {recipes.length !== 0 &&
            recipes.map((recipe) => (
              <div key={recipe.id} className={style.recipe}>
                <div className={style.title}>{recipe.title}</div>
                <div className={style.image}>
                  <img src={recipe.image} alt={recipe.title} />
                </div>
              </div>
            ))}
        </div>
      </div>
      {recipes.length === 0 && <p>No recipes created</p>}
    </section>
  );
};

export default UserRecipes;
