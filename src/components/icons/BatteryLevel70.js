import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel70Symbolic } from '../../assets/icons/battery-level-70-symbolic.svg';

function BatteryLevel70({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel70Symbolic)}
    </span>
  );
}

export default BatteryLevel70;
