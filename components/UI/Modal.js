import style from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={style.backdrop} onClick={props.onCloseModal}>
      <div className={style.modal}>
        <div className={style.modal_head}>
          <h1>{props.title}</h1>
          <p>{props.difficulty}</p>
          <div className={style.modal_time}>
            <p>{props.time} mins</p>
          </div>
        </div>

        <div className={style.modal_body}>
          <div className={style.modal_text}>
            <p>Garlic, Onions, Olive Oil, Onions, Mayonnaise, Tomatoes</p>
          </div>
          <div className={style.modal_text}>
            <p>{props.description}</p>
          </div>
        </div>

        <div className={style.modal_buttons}>
          <button onClick={props.onCloseModal}>back</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
