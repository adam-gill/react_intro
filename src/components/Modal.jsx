import "./Modal.css";

function Modal({ title, onTodoDelete }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            onClick={onTodoDelete}
            className="btn btn__cancel"
          >
            Cancel
          </button>
          <button
            onClick={onTodoDelete}
            className="btn"
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
