import style from './RecipeItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const RecipeItem = (props) => {
  return (
    <ul className={style.recipe_card}>
      <div className={style.recipe_card_header}>
        <h4>{props.title}</h4>
        <p></p>
      </div>
      <div>
        <div className={style.time}>
          <div>{props.time} mins</div>
        </div>
        <img src={props.image} alt={props.title} />
      </div>
    </ul>
  );
};

export default RecipeItem;