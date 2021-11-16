import style from "./UserRecipeCard.module.scss";
import { motion } from "framer-motion";

const UserRecipeCard = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className={style.recipe_wrapper}>
        <div className={style.recipe}>
          <div className={style.title}>{props.title}</div>
          <div className={style.image}>
            <img src={props.image} alt={props.title} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserRecipeCard;
