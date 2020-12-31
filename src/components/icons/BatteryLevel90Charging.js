import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel90ChargingSymbolic } from '../../assets/icons/battery-level-90-charging-symbolic.svg';

function BatteryLevel90Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel90ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel90Charging;
