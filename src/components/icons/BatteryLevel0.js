import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel0Symbolic } from '../../assets/icons/battery-level-0-symbolic.svg';

function BatteryLevel0({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel0Symbolic)}
    </span>
  );
}

export default BatteryLevel0;
