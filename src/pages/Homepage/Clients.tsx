import React from "react";
import "./style.scss";
import boosch from "./images/clients/bosch/bosch.png";
import cemix from "./images/clients/cemix/cemix.png";
import ct from "./images/clients/ct/ct.png";
import deloitte from "./images/clients/deloitte/deloitte.png";
import { ReactComponent as Museum } from "./images/clients/museum.svg";
import { useInView } from "react-intersection-observer";

const Clients: React.FC = () => {
  const [clientRef, clientInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section
      ref={clientRef}
      className={`clients container ${clientInView ? "in-view" : ""}`}
    >
      <div className="col col-12">
        <div className="clients__grid">
          <div className="clients__client">
            <img src={boosch} alt="Bosch" />
          </div>
          <div className="clients__client">
            <img src={cemix} alt="Bosch" />
          </div>
          <div className="clients__client">
            <img src={ct} alt="Bosch" />
          </div>
          <div className="clients__client">
            <Museum />
          </div>
          <div className="clients__client">
            <img src={deloitte} alt="Bosch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
