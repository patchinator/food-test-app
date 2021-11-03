import style from "./RecipeDetails.module.css";
import Image from "next/dist/client/image";

const RecipeDetails = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={style.description}>{props.description}</p>
      <p className={style.description}>{props.ingredients}</p>
      <p className={style.time}>{props.time}</p>
      <p className={style.difficulty}>{props.difficulty}</p>
      <Image src={props.image} alt={props.title}></Image>
    </div>
  );
};

export default RecipeDetails;
