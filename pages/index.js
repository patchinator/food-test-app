import { Fragment } from "react";
import Head from "next/head";
import Recipes from "../components/Recipes/Recipes";
import HomepageHead from "../components/Layout/HomepageHead";

  const removeRecipeHandler = () => {
    setLibrary(library.filter((recipe) => recipe.id != id));
  };

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Food App</title>
        <meta name="description" content="Create your own recipes with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageHead />
      <Recipes onRemoveRecipe={removeRecipeHandler}/>
    </Fragment>
  );
}
