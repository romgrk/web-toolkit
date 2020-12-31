import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel30Symbolic } from '../../assets/icons/battery-level-30-symbolic.svg';

function BatteryLevel30({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel30Symbolic)}
    </span>
  );
}

export default BatteryLevel30;
