import React from "react";
import cx from 'clsx';
import { ReactComponent as SoftwareUpdateAvailableSymbolic } from '../../assets/icons/software-update-available-symbolic.svg';

function SoftwareUpdateAvailable({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SoftwareUpdateAvailableSymbolic)}
    </span>
  );
}

export default SoftwareUpdateAvailable;
