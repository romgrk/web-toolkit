import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryEmptyChargingSymbolic } from '../../assets/icons/battery-empty-charging-symbolic.svg';

function BatteryEmptyCharging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryEmptyChargingSymbolic)}
    </span>
  );
}

export default BatteryEmptyCharging;
