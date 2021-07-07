import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

type Props = {
  className: "navdesktop" | "navmobile";
  handleModalOpen: () => void;
};

const MobileMenu: React.FC<Props> = ({ className, handleModalOpen }) => {
  return (
    <>
      <ul className={`${className}__list`}>
        <li className={`${className}__list-item`}>
          <Link to="/designers">Designéři</Link>
        </li>
        <li className={`${className}__list-item`}>Portfolio</li>
        <li className={`${className}__list-item`}>
          <button className="login-btn" type="button" onClick={handleModalOpen}>
            Přihlásit se
          </button>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
