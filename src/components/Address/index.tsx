import React from "react";
import "./style.scss";
import { ReactComponent as LocationIcon } from "../../assets/location-icon.svg";
import { Address } from "../../libary/Pages";

type Props = {
  address: Address;
};

const Footer: React.FC<Props> = ({ address }) => {
  return (
    <address className="designer-address">
      <LocationIcon />
      <div className="designer-address__right">
        <strong>{address.city}</strong>
        <br />
        {`${address.street} ${address.suite}`}
        <br />
        {`${address.zipcode} ${address.city}`}
      </div>
    </address>
  );
};

export default Footer;
