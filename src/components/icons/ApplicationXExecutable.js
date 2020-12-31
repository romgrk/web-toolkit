import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationXExecutableSymbolic } from '../../assets/icons/application-x-executable-symbolic.svg';

function ApplicationXExecutable({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationXExecutableSymbolic)}
    </span>
  );
}

export default ApplicationXExecutable;
