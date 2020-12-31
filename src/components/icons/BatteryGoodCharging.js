import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryGoodChargingSymbolic } from '../../assets/icons/battery-good-charging-symbolic.svg';

function BatteryGoodCharging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryGoodChargingSymbolic)}
    </span>
  );
}

export default BatteryGoodCharging;
