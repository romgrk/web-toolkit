import React from "react";
import cx from 'clsx';
import { ReactComponent as TouchpadDisabledSymbolic } from '../../assets/icons/touchpad-disabled-symbolic.svg';

function TouchpadDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TouchpadDisabledSymbolic)}
    </span>
  );
}

export default TouchpadDisabled;
