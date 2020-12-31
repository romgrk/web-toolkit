import React from "react";
import cx from 'clsx';
import { ReactComponent as SoftwareUpdateUrgentSymbolic } from '../../assets/icons/software-update-urgent-symbolic.svg';

function SoftwareUpdateUrgent({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SoftwareUpdateUrgentSymbolic)}
    </span>
  );
}

export default SoftwareUpdateUrgent;
