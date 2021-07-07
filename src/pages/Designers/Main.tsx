import React from "react";
import NotFound from "../../components/NotFound";
import SkeletonDesigner from "../../components/SkeletonLoading/SkeletonDesignerCard";
import { Designer, Status } from "../../libary/Pages";
import DesignersCard from "./DesignerCard";
import "./style.scss";

type Props = {
  designers: Designer[] | [];
  designersSearch: Designer[] | [];
  status: Status;
  searchIsActive: boolean;
};

const DeignersMain: React.FC<Props> = ({
  designers,
  status,
  designersSearch,
  searchIsActive,
}) => {
  return (
    <main className="designers-main">
      <div className="container designers-main__wrapper row">
        {searchIsActive ? (
          <>
            {designersSearch.length > 0 &&
              designersSearch.map((designer: Designer, i: number) => (
                <div className="col col-12 col-6-sm col-4-lg" key={i}>
                  <DesignersCard designer={designer} />
                </div>
              ))}

            {designersSearch.length === 0 && (
              <NotFound text="Pre zadaný výraz neboli nájdené žiadne záznamy" />
            )}
          </>
        ) : (
          <>
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

            {status === Status.ERROR && (
              <NotFound text="Error: niekde sa stala chyba" />
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default DeignersMain;
