import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryGoodSymbolic } from '../../assets/icons/battery-good-symbolic.svg';

function BatteryGood({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryGoodSymbolic)}
    </span>
  );
}

export default BatteryGood;
