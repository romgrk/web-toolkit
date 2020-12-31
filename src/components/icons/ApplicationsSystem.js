import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationsSystemSymbolic } from '../../assets/icons/applications-system-symbolic.svg';

function ApplicationsSystem({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationsSystemSymbolic)}
    </span>
  );
}

export default ApplicationsSystem;
