import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryFullChargedSymbolic } from '../../assets/icons/battery-full-charged-symbolic.svg';

function BatteryFullCharged({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryFullChargedSymbolic)}
    </span>
  );
}

export default BatteryFullCharged;
