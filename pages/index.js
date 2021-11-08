import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Recipes from "../components/Recipes/Recipes";
import HomepageHead from "../components/Layout/HomepageHead";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";

export default function Home() {
  const [library, setLibrary] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const showRecipeModal = () => {
    setShowModal(true);
  };

  const hideRecipeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetch(
      "https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    ).then((res) =>
      res
        .json()
        .then((data) => {
          const loadedRecipes = [];
          for (const key in data) {
            loadedRecipes.push({
              title: data[key].title,
              image: data[key].image,
              difficulty: data[key].difficulty,
              time: data[key].time,
              description: data[key].description,
              id: key,
            });
          }
          setLibrary(loadedRecipes.reverse());
        })
        .catch((err) => alert(`${err}`))
    );
  }, [refresh]);

  const refreshLibraryHandler = () => {
    setRefresh(Math.random());
  };

  return (
    <Fragment>
      <Head>
        <title>Food App</title>
        <meta name="description" content="Create your own recipes with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomepageHead />
        <Recipes library={library} onRefresh={refreshLibraryHandler} />
        <Footer />
      </Layout>
    </Fragment>
  );
}
