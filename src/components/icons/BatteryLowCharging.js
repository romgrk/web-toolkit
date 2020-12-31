import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLowChargingSymbolic } from '../../assets/icons/battery-low-charging-symbolic.svg';

function BatteryLowCharging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLowChargingSymbolic)}
    </span>
  );
}

export default BatteryLowCharging;
