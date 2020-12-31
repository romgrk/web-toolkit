import React from "react";
import cx from 'clsx';
import { ReactComponent as OrientationLandscapeInverseSymbolic } from '../../assets/icons/orientation-landscape-inverse-symbolic.svg';

function OrientationLandscapeInverse({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(OrientationLandscapeInverseSymbolic)}
    </span>
  );
}

export default OrientationLandscapeInverse;
