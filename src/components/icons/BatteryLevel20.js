import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel20Symbolic } from '../../assets/icons/battery-level-20-symbolic.svg';

function BatteryLevel20({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel20Symbolic)}
    </span>
  );
}

export default BatteryLevel20;
