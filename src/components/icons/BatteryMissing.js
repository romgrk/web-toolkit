import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryMissingSymbolic } from '../../assets/icons/battery-missing-symbolic.svg';

function BatteryMissing({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryMissingSymbolic)}
    </span>
  );
}

export default BatteryMissing;
