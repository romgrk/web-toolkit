import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel80ChargingSymbolic } from '../../assets/icons/battery-level-80-charging-symbolic.svg';

function BatteryLevel80Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel80ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel80Charging;
