import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationsScienceSymbolic } from '../../assets/icons/applications-science-symbolic.svg';

function ApplicationsScience({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationsScienceSymbolic)}
    </span>
  );
}

export default ApplicationsScience;
