import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Address from "../../components/Address";
import ButtonBack from "../../components/ButtonBack";
import Topbar from "../../components/Topbar";
import { Designer, Status } from "../../libary/Pages";
import "./style.scss";
import DesignerImage from "./imges/designer.png";
import { useInView } from "react-intersection-observer";
import SkeletonDesignerDetail from "../../components/SkeletonLoading/SkeletonDesignerDetail";
import SkeletonElement from "../../components/SkeletonLoading/SkeletonElement";
import NotFound from "../../components/NotFound";

const DesignerDetail: React.FC = () => {
  const [designer, setDesigner] = React.useState<Designer | null>(null);
  const [status, setStatus] = React.useState(Status.IDLE);
  const history = useHistory();
  const { id } = useParams<{ id?: string }>();

  const [detailRef, detailInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    (async () => {
      setStatus(Status.LOADING);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();

        if (Object.keys(data).length === 0) {
          setStatus(Status.NOT_FOUND);
          return;
        }

        setDesigner(data);
        setStatus(Status.FULFILLED);
      } catch (err) {
        setStatus(Status.ERROR);
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <Topbar dark={false} />
      <main
        ref={detailRef}
        className={`designer-detail container row row--center ${
          detailInView ? "in-view" : ""
        }`}
      >
        <div className="col col-12 col-4-md designer-detail__col-left">
          <div className="designer-detail__btn-wrapper">
            <ButtonBack
              text="Zpěť"
              onBtnClick={() => history.push("/designers")}
            />
          </div>
          {status === Status.FULFILLED && designer && (
            <div className="designer-detail__info">
              <span className="designer-detail__username">
                {designer.username}
              </span>
              <h3 className="designer-detail__name">{designer.name}</h3>
              <span className="designer-detail__email">{designer.email}</span>
              <div className="designer-detail__address-wrapper">
                <Address address={designer.address} />
              </div>
              <a
                href={designer.website}
                target="_blank"
                rel="nofollow noreferrer noopener"
                className="designer-detail__link"
              >
                {designer.website}
              </a>
              <div className="designer-detail__text">
                <strong>Pixelmate s.r.o.</strong>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus
                  malesuada.
                </p>
              </div>
            </div>
          )}
          {status === Status.LOADING && <SkeletonDesignerDetail />}
        </div>

        <div className="col col-12 col-6-md col-5-ld designer-detail__col-right`">
          {status === Status.FULFILLED && designer && (
            <img
              ref={imageRef}
              src={DesignerImage}
              alt={designer?.name}
              className={`designer-detail__picture ${
                imageInView ? "in-view" : ""
              }`}
            />
          )}
          {status === Status.LOADING && (
            <div className="designer-detail__skeleton">
              <SkeletonElement type="picture" />
            </div>
          )}
        </div>
        {status === Status.NOT_FOUND && (
          <NotFound text="Požadovaný designer nebol nájdený" />
        )}
      </main>
    </>
  );
};

export default DesignerDetail;
