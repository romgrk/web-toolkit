import React from "react";
import cx from 'clsx';
import { ReactComponent as KeyboardBrightnessSymbolic } from '../../assets/icons/keyboard-brightness-symbolic.svg';

function KeyboardBrightness({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(KeyboardBrightnessSymbolic)}
    </span>
  );
}

export default KeyboardBrightness;
