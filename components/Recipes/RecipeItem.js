import style from "./RecipeItem.module.css";
import { faStar, faTrash, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";

import { motion } from "framer-motion";
import Modal from "../../components/UI/Modal";

const RecipeItem = (props) => {
  const deleteRecipeHandler = () => {
    fetch(
      `https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes/${props.id}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.ok) {
        props.onRefresh();
      } else {
        alert("Delete failed");
      }
    });
  };

  return (
    <Fragment>
      <motion.li
        className={style.recipe_card}
        whileHover={{
          scale: [1, 1.04, 1.03],
          transition: {
            duration: 0.3,
          },
        }}
      >
        <div className={style.recipe_card_header}>
          <h4>{props.title}</h4>
          <p>{props.difficulty}</p>
        </div>
        <div>
          <div className={style.time}>
            <div>{props.time} mins</div>
          </div>
          <div className={style.remove}>
            {/* <button onClick={deleteRecipeHandler}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className={style.info}>
            <button onClick={props.onOpenModal}>
              <FontAwesomeIcon icon={faFileAlt} />
            </button> */}
          </div>
          <img src={props.image} alt={props.title} />
        </div>
      </motion.li>
      {props.modal && (
        <Modal
          title={props.title}
          description={props.description}
          time={props.time}
          difficulty={props.difficulty}
          onCloseModal={props.onCloseModal}
          onDeleteRecipe={deleteRecipeHandler}
        />
      )}
    </Fragment>
  );
};

export default RecipeItem;
