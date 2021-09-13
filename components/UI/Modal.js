import style from './Modal.module.css';

const Modal = () => {
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <div className={style.modal_head}>
          <h1>Title</h1>
          <p>Difficulty</p>
          <p>Time</p>
        </div>
        <div className={style.modal_body}>
          <p>Ingredients</p>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;