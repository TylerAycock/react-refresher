import classes from "./Modal.module.css";

function Modal({ onClose, children }) {
  const handleModalClick = (e) => {
    // Stop the click event from propagating to the backdrop
    e.stopPropagation();
  };
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal} onClick={handleModalClick}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
