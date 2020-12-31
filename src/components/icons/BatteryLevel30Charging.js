import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel30ChargingSymbolic } from '../../assets/icons/battery-level-30-charging-symbolic.svg';

function BatteryLevel30Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel30ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel30Charging;
