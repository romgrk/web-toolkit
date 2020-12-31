import React from "react";
import cx from 'clsx';
import { ReactComponent as LocationServicesDisabledSymbolic } from '../../assets/icons/location-services-disabled-symbolic.svg';

function LocationServicesDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(LocationServicesDisabledSymbolic)}
    </span>
  );
}

export default LocationServicesDisabled;
