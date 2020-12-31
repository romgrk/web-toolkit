import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationsUtilitiesSymbolic } from '../../assets/icons/applications-utilities-symbolic.svg';

function ApplicationsUtilities({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationsUtilitiesSymbolic)}
    </span>
  );
}

export default ApplicationsUtilities;
