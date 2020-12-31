import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel100Symbolic } from '../../assets/icons/battery-level-100-symbolic.svg';

function BatteryLevel100({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel100Symbolic)}
    </span>
  );
}

export default BatteryLevel100;
