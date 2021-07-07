import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./style.scss";

const SkeletonDesignerDetail: React.FC = () => {
  return (
    <div className="skeleton-designer-detial">
      <SkeletonElement type="subtitle" />
      <SkeletonElement type="title" />
      <SkeletonElement type="email" />
      <div className="skeleton-designer-detial__text">
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <div className="skeleton-designer-detial__center">
        <SkeletonElement type="link" />
      </div>
      <div className="skeleton-designer-detial__text">
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default SkeletonDesignerDetail;
