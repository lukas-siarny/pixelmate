import React from "react";
import "./style.scss";
import Login from "../../pages/Homepage/Login";
import MobileNav from "./MobileNav";
import Modal from "../Modal";
import { useLocation } from "react-router-dom";

type Props = {
  navIsOpen: boolean;
  loginIsOpen: boolean;
  handleNavState: (isOpen: boolean) => void;
  handleLoginState: (isOpen: boolean) => void;
  handleModalOpen: () => void;
};

const MobileMenu: React.FC<Props> = ({
  handleNavState,
  navIsOpen,
  loginIsOpen,
  handleLoginState,
  handleModalOpen,
}) => {
  const location = useLocation();

  React.useEffect(() => {
    if (navIsOpen || loginIsOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
      return;
    } else {
      document.body.setAttribute("style", "");
    }
  }, [navIsOpen, loginIsOpen]);

  React.useEffect(() => {
    if (!navIsOpen) {
      return;
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleNavState(false);
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleNavState, navIsOpen]);

  return (
    <>
      <div
        className={`navmobile ${navIsOpen ? "nav-is-open" : ""} ${
          loginIsOpen ? "login-is-open" : ""
        }`}
      >
        <div className="navmobile__buttons">
          {location.pathname === "/" && (
            <button
              type="button"
              className="btn-navmobile btn-navmobile-login"
              onClick={() => {
                if (navIsOpen) {
                  handleNavState(false);
                }
                handleLoginState(!loginIsOpen);
              }}
            >
              <i className={`${loginIsOpen ? "fas" : "far"} fa-user`}></i>
            </button>
          )}

          <button
            className="btn-navmobile btn-navmobile-hamburger"
            type="button"
            onClick={() => {
              if (loginIsOpen) {
                handleLoginState(false);
              }
              handleNavState(!navIsOpen);
            }}
          >
            <span className="btn-navmobile-hamburger__line" />
            <span className="btn-navmobile-hamburger__line" />
            <span className="btn-navmobile-hamburger__line" />
          </button>
        </div>

        {navIsOpen && <MobileNav handleModalOpen={handleModalOpen} />}
        {loginIsOpen && (
          <Modal
            isOpen={loginIsOpen}
            isLogin={true}
            handleModalClose={() => {
              handleLoginState(false);
            }}
          >
            <Login />
          </Modal>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
