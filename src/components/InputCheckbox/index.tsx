import React from "react";
import "./style.scss";

type Props = {
  label: string;
  value: boolean;
  error: boolean;
  onValueChange: () => void;
};

const InputCheckbox: React.FC<Props> = ({
  label,
  value = false,
  onValueChange,
  error = false,
}) => {
  return (
    <div className={`checkinput ${error ? "checkinput--error" : ""}`}>
      <label className="checkinput__label">
        <input
          type="checkbox"
          className="checkinput__input-real"
          name={label}
          checked={value}
          onChange={onValueChange}
        />
        <span className="checkinput__input-fake" />
        <span className="checkinput__label-text">{label}</span>
      </label>
    </div>
  );
};

export default InputCheckbox;
