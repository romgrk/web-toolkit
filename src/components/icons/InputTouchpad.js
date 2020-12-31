import React from "react";
import cx from 'clsx';
import { ReactComponent as InputTouchpadSymbolic } from '../../assets/icons/input-touchpad-symbolic.svg';

function InputTouchpad({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InputTouchpadSymbolic)}
    </span>
  );
}

export default InputTouchpad;
