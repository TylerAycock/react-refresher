import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const nav = useNavigate();

  const handleModalClick = (e) => {
    // Stop the click event from propagating to the backdrop
    e.stopPropagation();
  };

  function closehandler() {
    nav(".."); //can also use "/" the ".." is the same as cd ..
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closehandler}>
        <dialog open className={classes.modal} onClick={handleModalClick}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
