import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel50ChargingSymbolic } from '../../assets/icons/battery-level-50-charging-symbolic.svg';

function BatteryLevel50Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel50ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel50Charging;
