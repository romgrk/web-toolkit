import React from "react";
import cx from 'clsx';
import { ReactComponent as OrientationLandscapeSymbolic } from '../../assets/icons/orientation-landscape-symbolic.svg';

function OrientationLandscape({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(OrientationLandscapeSymbolic)}
    </span>
  );
}

export default OrientationLandscape;
