import React from "react";
import cx from 'clsx';
import { ReactComponent as TouchDisabledSymbolic } from '../../assets/icons/touch-disabled-symbolic.svg';

function TouchDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TouchDisabledSymbolic)}
    </span>
  );
}

export default TouchDisabled;
