import style from "./RecipeForm.module.css";

const RecipeForm = () => {
  return (
    <div>
      <h1 className={style.form_header}>Create new Recipe</h1>
      <form className={style.form}>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.form_layout}>
              <label htmlFor="title">Title</label>
              <input id="title" type="text"></input>
            </div>
            <div className={style.form_components}>
              <label htmlFor="difficulty">Difficulty</label>
              <select name="difficulty" id="difficulty">
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
              </select>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.form_components}>
              <label htmlFor="prepTime">Preparation Time (mins)</label>
              <input id="prepTime" type="number"></input>
            </div>
            <div className={style.form_components}>
              <label htmlFor="image">Image</label>
              <input id="image" type="url"></input>
            </div>
          </div>
        </div>
        <div className={style.form_components}>
          <label htmlFor="description">Recipe details</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="15"
          ></textarea>
        </div>
        <div className={style.form_buttons}>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
