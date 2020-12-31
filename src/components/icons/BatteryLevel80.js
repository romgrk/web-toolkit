import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel80Symbolic } from '../../assets/icons/battery-level-80-symbolic.svg';

function BatteryLevel80({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel80Symbolic)}
    </span>
  );
}

export default BatteryLevel80;
