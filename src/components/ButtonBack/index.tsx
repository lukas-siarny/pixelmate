import React from "react";
import "./style.scss";
import { ReactComponent as ArrowRightBlue } from "../../assets/arrow-right-blue.svg";

type Props = {
  text: string;
  onBtnClick?: () => void;
};

const Button: React.FC<Props> = ({ text, onBtnClick }) => {
  return (
    <button
      className={"button-back"}
      onClick={() => {
        if (!onBtnClick) {
          return;
        }

        onBtnClick();
      }}
    >
      <ArrowRightBlue className="button-back__arrow" /> {text}
    </button>
  );
};

export default Button;
