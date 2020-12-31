import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationsEngineeringSymbolic } from '../../assets/icons/applications-engineering-symbolic.svg';

function ApplicationsEngineering({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationsEngineeringSymbolic)}
    </span>
  );
}

export default ApplicationsEngineering;
