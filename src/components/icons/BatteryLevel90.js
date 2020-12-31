import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel90Symbolic } from '../../assets/icons/battery-level-90-symbolic.svg';

function BatteryLevel90({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel90Symbolic)}
    </span>
  );
}

export default BatteryLevel90;
