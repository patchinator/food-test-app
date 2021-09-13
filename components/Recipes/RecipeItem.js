import style from "./RecipeItem.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

const RecipeItem = (props) => {
  return (
    <motion.li className={style.recipe_card} whileHover={{
      scale: [1, 1.04, 1.03],
      transition: {
        duration: 0.3
      }
    }}>
      <div className={style.recipe_card_header}>
        <h4>{props.title}</h4>
        <p>{props.difficulty}</p>
      </div>
      <div>
        <div className={style.time}>
          <div>{props.time} mins</div>
        </div>
        <img src={props.image} alt={props.title} />
      </div>
    </motion.li>
  );
};

export default RecipeItem;
