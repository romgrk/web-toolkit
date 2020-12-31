import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryFullChargingSymbolic } from '../../assets/icons/battery-full-charging-symbolic.svg';

function BatteryFullCharging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryFullChargingSymbolic)}
    </span>
  );
}

export default BatteryFullCharging;
