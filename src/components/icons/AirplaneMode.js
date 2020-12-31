import React from "react";
import cx from 'clsx';
import { ReactComponent as AirplaneModeSymbolic } from '../../assets/icons/airplane-mode-symbolic.svg';

function AirplaneMode({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AirplaneModeSymbolic)}
    </span>
  );
}

export default AirplaneMode;
