import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationXFirmwareSymbolic } from '../../assets/icons/application-x-firmware-symbolic.svg';

function ApplicationXFirmware({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationXFirmwareSymbolic)}
    </span>
  );
}

export default ApplicationXFirmware;
