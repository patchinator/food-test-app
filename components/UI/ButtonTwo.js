import style from "./ButtonTwo.module.scss";

const ButtonTwo = (props) => {
  return (
    <button onClick={props.onClick} className={style.button}>
      {props.children}
    </button>
  );
};

export default ButtonTwo;
