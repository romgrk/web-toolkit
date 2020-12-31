import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel60Symbolic } from '../../assets/icons/battery-level-60-symbolic.svg';

function BatteryLevel60({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel60Symbolic)}
    </span>
  );
}

export default BatteryLevel60;
