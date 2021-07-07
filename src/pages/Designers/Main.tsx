import React from "react";
import SkeletonDesigner from "../../components/SkeletonLoading/SkeletonDesignerCard";
import { Designer, Status } from "../../libary/Pages";
import DesignersCard from "./DesignerCard";
import "./style.scss";

type Props = {
  designers: Designer[] | [];
  status: Status;
};

const DeignersMain: React.FC<Props> = ({ designers, status }) => {
  return (
    <main className="designers-main">
      <div className="container designers-main__wrapper row">
        {status === Status.FULFILLED &&
          designers.length > 0 &&
          designers.map((designer: Designer, i: number) => (
            <div className="col col-12 col-6-sm col-4-lg" key={i}>
              <DesignersCard designer={designer} />
            </div>
          ))}

        {status === Status.LOADING &&
          [1, 2, 3, 4, 5, 6].map((skeleton: number) => (
            <div className="col col-12 col-6-sm col-4-lg" key={skeleton}>
              <SkeletonDesigner />
            </div>
          ))}
      </div>
    </main>
  );
};

export default DeignersMain;
