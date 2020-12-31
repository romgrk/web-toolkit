import React from "react";
import cx from 'clsx';
import { ReactComponent as LocationServicesActiveSymbolic } from '../../assets/icons/location-services-active-symbolic.svg';

function LocationServicesActive({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(LocationServicesActiveSymbolic)}
    </span>
  );
}

export default LocationServicesActive;
