import React from "react";
import Button from "../../components/Button";
import Login from "./Login";
import "./style.scss";
import { useInView } from "react-intersection-observer";

const Header: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <header
        ref={headerRef}
        className={`header ${headerInView ? "in-view" : ""}`}
      >
        <div className="container header__wrapper">
          <div className="row row--center row--between-md">
            <div className="col col-10 col-6-md header__left">
              <h1 className="header__title">
                Specializujeme se na vývoj produktů
              </h1>
              <p className="header__text">
                Ty nejlepší firmy na trhu už CRM systémy nějakou tu dobu
                používají, ale není výjimkou, že se trápí zbytečně.
              </p>
              <div className="header__contact-btn">
                <Button
                  style="primary"
                  text="Kontaktujte nás"
                  onBtnClick={() => console.log("Btn clicked!")}
                />
              </div>
            </div>

            <div className="col col-12 col-4-md header__login-wrapper">
              <Login />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
