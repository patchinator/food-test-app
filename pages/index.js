import { Fragment } from "react";
import Head from "next/head";
import Recipes from "../components/Recipes/Recipes";

import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Food App</title>
        <meta name="description" content="Create your own recipes with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recipes />
    </Fragment>
  );
}
