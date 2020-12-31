import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryLevel100ChargedSymbolic } from '../../assets/icons/battery-level-100-charged-symbolic.svg';

function BatteryLevel100Charged({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryLevel100ChargedSymbolic)}
    </span>
  );
}

export default BatteryLevel100Charged;
