import React from "react";
import cx from 'clsx';
import { ReactComponent as BatterySymbolic } from '../../assets/icons/battery-symbolic.svg';

function Battery({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatterySymbolic)}
    </span>
  );
}

export default Battery;
