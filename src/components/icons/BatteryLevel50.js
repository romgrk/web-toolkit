import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel50Symbolic } from '../../assets/icons/battery-level-50-symbolic.svg';

function BatteryLevel50({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel50Symbolic)}
    </span>
  );
}

export default BatteryLevel50;
