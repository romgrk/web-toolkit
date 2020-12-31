import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel40ChargingSymbolic } from '../../assets/icons/battery-level-40-charging-symbolic.svg';

function BatteryLevel40Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel40ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel40Charging;
