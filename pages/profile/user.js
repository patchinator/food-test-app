import ProfileForm from "../../components/Profile/ProfileForm";
import ProfileBackground from "../../components/Profile/ProfileBackground";
import ButtonTwo from "../../components/UI/ButtonTwo";
import Link from "next/link";
import style from "./user.module.scss";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import UserRecipeCard from "../../components/Profile/UserRecipeCard";

export default function UpdatePassword(props) {
  const authCtx = useContext(AuthContext);
  let loadedRecipes = [];

  for (const key in props.recipe) {
    if (props.recipe[key].author === authCtx.displayName) {
      loadedRecipes.push({
        title: props.recipe[key].title,
        image: props.recipe[key].image,
        id: key,
      });
    }
  }

  return (
    <ProfileBackground>
      <div>
        {loadedRecipes.length !== 0 &&
          loadedRecipes.map((recipe) => (
            <UserRecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
      </div>
      <ProfileForm />
      <div className={style.back}></div>
      <div className={style.button}>
        <ButtonTwo>
          <Link href="/">Back</Link>
        </ButtonTwo>
      </div>
    </ProfileBackground>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
  );
  const data = await response.json();

  return {
    props: {
      recipe: data,
    },
  };
};
