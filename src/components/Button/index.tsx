import React from "react";
import "./style.scss";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlue } from "../../assets/arrow-right-blue.svg";

type Props = {
  type?: "button" | "submit";
  fullwidth?: boolean;
  text: string;
  style?: "primary" | "secondary";
  icon?: boolean;
  onBtnClick?: () => void;
};

const Button: React.FC<Props> = ({
  type = "button",
  text,
  style = "primary",
  onBtnClick,
  fullwidth,
  icon = true,
}) => {
  return (
    <button
      type={type}
      className={`button ${
        style === "primary" ? "button--primary" : "button--secondary"
      } ${fullwidth ? "button--fullwidth" : ""}`}
      onClick={() => {
        if (!onBtnClick) {
          return;
        }

        onBtnClick();
      }}
    >
      {text}
      {style === "primary" && icon && (
        <ArrowRightWhite className="button__arrow-primary" />
      )}
      {style === "secondary" && icon && (
        <ArrowRightBlue className="button__arrow-secondary" />
      )}
    </button>
  );
};

export default Button;
