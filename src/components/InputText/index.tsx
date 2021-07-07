import React from "react";
import "./style.scss";

type Props = {
  type?: "text" | "password";
  label: string;
  value: string;
  error: boolean;
  onValueChange: (value: string) => void;
};

const InputText: React.FC<Props> = ({
  type = "text",
  label,
  value = "",
  onValueChange,
  error = false,
}) => {
  const [labelTransition, setLabelTransition] = React.useState(
    !value ? false : true
  );

  return (
    <div className={`textinput ${error ? "textinput--error" : ""}`}>
      <label
        htmlFor={label}
        className={`textinput__label ${
          labelTransition ? "textinput__label--focused" : ""
        }`}
      >
        {label} {error && "*"}
      </label>
      <input
        type={type}
        className="textinput__input"
        name={label}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        onFocus={() => {
          setLabelTransition(true);
        }}
        onBlur={() => {
          if (!value) {
            setLabelTransition(false);
          }
        }}
      />
    </div>
  );
};

export default InputText;
