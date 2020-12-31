import React from "react";
import cx from 'clsx';
import { ReactComponent as OrientationPortraitInverseSymbolic } from '../../assets/icons/orientation-portrait-inverse-symbolic.svg';

function OrientationPortraitInverse({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(OrientationPortraitInverseSymbolic)}
    </span>
  );
}

export default OrientationPortraitInverse;
