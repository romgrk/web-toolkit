import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationsGraphicsSymbolic } from '../../assets/icons/applications-graphics-symbolic.svg';

function ApplicationsGraphics({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationsGraphicsSymbolic)}
    </span>
  );
}

export default ApplicationsGraphics;
