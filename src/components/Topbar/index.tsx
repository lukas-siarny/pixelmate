import React from "react";
import "./style.scss";
import { ReactComponent as TopbarLogoWhite } from "../../assets/pixelmate-logo-white.svg";
import { ReactComponent as TopbarLogoBlack } from "../../assets/pixelmate-logo-dark.svg";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import MenuList from "./MenuList";
import Modal from "../Modal";
import InputText from "../InputText";
import Button from "../Button";

type Props = {
  dark?: boolean;
};

const Topbar: React.FC<Props> = ({ dark = true }) => {
  const [navScrolled, setNavScrolled] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [navIsOpen, setNavIsOpen] = React.useState(false);
  const [loginIsOpen, setLoginIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 1) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleModalForm = () => {
    setEmailError(false);

    console.log(email);
    let error = false;

    if (email === "") {
      error = true;
      setEmailError(true);
    }

    if (error) {
      return;
    }

    console.log(email);
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        className={`topbar ${dark ? "topbar--dark" : "topbar--light"} ${
          navScrolled ? "scrolled" : ""
        }`}
      >
        <span className="topbar__logo">
          <Link to="/">{dark ? <TopbarLogoWhite /> : <TopbarLogoBlack />}</Link>
        </span>

        <nav className="navdesktop">
          <MenuList
            className="navdesktop"
            handleModalOpen={() => {
              if (email) {
                setEmail("");
              }
              setModalIsOpen(true);
            }}
          />
        </nav>

        <MobileMenu
          navIsOpen={navIsOpen}
          loginIsOpen={loginIsOpen}
          handleNavState={(isOpen: boolean) => {
            setNavIsOpen(isOpen);
          }}
          handleLoginState={(isOpen: boolean) => {
            setLoginIsOpen(isOpen);
          }}
          handleModalOpen={() => {
            if (navIsOpen) {
              setNavIsOpen(false);
            }
            if (email) {
              setEmail("");
            }
            setModalIsOpen(true);
          }}
        />
      </div>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          handleModalClose={() => setModalIsOpen(false)}
          title="Přihlásit se"
        >
          <div className="topbar-modal-content">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <div className="topbar-modal-content__input-wrapper">
              <InputText
                value={email}
                error={emailError}
                onValueChange={(value: string) => setEmail(value)}
                label="Váš email"
              />
            </div>
            <Button text="Odeslat" icon={false} onBtnClick={handleModalForm} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Topbar;
