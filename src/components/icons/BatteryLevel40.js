import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel40Symbolic } from '../../assets/icons/battery-level-40-symbolic.svg';

function BatteryLevel40({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel40Symbolic)}
    </span>
  );
}

export default BatteryLevel40;
