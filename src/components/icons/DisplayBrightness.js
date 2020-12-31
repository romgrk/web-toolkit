import React from "react";
import cx from 'clsx';
import { ReactComponent as DisplayBrightnessSymbolic } from '../../assets/icons/display-brightness-symbolic.svg';

function DisplayBrightness({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DisplayBrightnessSymbolic)}
    </span>
  );
}

export default DisplayBrightness;
