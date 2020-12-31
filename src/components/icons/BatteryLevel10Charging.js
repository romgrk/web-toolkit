import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel10ChargingSymbolic } from '../../assets/icons/battery-level-10-charging-symbolic.svg';

function BatteryLevel10Charging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel10ChargingSymbolic)}
    </span>
  );
}

export default BatteryLevel10Charging;
