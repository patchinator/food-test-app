import RecipeDetails from "../../components/Recipes/recipe/RecipeDetails";
import Footer from "../../components/Layout/Footer";
import { Fragment } from "react";
import Link from "next/link";
import ButtonTwo from "../../components/UI/ButtonTwo";
import style from "./recipeId.module.scss";

const Details = (props) => {
  return (
    <Fragment>
      <RecipeDetails
        title={props.recipe.title}
        description={props.recipe.description}
        difficulty={props.recipe.difficulty}
        image={props.recipe.image}
        time={props.recipe.time}
        ingredients={props.recipe.ingredients}
        notes={props.recipe.notes}
        course={props.recipe.course}
        vegetarian={props.recipe.vegeterian}
        serves={props.recipe.serves}
        author={props.recipe.author}
      />
      <div className={style.recipe_back}>
        <Link href="/" passHref>
          <ButtonTwo>Back to recipes</ButtonTwo>
        </Link>
      </div>
      <Footer />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
  );
  const data = await res.json();

  let paths = Object.keys(data).map((key) => {
    return {
      params: { recipeId: key },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.recipeId;
  const res = await fetch(
    `https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes/${id}.json`
  );
  const data = await res.json();

  return {
    props: { recipe: data },
  };
};

export default Details;
