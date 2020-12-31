import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel60ChargingSymbolic } from '../../assets/icons/battery-level-60-charging-symbolic.svg';

function BatteryLevel60Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel60ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel60Charging;
