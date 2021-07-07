import React from "react";
import "./style.scss";
import MenuList from "./MenuList";

type Props = {
  handleModalOpen: () => void;
};

const MobileMenu: React.FC<Props> = ({ handleModalOpen }) => {
  return (
    <nav className="navmobile__nav">
      <MenuList className="navmobile" handleModalOpen={handleModalOpen} />
    </nav>
  );
};

export default MobileMenu;
