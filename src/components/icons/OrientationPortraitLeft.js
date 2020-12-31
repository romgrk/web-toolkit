import React from "react";
import cx from 'clsx';
import { ReactComponent as OrientationPortraitLeftSymbolic } from '../../assets/icons/orientation-portrait-left-symbolic.svg';

function OrientationPortraitLeft({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(OrientationPortraitLeftSymbolic)}
    </span>
  );
}

export default OrientationPortraitLeft;
