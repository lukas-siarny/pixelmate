import React from "react";
import "./style.scss";
import { ReactComponent as ButtonClose } from "../../assets/btn-close.svg";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleModalClose: () => void;
  isLogin?: boolean;
  title?: string;
};

const Modal: React.FC<Props> = ({
  children,
  isOpen,
  handleModalClose,
  isLogin = false,
  title = "Modálne okno",
}) => {
  React.useEffect(() => {
    document.body.setAttribute("style", "overflow: hidden;");
    return () => {
      document.body.setAttribute("style", "");
    };
  });

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        (e.target as Element).classList.contains("modal") ||
        (e.target as Element).classList.contains("modal__wrapper")
      ) {
        handleModalClose();
      }
    };
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleModalClose, isOpen]);

  return (
    <div
      className={`modal ${isOpen ? "is-open" : ""}  ${
        isLogin ? "is-login" : ""
      }`}
    >
      <div className="modal__wrapper">
        {isLogin ? (
          <>{children}</>
        ) : (
          <div className="modal__element">
            <button
              type="button"
              className="modal__btn-close"
              onClick={handleModalClose}
            >
              <ButtonClose />
            </button>
            <h2 className="modal__title">{title}</h2>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
