import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationExitSymbolic } from '../../assets/icons/application-exit-symbolic.svg';

function ApplicationExit({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationExitSymbolic)}
    </span>
  );
}

export default ApplicationExit;
