import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./style.scss";

const SkeletonDesignerCard: React.FC = () => {
  return (
    <div className="skeleton-designer">
      <SkeletonElement type="subtitle" />
      <SkeletonElement type="title" />
      <SkeletonElement type="email" />
      <div className="skeleton-designer__text">
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <div className="skeleton-designer__center">
        <SkeletonElement type="link" />
        <SkeletonElement type="button" />
      </div>
    </div>
  );
};

export default SkeletonDesignerCard;
