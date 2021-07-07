import React from "react";
import Address from "../../components/Address";
import Button from "../../components/Button";
import "./style.scss";
import { Designer } from "../../libary/Pages";
import { useHistory } from "react-router-dom";
import { useInView } from "react-intersection-observer";

type Props = {
  designer: Designer;
};

const DesignersCard: React.FC<Props> = ({ designer }) => {
  const history = useHistory();

  const [designerRef, designerInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={designerRef}
      className={`designer ${designerInView ? "in-view" : ""}`}
    >
      <div className="designer__info">
        <span className="designer__username">{designer.username}</span>
        <h3 className="designer__name">{designer.name}</h3>
        <span className="designer__email">{designer.email}</span>
        <Address address={designer.address} />
        <a
          href={designer.website}
          target="_blank"
          rel="nofollow noreferrer noopener"
          className="designer__link"
        >
          {designer.website}
        </a>
      </div>
      <div className="designer__btn-wrapper">
        <Button
          style="secondary"
          onBtnClick={() => history.push(`/designers/${designer.id}`)}
          text="Zobrazit profil"
        />
      </div>
    </div>
  );
};

export default DesignersCard;
