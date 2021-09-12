const RecipeForm = () => {
  return (
    <div>
      <h1>Create new Recipe</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text"></input>
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <input id="difficulty" type="range" min="1" max="5"></input>
        </div>
        <div>
          <label htmlFor="prepTime">Preparation Time (mins)</label>
          <input id="prepTime" type="number"></input>
        </div>
        <div>
          <label htmlFor="description">Recipe details</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input id="image" type="url"></input>
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
