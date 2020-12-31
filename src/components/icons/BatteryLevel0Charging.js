import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel0ChargingSymbolic } from '../../assets/icons/battery-level-0-charging-symbolic.svg';

function BatteryLevel0Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel0ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel0Charging;
