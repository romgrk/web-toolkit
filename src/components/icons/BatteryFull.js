import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryFullSymbolic } from '../../assets/icons/battery-full-symbolic.svg';

function BatteryFull({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryFullSymbolic)}
    </span>
  );
}

export default BatteryFull;
