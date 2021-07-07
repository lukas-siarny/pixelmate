import React from "react";
import "./style.scss";

type Props = {
  type: "subtitle" | "title" | "text" | "email" | "picture" | "button" | "link";
};

const SkeletonElement: React.FC<Props> = ({ type }) => {
  return <div className={`skeleton skeleton--${type}`}></div>;
};

export default SkeletonElement;
