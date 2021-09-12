import { Fragment } from "react";
import Head from "next/head";

import style from "../styles/Home.module.css";
import RecipeForm from "../components/Recipes/RecipeForm";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Food App</title>
        <meta name="description" content="Create your own recipes with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.body}>
        <p>Food</p>
        <p>Food</p>
        <p>Food</p>
      </div>
    </Fragment>
  );
}
