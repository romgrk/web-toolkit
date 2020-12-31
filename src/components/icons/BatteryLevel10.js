import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel10Symbolic } from '../../assets/icons/battery-level-10-symbolic.svg';

function BatteryLevel10({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel10Symbolic)}
    </span>
  );
}

export default BatteryLevel10;
