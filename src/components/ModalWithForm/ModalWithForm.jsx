import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
}) {
  return (
    <>
      <div
        className={`modal ${activeModal === "add-garment" && "modal_opened"}`}
      >
        <div className="modal__container">
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={handleCloseClick}
            type="button"
            className="modal__close"
            id="clothes-button-close"
            aria-label="Close button"
          ></button>
          <form className="modal__form" name="add-clothes-form">
            {children}
            <button
              type="submit"
              className="modal__submit"
              id="form-button-close"
              aria-label="Add garment button"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;
