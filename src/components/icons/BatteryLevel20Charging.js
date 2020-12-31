import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel20ChargingSymbolic } from '../../assets/icons/battery-level-20-charging-symbolic.svg';

function BatteryLevel20Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel20ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel20Charging;
