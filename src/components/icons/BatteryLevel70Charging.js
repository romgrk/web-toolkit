import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel70ChargingSymbolic } from '../../assets/icons/battery-level-70-charging-symbolic.svg';

function BatteryLevel70Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel70ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel70Charging;
