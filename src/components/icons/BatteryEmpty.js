import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryEmptySymbolic } from '../../assets/icons/battery-empty-symbolic.svg';

function BatteryEmpty({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryEmptySymbolic)}
    </span>
  );
}

export default BatteryEmpty;
