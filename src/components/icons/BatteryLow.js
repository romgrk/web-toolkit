import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLowSymbolic } from '../../assets/icons/battery-low-symbolic.svg';

function BatteryLow({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLowSymbolic)}
    </span>
  );
}

export default BatteryLow;
