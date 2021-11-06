import style from "./ButtonTwo.module.scss";

const ButtonTwo = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.button} ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default ButtonTwo;
