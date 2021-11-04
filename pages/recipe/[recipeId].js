import RecipeDetails from "../../components/Recipes/RecipeDetails";

const Details = (props) => {
  return (
    <RecipeDetails
      title={props.recipe.title}
      description={props.recipe.description}
      difficulty={props.recipe.difficulty}
      image={props.recipe.image}
      time={props.recipe.time}
      ingredients={props.recipe.ingredients}
    />
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
