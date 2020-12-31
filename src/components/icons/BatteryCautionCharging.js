import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryCautionChargingSymbolic } from '../../assets/icons/battery-caution-charging-symbolic.svg';

function BatteryCautionCharging({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryCautionChargingSymbolic)}
    </span>
  );
}

export default BatteryCautionCharging;
