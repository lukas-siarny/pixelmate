import React from "react";
import "./style.scss";

type Props = {
  text: string;
};

const Footer: React.FC<Props> = ({ text }) => {
  return <div className="not-found">{text}</div>;
};

export default Footer;
