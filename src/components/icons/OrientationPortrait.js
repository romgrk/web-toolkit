import React from "react";
import cx from 'clsx';
import { ReactComponent as OrientationPortraitSymbolic } from '../../assets/icons/orientation-portrait-symbolic.svg';

function OrientationPortrait({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(OrientationPortraitSymbolic)}
    </span>
  );
}

export default OrientationPortrait;
