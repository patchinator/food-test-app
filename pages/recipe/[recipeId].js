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

const Details = (props) => {
  return (
    <div>
      <h1>{props.recipe.title}</h1>
    </div>
  );
};

export default Details;
